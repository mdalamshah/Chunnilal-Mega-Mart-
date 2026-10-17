"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function ReplayButton() {
  return <button className="min-h-[44px] rounded-full border border-[#1e4636]/25 px-5 py-2.5 text-sm font-medium text-[#1e4636] transition hover:bg-[#1e4636]/5" onClick={() => { try { sessionStorage.removeItem("seen"); } catch {} location.reload(); }}>Replay intro</button>;
}

export default function Intro() {
  const [show, setShow] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  const end = useCallback(() => {
    if (done.current) return;
    done.current = true;
    try { sessionStorage.setItem("seen", "1"); } catch {}
    gsap.to(root.current, { opacity: 0, duration: 0.45, onComplete: () => setShow(false) });
  }, []);
  useEffect(() => {
    let seen = false;
    try { seen = !!sessionStorage.getItem("seen"); } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!seen && !reduce) setShow(true);
  }, []);
  useEffect(() => {
    if (!show) return;
    const timer = window.setTimeout(end, 2600);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") end(); };
    window.addEventListener("keydown", onKey);
    return () => { window.clearTimeout(timer); window.removeEventListener("keydown", onKey); };
  }, [show, end]);
  if (!show) return null;
  return (
    <div ref={root} role="dialog" aria-label="Welcome to Chunnilal Mega Mart" className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#f8f3e9]">
      <video className="absolute inset-0 h-full w-full object-cover opacity-20" src="/media/logo-intro.mp4" autoPlay muted playsInline onEnded={end} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(183,139,67,.18),transparent_60%),linear-gradient(145deg,rgba(248,243,233,.88),rgba(248,243,233,.97))]" />
      <div className="relative z-10 px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[.32em] text-[#a34b42]">Welcome to</p>
        <h1 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-[#1e4636] sm:text-6xl">Chunnilal Mega Mart</h1>
        <p className="mt-4 text-xs uppercase tracking-[.24em] text-[#8c6b35] sm:text-sm">Ethnic · Everyday · Elegant</p>
        <button onClick={end} className="mt-8 min-h-[44px] rounded-full bg-[#1e4636] px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#a34b42]">Enter store ↗</button>
      </div>
      <button onClick={end} className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-20 min-h-[44px] rounded-full border border-[#1e4636]/20 bg-white/75 px-5 py-2 text-sm text-[#1e4636]">Skip intro</button>
    </div>
  );
}
