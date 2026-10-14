export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 border-t border-white/10 bg-[#080B12] px-6 py-7 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        {/* Brand identity */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="RoysmithDev - Back to top"
          className="group text-lg font-bold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          <span className="text-white">Roysmith</span>
          <span className="text-blue-400 transition-colors group-hover:text-blue-300">
            Dev
          </span>
          <span className="text-blue-400">.</span>
        </a>

        {/* Copyright */}
        <p className="text-center text-sm text-slate-400">
          © {currentYear} Roysmith Bukamu. All rights reserved.
        </p>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          Back to top
          <span
            aria-hidden="true"
            className="text-base transition-transform duration-300 group-hover:-translate-y-1"
          >
            ↑
          </span>
        </button>
      </div>

      {/* Subtle finishing line */}
      <div className="mx-auto mt-7 h-px max-w-6xl bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </footer>
  );
}