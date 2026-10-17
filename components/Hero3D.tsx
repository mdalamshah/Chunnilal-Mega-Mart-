export default function Hero3D() {
  return (
    <div className="relative mx-auto flex min-h-[390px] w-full max-w-[560px] items-center justify-center overflow-hidden rounded-[2rem] border border-[#b78b43]/25 bg-[#efe5d3]/70 p-5 shadow-[0_24px_80px_rgba(30,70,54,.10)] sm:min-h-[460px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(183,139,67,.20),transparent_48%),linear-gradient(145deg,rgba(255,255,255,.7),rgba(239,229,211,.25))]" />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#b78b43]/25" />
      <div className="absolute -right-7 -top-7 h-44 w-44 rounded-full border border-[#1e4636]/10" />
      <div className="absolute bottom-[-4rem] left-[-3rem] h-64 w-64 rounded-full border border-[#a34b42]/10" />
      <div className="relative z-10 w-full max-w-[410px]">
        <div className="mb-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.22em] text-[#a34b42]"><span>Made for celebrations</span><span>Since your style</span></div>
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#1e4636] p-7 text-[#f8f3e9] shadow-[0_18px_40px_rgba(30,70,54,.2)] sm:p-9">
          <div className="absolute -right-12 top-0 h-52 w-52 rounded-full border border-[#d9bd7a]/35" />
          <div className="absolute -right-4 top-8 h-36 w-36 rounded-full border border-[#d9bd7a]/25" />
          <p className="relative text-xs uppercase tracking-[.24em] text-[#e3c681]">Your style, your story</p>
          <h2 className="relative mt-4 max-w-[10ch] font-serif text-4xl font-bold leading-[1.05] sm:text-5xl">Dress up for every moment.</h2>
          <p className="relative mt-4 max-w-[28ch] text-sm leading-6 text-white/75">Festive favourites, everyday essentials and styles for the whole family.</p>
          <a href="#shop" className="relative mt-7 inline-flex min-h-[44px] items-center rounded-full bg-[#f8f3e9] px-5 text-sm font-semibold text-[#1e4636] transition hover:bg-white">Discover collections ↗</a>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-semibold uppercase tracking-[.12em] text-[#1e4636]/75 sm:text-xs">
          <span className="rounded-full border border-[#1e4636]/10 bg-white/60 px-2 py-3">Ethnic wear</span><span className="rounded-full border border-[#1e4636]/10 bg-white/60 px-2 py-3">Family styles</span><span className="rounded-full border border-[#1e4636]/10 bg-white/60 px-2 py-3">Festive edits</span>
        </div>
      </div>
    </div>
  );
}
