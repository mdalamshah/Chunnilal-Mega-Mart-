"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function ReplayButton() {
  return (
    <button className="min-h-[46px] rounded-full border border-gold px-6 py-3"
      onClick={() => { try { sessionStorage.removeItem("seen"); } catch {} location.reload(); }}>
      Replay intro
    </button>
  );
}

// Plays the owner's logo video once per session. Never blocks browsing: Skip, Esc, error and a 12s failsafe all end it.
export default function Intro() {
  const [show, setShow] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const done = useRef(false);

  const end = useCallback(() => {
    if (done.current) return;
    done.current = true;
    try { sessionStorage.setItem("seen", "1"); } catch {}
    window.dispatchEvent(new Event("intro-done"));
    gsap.to(root.current, { opacity: 0, duration: 0.7, onComplete: () => setShow(false) });
  }, []);

  useEffect(() => {
    let seen = false;
    try { seen = !!sessionStorage.getItem("seen"); } catch {}
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) window.dispatchEvent(new Event("intro-done")); else setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const failsafe = setTimeout(end, 12000);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") end(); };
    addEventListener("keydown", onKey);
    vid.current?.play().catch(end);
    return () => { clearTimeout(failsafe); removeEventListener("keydown", onKey); };
  }, [show, end]);

  if (!show) return null;
  return (
    <div ref={root} role="dialog" aria-label="Welcome to Chunnilal Mega Mart" className="fixed inset-0 z-[100] bg-[#0b1010]">
      <video ref={vid} muted playsInline preload="auto" onEnded={end} onError={end} className="h-full w-full object-cover portrait:object-contain">
        <source src="/media/logo-intro.webm" type="video/webm" />
        <source src="/media/logo-intro.mp4" type="video/mp4" />
      </video>
      <button onClick={end} className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 min-h-[46px] rounded-full border border-gold bg-black/40 px-6 py-3">Skip intro</button>
    </div>
  );
}
