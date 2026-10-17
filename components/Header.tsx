"use client";
import { useState } from "react";
const links = [["Home", "#top"], ["Collections", "#shop"], ["Offers", "#offers"], ["Visit store", "#visit"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-gold/20 bg-[#16070b]/90 px-4 pb-3 pt-[max(0.6rem,env(safe-area-inset-top))] shadow-[0_8px_30px_rgba(0,0,0,.16)] backdrop-blur-xl">
      <a href="#top" aria-label="Chunnilal Mega Mart home" className="flex items-center gap-2.5 font-serif text-lg font-extrabold">
        <img src="/logo.svg" alt="Chunnilal Mega Mart logo" width={48} height={48} className="h-11 w-11 shrink-0 rounded-full object-contain drop-shadow-[0_0_12px_rgba(201,162,75,.25)]" /> <span>Chunnilal Mega Mart</span>
      </a>
      <button aria-label="Menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)} className="min-h-[44px] min-w-[44px] rounded-xl border border-gold/40 bg-white/5 text-xl md:hidden">☰</button>
      <nav id="nav" aria-label="Main" className={`${open ? "flex" : "hidden"} absolute left-3 right-3 top-full flex-col rounded-2xl border border-gold/40 bg-ink p-2 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}>
        {links.map(([n, h]) => (<a key={h} href={h} onClick={() => setOpen(false)} className="rounded-full px-4 py-2.5 hover:bg-white/10">{n}</a>))}
      </nav>
    </header>
  );
}
