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

// Self-contained intro: never depends on a missing video asset.
export default function Intro() {
  const [show, setShow] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  const end = useCallback(() => {
    if (done.current) return;
    done.current = true;
    try { sessionStorage.setItem("seen", "1"); } catch {}
    window.dispatchEvent(new Event("intro-done"));
    gsap.to(root.current, { opacity: 0, duration: 0.65, onComplete: () => setShow(false) });
  }, []);

  useEffect(() => {
    let seen = false;
    try { seen = !!sessionStorage.getItem("seen"); } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) window.dispatchEvent(new Event("intro-done"));
    else setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const failsafe = window.setTimeout(end, 5600);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") end(); };
    window.addEventListener("keydown", onKey);
    return () => { window.clearTimeout(failsafe); window.removeEventListener("keydown", onKey); };
  }, [show, end]);

  if (!show) return null;
  return (
    <div ref={root} role="dialog" aria-label="Welcome to Chunnilal Mega Mart" className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#100509]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,20,48,.36),transparent_65%)]" />
      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <img src="/logo.svg" alt="Chunnilal Mega Mart logo" width="150" height="150" className="h-32 w-32 object-contain sm:h-40 sm:w-40" />
        <p className="mt-4 font-serif text-2xl font-extrabold tracking-wide text-ivory sm:text-4xl">Chunnilal Mega Mart</p>
        <p className="mt-2 text-xs uppercase tracking-[.28em] text-gold sm:text-sm">Style for every celebration</p>
      </div>
      <svg viewBox="0 0 900 650" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
        <defs><linearGradient id="intro-silk" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f5b9cf"/><stop offset=".35" stopColor="#c51e4a"/><stop offset=".7" stopColor="#80142f"/><stop offset="1" stopColor="#e8c36a"/></linearGradient></defs>
        <g className="intro-chunni">
          <path d="M-170 155 C70 0 160 320 370 160 S700 30 1080 170 L1080 250 C740 90 650 385 360 235 S70 95 -170 230Z" fill="url(#intro-silk)" opacity=".92"/>
          <path d="M-140 180 C75 45 170 335 370 185 S715 55 1060 195" fill="none" stroke="#f5df9b" strokeWidth="5" opacity=".9"/>
          <path d="M-150 470 C85 330 205 590 410 450 S730 340 1070 485 L1070 525 C760 400 650 610 405 500 S70 405 -150 535Z" fill="url(#intro-silk)" opacity=".48"/>
        </g>
      </svg>
      <button onClick={end} className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-20 min-h-[46px] rounded-full border border-gold bg-black/40 px-6 py-3">Skip intro</button>
    </div>
  );
}
