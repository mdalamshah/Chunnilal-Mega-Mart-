"use client";
// Soft, lightweight backdrop; avoids the broken red SVG/fabric animation.
export default function BgVideo() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-[#f8f3e9]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_10%,rgba(183,139,67,.12),transparent_34%),radial-gradient(ellipse_at_90%_38%,rgba(30,70,54,.08),transparent_38%),linear-gradient(145deg,#fbf8f0,#f8f3e9_52%,#f1e8d8)]" />
      <div className="absolute -right-28 top-[12%] h-80 w-80 rounded-full border border-[#b78b43]/10" />
      <div className="absolute -right-16 top-[18%] h-56 w-56 rounded-full border border-[#1e4636]/[.08]" />
      <div className="absolute -left-36 top-[58%] h-80 w-80 rounded-full bg-[#a34b42]/[.035] blur-3xl" />
    </div>
  );
}
