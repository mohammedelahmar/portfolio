import { useState, useCallback } from "react";

// ── MOTD / Initial terminal session ──────────────────────────────────
const INITIAL_HISTORY = [
  "MOHAMMED@ELAHMAR",
  "────────────────────────────────────────",
  "SYSTEM    GCIAC @ INNIA Settat",
  "ROLE      Cybersecurity & Full-Stack Engineer",
  "STATUS    ● ONLINE",
  "FOCUS     Cybersecurity · AI · Backend",
  "────────────────────────────────────────",
  "06 Projects  ·  02 Internships  ·  01 Specialization",
  "",
  "[SYSTEM READY] Interactive shell initialized.",
  "",
  "user@mohammed:~$ help",
  "commands: help · whoami · projects · skills · certs · cv · clear · goto [section]",
];

// ── Autocomplete targets ─────────────────────────────────────────────
const COMMANDS = [
  "help",
  "clear",
  "whoami",
  "projects",
  "skills",
  "certs",
  "cv",
  "download cv",
  "goto projects",
  "goto skills",
  "goto experience",
  "goto stack",
  "goto learning",
  "goto contact",
  "sudo login",
  "login admin",
  "toggle matrix",
  "logout",
];

export function useTerminal(playEnter: () => void, playDenied: () => void) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(INITIAL_HISTORY);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [passwordMode, setPasswordMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [matrixEnabled, setMatrixEnabled] = useState(true);

  const appendHistory = useCallback((lines: string[]) => {
    setHistory((prev) => [...prev, ...lines].slice(-60));
  }, []);

  const executeCommand = useCallback(
    (cmdRaw: string) => {
      playEnter();
      const cmd = cmdRaw.trim();
      if (!cmd) return;

      setHistoryIndex(-1);

      // ── PASSWORD MODE ──
      if (passwordMode) {
        if (cmd === "admin") {
          appendHistory([
            "root@mohammed:~$ *****",
            "ACCESS GRANTED.",
            "Loading admin modules...",
          ]);
          setIsAdmin(true);
          setPasswordMode(false);
        } else {
          appendHistory([
            "root@mohammed:~$ *****",
            "ACCESS DENIED.",
            "Nice try. 😎",
          ]);
          playDenied();
          setPasswordMode(false);
        }
        setInput("");
        return;
      }

      // ── STANDARD COMMANDS ──
      const lowerCmd = cmd.toLowerCase();

      switch (lowerCmd) {
        // ── help ──
        case "help":
          appendHistory([
            `user@mohammed:~$ ${cmdRaw}`,
            "commands: help · whoami · projects · skills · certs · cv · clear · goto [section]",
          ]);
          break;

        // ── clear ──
        case "clear":
          setHistory([]);
          break;

        // ── whoami ──
        case "whoami":
          appendHistory([
            `user@mohammed:~$ ${cmdRaw}`,
            "",
            "Mohammed El Ahmar",
            "Cybersecurity & Full-Stack Engineer",
            "Engineering Student — GCIAC @ INNIA Settat",
            "",
            "FOCUS",
            "→ Cybersecurity",
            "→ Artificial Intelligence",
            "→ Secure Software Engineering",
            "→ Full-Stack Development",
          ]);
          break;

        // ── projects ──
        case "projects":
          appendHistory([
            `user@mohammed:~$ ${cmdRaw}`,
            "",
            "FEATURED PROJECTS",
            "01  ExpenseTracker      MERN Stack",
            "02  InstaTrack          Python / Flask",
            "03  TopoMap             MERN / GIS",
            "04  Elegance Commerce   MERN Stack",
            "05  TikTok Agent        Python / React",
            "06  ClubHub             Java / Spring",
            "",
            'Type "goto projects" to view details.',
          ]);
          break;

        // ── skills ──
        case "skills":
          appendHistory([
            `user@mohammed:~$ ${cmdRaw}`,
            "",
            "LANGUAGES",
            "Python · Java · JavaScript · C/C++ · SQL",
            "",
            "FULL-STACK",
            "React · Node.js · Express · MongoDB",
            "",
            "SECURITY",
            "Web Security · Network Security · Linux · OWASP",
            "",
            "AI",
            "Machine Learning · Computer Vision",
          ]);
          break;

        // ── certs ──
        case "certs":
          appendHistory([
            `user@mohammed:~$ ${cmdRaw}`,
            "",
            "CERTIFICATIONS",
            "",
            "[ IN PROGRESS ]",
            "CEH — Certified Ethical Hacker",
            "Currently preparing",
          ]);
          break;

        // ── cv ──
        case "cv":
        case "download cv":
          appendHistory([
            `user@mohammed:~$ ${cmdRaw}`,
            "Opening Mohammed El Ahmar — CV...",
          ]);
          window.open("/resume.pdf", "_blank");
          break;

        // ── goto navigation ──
        case "goto projects":
          appendHistory([`user@mohammed:~$ ${cmdRaw}`, "navigating -> projects"]);
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "goto skills":
          appendHistory([`user@mohammed:~$ ${cmdRaw}`, "navigating -> technical focus"]);
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "goto experience":
          appendHistory([`user@mohammed:~$ ${cmdRaw}`, "navigating -> experience"]);
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "goto stack":
          appendHistory([`user@mohammed:~$ ${cmdRaw}`, "navigating -> tech stack"]);
          document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "goto learning":
          appendHistory([`user@mohammed:~$ ${cmdRaw}`, "navigating -> currently learning"]);
          document.getElementById("learning")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "goto contact":
          appendHistory([`user@mohammed:~$ ${cmdRaw}`, "navigating -> contact"]);
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          break;

        // ── easter egg ──
        case "sudo login":
        case "login admin":
          appendHistory([
            `user@mohammed:~$ ${cmdRaw}`,
            "[sudo] authentication required...",
          ]);
          setPasswordMode(true);
          break;

        // ── toggle matrix ──
        case "toggle matrix":
          setMatrixEnabled((prev) => !prev);
          appendHistory([
            `user@mohammed:~$ ${cmdRaw}`,
            `Matrix effect: ${!matrixEnabled ? "ON" : "OFF"}`,
          ]);
          break;

        // ── logout ──
        case "logout":
          if (isAdmin) {
            setIsAdmin(false);
            appendHistory([`user@mohammed:~$ ${cmdRaw}`, "Session terminated."]);
          } else {
            appendHistory([`user@mohammed:~$ ${cmdRaw}`, "You are not logged in."]);
          }
          break;

        // ── unknown ──
        default:
          appendHistory([
            `user@mohammed:~$ ${cmdRaw}`,
            `command not found: ${cmdRaw}. Type "help" for available commands.`,
          ]);
      }
      setInput("");
    },
    [passwordMode, matrixEnabled, isAdmin, playEnter, playDenied, appendHistory],
  );

  // ── Command stack for Up/Down arrow navigation ──
  const [cmdStack, setCmdStack] = useState<string[]>([]);

  const handleCommand = (cmd: string) => {
    if (!passwordMode && cmd.trim()) {
      setCmdStack((prev) => [...prev, cmd]);
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
      if (newIndex === -1) return;
      newIndex = Math.min(cmdStack.length - 1, newIndex + 1);
    }

    setHistoryIndex(newIndex);
    setInput(cmdStack[newIndex]);
  };

  const autocomplete = () => {
    if (!input.trim()) return;
    const match = COMMANDS.find((c) => c.startsWith(input.toLowerCase()));
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
