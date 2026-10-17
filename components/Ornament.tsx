"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// SVG flowing fabric line, drawn on scroll with GSAP ScrollTrigger.
export default function Ornament() {
  const p = useRef<SVGPathElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = p.current; if (!el) return;
    const len = el.getTotalLength();
    gsap.set(el, { strokeDasharray: len, strokeDashoffset: matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : len });
    const tw = gsap.to(el, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: el, start: "top 95%", end: "top 45%", scrub: true } });
    return () => { tw.scrollTrigger?.kill(); tw.kill(); };
  }, []);
  return (<svg viewBox="0 0 1200 80" aria-hidden className="mx-auto my-2 h-16 w-full max-w-[1180px] px-5"><path ref={p} d="M0 40C150 0 250 80 400 40S650 0 800 40S1050 80 1200 30" fill="none" stroke="#c9a24b" strokeWidth="2" strokeLinecap="round" /></svg>);
}
