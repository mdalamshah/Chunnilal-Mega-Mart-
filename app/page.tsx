import BgVideo from "@/components/BgVideo";
import Intro, { ReplayButton } from "@/components/Intro";
import Header from "@/components/Header";
import Hero3D from "@/components/Hero3D";
import Catalog from "@/components/Catalog";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import { DIR } from "@/lib/store";

const Dir = ({ pri = false }: { pri?: boolean }) => (
  <a href={DIR} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-[46px] items-center justify-center rounded-full border px-6 text-sm font-semibold transition hover:-translate-y-0.5 ${pri ? "border-transparent bg-crimson text-white shadow-lg shadow-[#a34b42]/20 hover:bg-burgundy" : "border-[#1e4636]/20 bg-white/50 text-[#1e4636] hover:border-gold hover:bg-white"}`}>Get directions ↗</a>
);

export default function Home() {
  return (
    <>
      <BgVideo /><Intro /><Header />
      <main id="top">
        <section className="mx-auto grid min-h-[92svh] max-w-[1240px] items-center gap-8 px-5 pb-12 pt-28 md:grid-cols-[.92fr_1.08fr] md:px-8">
          <div className="relative z-10 py-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b78b43]/35 bg-white/65 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#a34b42] shadow-sm"><span className="h-1.5 w-1.5 rounded-full bg-[#a34b42]" /> Your Nawada fashion destination</div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#8c6b35]">Jawahar Nagar · Main Road · Nawada</p>
            <h1 className="my-4 max-w-[11ch] font-serif text-[clamp(42px,6.5vw,78px)] font-extrabold leading-[.99] tracking-[-.045em] text-[#1e4636]">Celebrate every side of <span className="italic text-[#a34b42]">you.</span></h1>
            <p className="max-w-[43ch] text-base leading-7 text-[#24382c]/75 sm:text-lg">Discover sarees, lehengas, kurtis and suit pieces, alongside men’s everyday wear and festive styles for kids—all under one roof.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#1e4636] px-6 text-sm font-semibold text-white shadow-lg shadow-[#1e4636]/15 transition hover:-translate-y-0.5 hover:bg-[#a34b42]">Explore collections ↗</a><Dir />
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#1e4636]/10 pt-5 text-xs font-medium text-[#1e4636]/75"><span>✦ Ethnic favourites</span><span>✦ Family fashion</span><span>✦ Festive finds</span></div>
          </div>
          <Hero3D />
        </section>
        <div className="mx-auto flex max-w-[1240px] items-center gap-4 px-5 md:px-8"><span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b78b43]/50" /><span className="font-serif text-sm italic text-[#8c6b35]">A little tradition, a lot of style</span><span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b78b43]/50" /></div>
        <Catalog />
        <Reveal id="visit" className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-6 rounded-[2rem] border border-[#b78b43]/25 bg-white/55 p-6 shadow-[0_18px_70px_rgba(30,70,54,.06)] sm:p-9 md:grid-cols-[1.2fr_.8fr] md:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#a34b42]">Find us in Nawada</p>
              <h2 className="mt-3 max-w-[15ch] font-serif text-4xl font-extrabold leading-tight text-[#1e4636] md:text-5xl">Your next favourite look is waiting.</h2>
              <h3 className="mt-6 font-serif text-2xl font-bold text-[#1e4636]">Chunnilal Mega Mart</h3>
              <address className="my-3 max-w-[46ch] text-base not-italic leading-7 text-[#24382c]/75">Main Road, Jawahar Nagar,<br />Nawada, Bihar 805110, India<br /><span className="text-sm">Opposite Narad Museum / Narad Sangrahalaya, near V-Mart.</span></address>
              <Dir pri />
            </div>
            <div className="flex flex-col justify-between rounded-[1.5rem] bg-[#1e4636] p-6 text-[#f8f3e9] sm:p-8">
              <div><p className="text-xs font-semibold uppercase tracking-[.22em] text-[#e3c681]">Store rating</p><p className="mt-4 font-serif text-6xl font-bold">3.3<span className="text-2xl text-[#e3c681]"> / 5</span></p><p className="mt-2 text-sm text-white/65">Rating supplied by the owner.</p></div>
              <div className="mt-8 border-t border-white/15 pt-5"><p className="font-serif text-xl">Come by and explore.</p><p className="mt-2 text-sm leading-6 text-white/65">Visit the store to check current styles, sizes and offers.</p></div>
            </div>
          </div>
        </Reveal>
      </main>
      <footer className="mx-auto max-w-[1240px] border-t border-[#1e4636]/15 px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-7 text-sm text-[#24382c]/65 md:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><strong className="font-serif text-lg text-[#1e4636]">Chunnilal Mega Mart</strong><p className="mt-1">Main Road, Jawahar Nagar, Nawada, Bihar 805110, India</p><p>Opposite Narad Museum / Narad Sangrahalaya, near V-Mart.</p></div><div className="flex flex-wrap gap-3"><Dir /><ReplayButton /></div></div>
        <p className="mt-6 border-t border-[#1e4636]/10 pt-4 text-xs">© 2026 Chunnilal Mega Mart · All rights reserved.</p>
      </footer>
    </>
  );
}
