"use client";
import { useEffect, useState } from "react";

export default function Hero3D() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return (
    <div className="relative mx-auto flex h-[min(48vh,440px)] min-h-[300px] w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[2rem] border border-gold/25 bg-[radial-gradient(ellipse_at_center,rgba(130,25,51,.36),rgba(18,5,9,.15)_58%,transparent_75%)]" aria-label="Elegant flowing fabric display">
      <div className="absolute inset-[8%] rounded-full border border-gold/20 shadow-[0_0_70px_rgba(201,162,75,.08)]" />
      <div className="absolute inset-[15%] rounded-full border border-dashed border-gold/20" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="rounded-full border border-gold/40 bg-[#1a0509]/75 p-4 shadow-[0_10px_50px_rgba(0,0,0,.35)] backdrop-blur-sm">
          <img src="/logo.svg" alt="Chunnilal Mega Mart logo" width="112" height="112" className="h-24 w-24 object-contain sm:h-28 sm:w-28" />
        </div>
        <p className="text-center font-serif text-sm tracking-[.26em] text-gold sm:text-base">CHUNNILAL MEGA MART</p>
        <p className="text-center text-xs uppercase tracking-[.22em] text-ivory/60">Style for every celebration</p>
      </div>
      <svg viewBox="0 0 520 420" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="silk-main" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f8c7d7"/><stop offset=".28" stopColor="#c82e59"/><stop offset=".68" stopColor="#7d1230"/><stop offset="1" stopColor="#e4b75c"/></linearGradient>
          <linearGradient id="silk-gold" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#f8e3a1" stopOpacity=".1"/><stop offset=".5" stopColor="#e8c36a"/><stop offset="1" stopColor="#f8e3a1" stopOpacity=".1"/></linearGradient>
        </defs>
        <g className={reduced ? "" : "fabric-sweep"}>
          <path d="M-70 105 C55 12 115 208 235 115 S390 42 600 135 L600 185 C425 100 365 275 225 177 S70 75 -70 160Z" fill="url(#silk-main)" opacity=".88"/>
          <path d="M-60 130 C60 40 125 215 235 138 S395 68 590 153" fill="none" stroke="url(#silk-gold)" strokeWidth="4" opacity=".95"/>
          <path d="M-80 295 C75 195 155 370 285 285 S425 230 600 300 L600 330 C420 265 365 405 260 328 S65 255 -80 345Z" fill="url(#silk-main)" opacity=".5"/>
          <path d="M-70 315 C80 230 155 390 285 306 S430 255 590 318" fill="none" stroke="#e8c36a" strokeWidth="2" opacity=".7"/>
        </g>
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16070b]/20 via-transparent to-[#16070b]/15" />
    </div>
  );
}
