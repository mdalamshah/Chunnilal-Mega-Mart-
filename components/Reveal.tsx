"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Reveal({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { opacity: 0, y: 40, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <section ref={ref} id={id} className={className}>{children}</section>;
}
