import { useState, useCallback, useEffect } from "react";

type TerminalState = {
     input: string;
     history: string[];
     historyIndex: number; // -1 means executing new command, >= 0 means browsing history
     passwordMode: boolean;
     isAdmin: boolean;
     matrixEnabled: boolean;
};

const COMMANDS = [
     "help",
     "clear",
     "goto projects",
     "goto skills",
     "goto experience",
     "whoami",
     "download cv",
     "sudo login",
     "login admin",
     "toggle matrix",
     "logout",
];

export function useTerminal(playEnter: () => void, playDenied: () => void) {
     const [input, setInput] = useState("");
     const [history, setHistory] = useState<string[]>([
          "user@mohammed:~$ help",
          "commands: help · clear · goto projects · whoami · download cv · sudo login",
     ]);
     const [historyIndex, setHistoryIndex] = useState(-1);
     const [passwordMode, setPasswordMode] = useState(false);
     const [isAdmin, setIsAdmin] = useState(false);
     const [matrixEnabled, setMatrixEnabled] = useState(true);

     const appendHistory = useCallback((lines: string[]) => {
          setHistory((prev) => [...prev, ...lines].slice(-50));
     }, []);

     const executeCommand = useCallback(
          (cmdRaw: string) => {
               playEnter();
               const cmd = cmdRaw.trim();
               if (!cmd) return;

               // Reset history index when executing new command
               setHistoryIndex(-1);

               // Save command to history for navigation (filter out empty or duplicates if desired, but standard shell keeps all)
               // We don't save passwords
               if (!passwordMode) {
                    // We'll rely on the visual history for navigation for now, but usually shells have a separate history buffer
                    // Let's implement a separate "command buffer" for navigation if we want it perfect, 
                    // but re-using visual history lines that start with "user@..." is parsing heavy.
                    // Simplified: push to a hidden command history? 
                    // For this specific UI, the "history" state IS the visual log.
                    // Let's keep it simple: we will just match what was typed.
               }

               // 1. PASSWORD MODE
               if (passwordMode) {
                    if (cmd === "admin") {
                         appendHistory([`root@mohammed:~$ *****`, "ACCESS GRANTED.", "Loading admin modules..."]);
                         setIsAdmin(true);
                         setPasswordMode(false);
                    } else {
                         appendHistory([`root@mohammed:~$ *****`, "ACCESS DENIED.", "Incident reported."]);
                         playDenied();
                         setPasswordMode(false);
                    }
                    setInput("");
                    return;
               }

               // 2. STANDARD COMMAND MODE
               const lowerCmd = cmd.toLowerCase();

               // Basic "navigation" history - we'll just store the raw command in a hidden way if we want full shell feel, 
               // but for now let's just process the command.

               switch (lowerCmd) {
                    case "help":
                         appendHistory([
                              `user@mohammed:~$ ${cmdRaw}`,
                              "commands: help · clear · goto [section] · whoami · download cv · sudo login · toggle matrix",
                         ]);
                         break;
                    case "clear":
                         setHistory([]);
                         break;
                    case "goto projects":
                         appendHistory([`user@mohammed:~$ ${cmdRaw}`, "navigating -> projects"]);
                         document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                         break;
                    case "goto skills":
                         appendHistory([`user@mohammed:~$ ${cmdRaw}`, "navigating -> skills"]);
                         document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
                         break;
                    case "goto experience":
                         appendHistory([`user@mohammed:~$ ${cmdRaw}`, "navigating -> experience"]);
                         document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                         break;
                    case "download cv":
                         appendHistory([`user@mohammed:~$ ${cmdRaw}`, "opening resume.pdf"]);
                         window.open("/resume.pdf", "_blank");
                         break;
                    case "whoami":
                         appendHistory([
                              `user@mohammed:~$ ${cmdRaw}`,
                              "security-focused engineer · red/blue crossover · builds control-room UIs",
                         ]);
                         break;
                    case "toggle matrix":
                         setMatrixEnabled((prev) => !prev);
                         appendHistory([
                              `user@mohammed:~$ ${cmdRaw}`,
                              `Matrix effect: ${!matrixEnabled ? "ON" : "OFF"}`,
                         ]);
                         break;
                    case "sudo login":
                    case "login admin":
                         appendHistory([`user@mohammed:~$ ${cmdRaw}`, "Enter root password:"]);
                         setPasswordMode(true);
                         break;
                    case "logout":
                         if (isAdmin) {
                              setIsAdmin(false);
                              appendHistory([`user@mohammed:~$ ${cmdRaw}`, "Session terminated."]);
                         } else {
                              appendHistory([`user@mohammed:~$ ${cmdRaw}`, "You are not logged in."]);
                         }
                         break;
                    default:
                         appendHistory([`user@mohammed:~$ ${cmdRaw}`, "command not found. try 'help'"]);
               }
               setInput("");
          },
          [passwordMode, matrixEnabled, isAdmin, playEnter, playDenied, appendHistory]
     );

     // Command Navigation Logic
     // We need a separate history of typed commands for Up/Down arrow navigation
     const [cmdStack, setCmdStack] = useState<string[]>([]);

     // Wrap execute to save to stack
     const handleCommand = (cmd: string) => {
          if (!passwordMode && cmd.trim()) {
               setCmdStack(prev => [...prev, cmd]);
          }
          executeCommand(cmd);
          setHistoryIndex(-1);
     };

     const navigateHistory = (direction: "up" | "down") => {
          if (cmdStack.length === 0) return;

          let newIndex = historyIndex;
          if (direction === "up") {
               if (newIndex === -1) {
                    newIndex = cmdStack.length - 1;
               } else {
                    newIndex = Math.max(0, newIndex - 1);
               }
          } else {
               if (newIndex === -1) return; // already at bottom
               newIndex = Math.min(cmdStack.length - 1, newIndex + 1);
          }

          setHistoryIndex(newIndex);
          // If we moved "down" past the last item, clear input (like a real shell)
          // Actually real shell restores the "current draft". For simplicity, let's just go blank if we go past end?
          // Or just clamp at end. 
          // Let's clamp at end for now. 
          setInput(cmdStack[newIndex]);
     };

     const autocomplete = () => {
          if (!input.trim()) return;
          const match = COMMANDS.find(c => c.startsWith(input.toLowerCase()));
          if (match) {
               setInput(match);
          }
     };

     return {
          input,
          setInput,
          history,
          handleCommand,
          navigateHistory,
          autocomplete,
          passwordMode,
          isAdmin,
          matrixEnabled,
     };
}
