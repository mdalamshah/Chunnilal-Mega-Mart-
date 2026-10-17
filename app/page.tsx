import BgVideo from "@/components/BgVideo";
import Intro, { ReplayButton } from "@/components/Intro";
import Header from "@/components/Header";
import Hero3D from "@/components/Hero3D";
import Catalog from "@/components/Catalog";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import { DIR } from "@/lib/store";

const Dir = ({ pri = false }: { pri?: boolean }) => (
  <a href={DIR} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-[46px] items-center rounded-full border px-6 ${pri ? "border-transparent bg-crimson" : "border-gold"}`}>Get directions</a>
);

export default function Home() {
  return (
    <>
      <BgVideo /><Intro /><Header />
      <main id="top">
        <section className="mx-auto grid min-h-[100svh] max-w-[1180px] items-center gap-5 px-5 pb-12 pt-28 md:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-gold">Jawahar Nagar · Nawada</p>
            <h1 className="my-3 font-serif text-[clamp(38px,7vw,82px)] font-extrabold leading-[1.02]">Where every festival finds its fabric</h1>
            <p className="max-w-[44ch] text-lg text-ivory/75">Sarees, lehengas, kurtis and suit pieces, plus men’s and kids’ wear, all under one roof on Main Road.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex min-h-[46px] items-center rounded-full bg-crimson px-6">Explore collections</a><Dir />
            </div>
          </div>
          <Hero3D />
        </section>
        <Ornament />
        <Catalog />
        <Ornament />
        <Reveal id="visit" className="mx-auto max-w-[1180px] px-5 py-24">
          <p className="text-xs uppercase tracking-[.2em] text-gold">Visit store</p>
          <h2 className="font-serif text-4xl font-extrabold md:text-5xl">Come see us in Nawada</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-gold/40 bg-white/5 p-7">
              <h3 className="font-serif text-2xl">Chunnilal Mega Mart</h3>
              <address className="my-3 mb-5 text-lg not-italic">Main Road, Jawahar Nagar,<br />Nawada, Bihar 805110, India<br /><span className="text-sm text-ivory/70">Opposite Narad Museum / Narad Sangrahalaya, near V-Mart.</span></address>
              <Dir pri />
            </div>
            <div className="rounded-3xl border border-gold/40 bg-white/5 p-7">
              <h3 className="font-serif text-2xl">Store rating</h3>
              <p className="font-serif text-5xl text-gold">3.3 / 5</p><p className="text-sm text-ivory/70">Rating supplied by the owner.</p>
            </div>
          </div>
        </Reveal>
      </main>
      <footer className="mx-auto max-w-[1180px] border-t border-gold/40 px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-7 text-sm text-ivory/70">
        <strong className="text-ivory">Chunnilal Mega Mart</strong><br />Main Road, Jawahar Nagar, Nawada, Bihar 805110, India<br />Opposite Narad Museum / Narad Sangrahalaya, near V-Mart.
        <div className="mt-3 flex flex-wrap gap-3"><Dir /><ReplayButton /></div>
        <p className="mt-4">© 2026 Chunnilal Mega Mart</p>
      </footer>
    </>
  );
}
