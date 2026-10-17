import { CATS } from "@/lib/products";
// Illustrative vector sample art (NOT real inventory photos). Replace with real photos when available.
export default function Art({ ci, a, b }: { ci: number; a: string; b: string }) {
  const jeans = (<><path d="M38 18H82L88 135H66L60 55L54 135H32Z" fill={a} /><path d="M38 24H82" stroke={b} strokeWidth="5" /><path d="M60 55V90" stroke={b} strokeWidth="2" strokeDasharray="4 3" /></>);
  const shapes = [
    <><path d="M28 22Q60 4 92 24L102 142Q70 152 38 142Z" fill={a} /><path d="M92 24L40 142" stroke={b} strokeWidth="7" opacity=".85" /><path d="M28 22Q60 4 92 24" stroke={b} strokeWidth="5" fill="none" /></>,
    <><path d="M48 20H72L76 48H44Z" fill={b} /><path d="M44 48H76L105 140H15Z" fill={a} /><path d="M20 126H100" stroke={b} strokeWidth="5" /></>,
    <><path d="M44 15H76L82 45L90 135H30L38 45Z" fill={a} /><path d="M52 15Q60 32 68 15" stroke={b} strokeWidth="4" fill="none" /><path d="M32 125H88" stroke={b} strokeWidth="4" /></>,
    <><rect x="22" y="52" width="76" height="66" rx="5" fill={a} opacity=".6" /><rect x="26" y="38" width="76" height="66" rx="5" fill={a} /><rect x="32" y="44" width="64" height="54" rx="3" fill="none" stroke={b} strokeWidth="3" /></>,
    <><path d="M40 18L60 26L80 18L105 40L92 56L82 48V125H38V48L28 56L15 40Z" fill={a} /><path d="M48 19Q60 34 72 19" stroke={b} strokeWidth="4" fill="none" /></>,
    jeans,
    <>{jeans}<rect x="33" y="70" width="12" height="18" fill={b} /><rect x="75" y="70" width="12" height="18" fill={b} /></>,
    <><path d="M50 20H70L74 45L100 130H20L46 45Z" fill={a} /><circle cx="60" cy="48" r="8" fill={b} /><path d="M26 118H94" stroke={b} strokeWidth="4" /></>,
  ];
  return (<svg viewBox="0 0 120 150" role="img" aria-label={`Illustrative ${CATS[ci]} sample`} className="block aspect-[4/5] w-full rounded-xl"><rect width="120" height="150" fill="rgba(255,255,255,.08)" />{shapes[ci]}</svg>);
}
