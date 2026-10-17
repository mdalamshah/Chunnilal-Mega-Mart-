"use client";
import { useMemo, useRef, useState } from "react";
import { CATS, PRODUCTS, type Product } from "@/lib/products";
import { DIR } from "@/lib/store";
import Art from "./Art";
import Reveal from "./Reveal";

const sec = "mx-auto max-w-[1180px] px-5 py-24";
export default function Catalog() {
  const [q, setQ] = useState("");
  const [c, setC] = useState(-1);
  const [sel, setSel] = useState<Product | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => (c < 0 || p.ci === c) && (!s || `${p.name} ${p.cat} ${p.d}`.toLowerCase().includes(s)));
  }, [q, c]);
  const open = (p: Product) => { setSel(p); dlg.current?.showModal(); };
  const goCat = (i: number) => { setC(i); setQ(""); document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }); };
  const chip = (on: boolean) => `min-h-[42px] shrink-0 rounded-full border px-4 ${on ? "border-crimson bg-crimson" : "border-gold/40 bg-white/5"}`;

  return (
    <>
      <Reveal id="shop" className={sec}>
        <p className="text-xs uppercase tracking-[.2em] text-gold">Collections</p>
        <h2 className="font-serif text-4xl font-extrabold md:text-5xl">Find your style</h2>
        <div className="my-5 flex flex-wrap items-center gap-3">
          <div className="relative max-w-[460px] flex-1 basis-64">
            <input ref={input} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search sarees, jeans, kurti…" aria-label="Search products" autoComplete="off"
              className="min-h-[48px] w-full rounded-full border border-gold/40 bg-white/5 py-3 pl-5 pr-12 text-base" />
            <button aria-label="Clear search" onClick={() => { setQ(""); input.current?.focus(); }} className="absolute right-1.5 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-white/10 text-lg">×</button>
          </div>
          <span className="text-sm text-ivory/70" aria-live="polite">{list.length} {list.length === 1 ? "item" : "items"}</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter by category">
          {["All", ...CATS].map((n, i) => (<button key={n} aria-pressed={c === i - 1} onClick={() => setC(i - 1)} className={chip(c === i - 1)}>{n}</button>))}
        </div>
        <div className="mt-3 grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
          {list.length ? list.map((p) => (
            <button key={p.id} onClick={() => open(p)} className="rounded-2xl border border-gold/40 bg-white/5 p-3.5 text-left transition hover:-translate-y-1.5 hover:border-gold">
              <Art ci={p.ci} a={p.c1} b={p.c2} />
              <span className="mt-3 block text-xs uppercase tracking-[.14em] text-gold">{p.cat}</span>
              <b className="my-0.5 block font-serif text-lg">{p.name}</b>
              <span className="text-sm text-ivory/70">View details →</span>
            </button>
          )) : (
            <div className="col-span-full rounded-2xl border border-dashed border-gold/40 p-10 text-center">
              <p className="mb-4">No products match “{q}”. Try another word or browse everything.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button className={chip(false)} onClick={() => setQ("")}>Clear search</button>
                <button className={chip(true)} onClick={() => { setQ(""); setC(-1); }}>Browse all categories</button>
              </div>
            </div>
          )}
        </div>
        <p className="mt-4 text-sm text-ivory/70">Images are illustrative samples, not actual inventory. Please confirm availability and current prices in-store.</p>
      </Reveal>

      <Reveal id="offers" className={sec}>
        <p className="text-xs uppercase tracking-[.2em] text-gold">Offers</p>
        <h2 className="font-serif text-4xl font-extrabold md:text-5xl">Ongoing in-store offers</h2>
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {[
            ["Festive sarees", "Starting around ₹99 (owner-provided). Confirm availability and prices in-store.", () => goCat(0)],
            ["Men’s everyday wear", "T-shirts, jeans and cargos.", () => goCat(4)],
            ["Explore in-store offers", "Visit us to see what’s on right now.", () => document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" })],
          ].map(([t, d, fn]) => (
            <button key={t as string} onClick={fn as () => void} className="flex min-h-[190px] flex-col justify-end gap-2 rounded-3xl border border-gold/40 bg-gradient-to-br from-crimson/60 to-white/5 p-6 text-left hover:border-gold">
              <b className="font-serif text-2xl">{t as string}</b><span className="text-ivory/70">{d as string}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <dialog ref={dlg} aria-labelledby="dt" onClick={(e) => e.target === dlg.current && dlg.current?.close()} className="max-h-[90svh] w-[min(92vw,720px)] overflow-auto rounded-3xl border border-gold bg-ink p-0 text-ivory">
        {sel && (
          <div className="grid gap-5 p-5 sm:grid-cols-[1fr_1.2fr]">
            <Art ci={sel.ci} a={sel.c1} b={sel.c2} />
            <div>
              <p className="text-xs uppercase tracking-[.2em] text-gold">{sel.cat}</p>
              <h3 id="dt" className="my-1.5 font-serif text-3xl">{sel.name}</h3>
              <p className="text-ivory/70">{sel.d}</p>
              <p className="mt-3">{sel.ci === 0 ? "Starting around ₹99 (owner-provided promotional information). Confirm availability and current prices in-store." : "Price: please confirm in-store."}</p>
              <p className="mt-2 text-sm text-ivory/70">Illustrative sample image, not actual inventory.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={DIR} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[46px] items-center rounded-full bg-crimson px-6">Get directions</a>
                <button onClick={() => dlg.current?.close()} className="min-h-[46px] rounded-full border border-gold px-6">Close</button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
