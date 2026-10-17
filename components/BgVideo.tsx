"use client";
// Lightweight branded background; does not rely on missing video files or block page loading.
export default function BgVideo() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 bg-[#100509]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_15%,rgba(124,19,47,.30),transparent_38%),radial-gradient(ellipse_at_85%_65%,rgba(201,162,75,.10),transparent_32%),linear-gradient(135deg,#1a0509,#12070b_55%,#210913)]" />
        <div className="absolute -left-32 top-[20%] h-72 w-72 rounded-full bg-crimson/10 blur-3xl" />
        <div className="absolute -right-32 top-[58%] h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      </div>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-[#0a0305]/10" />
    </>
  );
}
