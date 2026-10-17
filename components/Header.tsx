"use client";
import { useState } from "react";
const links = [["Home", "#top"], ["Collections", "#shop"], ["Offers", "#offers"], ["Visit store", "#visit"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-[#1e4636]/10 bg-[#f8f3e9]/90 px-4 pb-3 pt-[max(0.6rem,env(safe-area-inset-top))] shadow-[0_8px_30px_rgba(30,70,54,.07)] backdrop-blur-xl sm:px-6">
      <a href="#top" aria-label="Chunnilal Mega Mart home" className="flex min-w-0 items-center gap-2.5 text-[#1e4636]">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#b78b43]/70 bg-[#1e4636] font-serif text-xl font-bold text-[#f8f3e9] shadow-sm">C</span>
        <span className="min-w-0"><span className="block font-serif text-base font-extrabold leading-tight sm:text-lg">Chunnilal Mega Mart</span><span className="mt-0.5 hidden text-[9px] uppercase tracking-[.2em] text-[#a34b42] sm:block">Ethnic · Everyday · Elegant</span></span>
      </a>
      <button aria-label="Menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)} className="min-h-[44px] min-w-[44px] rounded-full border border-[#1e4636]/20 bg-white/60 text-xl text-[#1e4636] md:hidden">☰</button>
      <nav id="nav" aria-label="Main" className={`${open ? "flex" : "hidden"} absolute left-3 right-3 top-full flex-col rounded-2xl border border-[#1e4636]/15 bg-[#f8f3e9] p-2 text-[#1e4636] shadow-xl md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
        {links.map(([n, h]) => (<a key={h} href={h} onClick={() => setOpen(false)} className="rounded-full px-4 py-2.5 text-sm font-medium transition hover:bg-[#1e4636]/[.07]">{n}</a>))}
        <a href="#shop" className="mt-1 rounded-full bg-[#a34b42] px-5 py-2.5 text-center text-sm font-semibold text-white md:ml-2 md:mt-0">Explore styles</a>
      </nav>
    </header>
  );
}
