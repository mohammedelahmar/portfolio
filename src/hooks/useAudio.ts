import { useRef, useCallback } from "react";

export function useAudio() {
     const audioCtxRef = useRef<AudioContext | null>(null);

     const ensureAudio = useCallback(() => {
          if (!audioCtxRef.current) {
               // @ts-ignore - AudioContext may not be defined in SSR or some environments without window
               if (typeof window !== "undefined" && window.AudioContext) {
                    audioCtxRef.current = new window.AudioContext();
               }
          }
          return audioCtxRef.current;
     }, []);

     const playTone = useCallback(
          (freq: number, duration: number, volume: number, type: OscillatorType) => {
               const ctx = ensureAudio();
               if (!ctx) return;

               const osc = ctx.createOscillator();
               const gain = ctx.createGain();

               osc.type = type;
               osc.frequency.setValueAtTime(freq, ctx.currentTime);

               gain.gain.setValueAtTime(volume, ctx.currentTime);
               gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

               osc.connect(gain).connect(ctx.destination);
               osc.start();
               osc.stop(ctx.currentTime + duration);
          },
          [ensureAudio]
     );

     const playHover = useCallback(() => playTone(1400, 0.05, 0.02, "sine"), [playTone]);
     const playEnter = useCallback(() => playTone(280, 0.12, 0.05, "square"), [playTone]);
     const playDenied = useCallback(() => playTone(110, 0.25, 0.08, "sawtooth"), [playTone]);

     return { playHover, playEnter, playDenied };
}
