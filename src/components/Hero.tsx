import { CONTACT_INFO } from '../data/bacowkaData';

export function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-[85vh] sm:min-h-[85vh] flex items-center justify-center bg-[#28261B] overflow-hidden text-[#F8F3ED]"
    >
      {/* Background Image with Dark Olive Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={CONTACT_INFO.heroBg}
          alt="Bacówka u Eliasza - Wypas owiec w Koniakowie"
          className="w-full h-full object-cover object-center"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Layered dark olive overlay for rich contrast & warmth */}
        <div className="absolute inset-0 bg-[#28261B]/75 sm:bg-[#28261B]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#28261B] via-transparent to-[#28261B]/60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center flex flex-col items-center">
        
        {/* Badges and Location Top Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <span
            id="hero-badge-since"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF3EB]/15 border border-[#E4DCC8]/30 font-['Barlow'] text-xs uppercase tracking-widest text-[#FAF3EB]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
            Od 2024
          </span>
          <span
            id="hero-location-label"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF3EB]/10 border border-[#E4DCC8]/20 font-['Barlow'] text-xs tracking-wider text-[#E4DCC8]"
          >
            <span>📍</span>
            Koniaków, Beskidy
          </span>
        </div>

        {/* Main H1 Title */}
        <h1 id="hero-main-title" className="tracking-tight text-[#F8F3ED] mb-3 w-full">
          <span className="block font-['Barlow'] font-light tracking-[0.2em] sm:tracking-[0.25em] text-2xl sm:text-4xl md:text-5xl uppercase">
            Bacówka
          </span>
          <span className="block font-['Caveat'] text-5xl sm:text-7xl md:text-8xl font-bold text-[#FAF3EB] -mt-1 sm:-mt-2">
            u Eliasza
          </span>
        </h1>

        {/* Tagline */}
        <p
          id="hero-tagline"
          className="font-['Caveat'] text-2xl sm:text-3xl md:text-4xl text-[#E4DCC8] tracking-wide mb-8 font-normal"
        >
          tradycja • pasja • z sercem
        </p>

        {/* Chips */}
        <div
          id="hero-chips"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-2xl"
        >
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#28261B]/85 border border-[#E4DCC8]/40 text-xs sm:text-sm font-['Barlow'] font-medium text-[#F8F3ED]">
            <span>🏔️</span>
            <span>Tradycja góralska</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#28261B]/85 border border-[#E4DCC8]/40 text-xs sm:text-sm font-['Barlow'] font-medium text-[#F8F3ED]">
            <span>❤️</span>
            <span>Z sercem</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#28261B]/85 border border-[#E4DCC8]/40 text-xs sm:text-sm font-['Barlow'] font-medium text-[#F8F3ED]">
            <span>🧀</span>
            <span>Beskidzki klimat</span>
          </div>
        </div>

        {/* Call to Actions (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF3EB] text-[#28261B] font-['Barlow'] font-semibold text-sm sm:text-base uppercase tracking-wider hover:bg-[#FFFFFF] active:scale-[0.98] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#FAF3EB]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Napisz na WhatsApp</span>
          </a>
          <a
            href="#galeria"
            id="hero-cta-gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full border-1.5 border-[#E4DCC8] text-[#F8F3ED] font-['Barlow'] font-medium text-sm sm:text-base uppercase tracking-wider hover:bg-[#FAF3EB]/15 hover:border-[#FAF3EB] transition-all focus:outline-none focus:ring-2 focus:ring-[#E4DCC8]"
          >
            Galeria
          </a>
        </div>

        {/* Bottom subtle indicator */}
        <a
          href="#o-nas"
          className="mt-10 sm:mt-14 inline-flex flex-col items-center gap-1 text-[#E4DCC8]/70 hover:text-[#FAF3EB] transition-colors group"
          aria-label="Przewiń do sekcji O Nas"
        >
          <span className="text-xs font-['Barlow'] tracking-widest uppercase opacity-75">Odkryj</span>
          <span className="text-lg group-hover:translate-y-1 transition-transform">↓</span>
        </a>
      </div>
    </section>
  );
}
