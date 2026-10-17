"use client";
import { useEffect, useRef } from "react";

// Fixed full-screen looping background (the owner's logo video) under a burgundy overlay.
export default function BgVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { ref.current?.remove(); return; }
    const go = () => { ref.current?.play().catch(() => {}); };
    addEventListener("intro-done", go);
    return () => removeEventListener("intro-done", go);
  }, []);
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-20 bg-[#0b1010]">
        <video ref={ref} muted loop playsInline preload="metadata" onError={(e) => e.currentTarget.remove()} className="h-full w-full object-cover object-center">
          <source src="/media/logo-intro.webm" type="video/webm" />
          <source src="/media/logo-intro.mp4" type="video/mp4" />
        </video>
      </div>
      <div aria-hidden className="fixed inset-0 -z-10 bg-[#0a0305]/75" />
    </>
  );
}
