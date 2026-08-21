import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/bacowkaData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F3ED]/95 backdrop-blur-md shadow-sm border-b border-[#E4DCC8]'
          : 'bg-[#F8F3ED] border-b border-[#E4DCC8]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Wordmark (Strictly single-line on all screens) */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#28261B] rounded-lg p-1 shrink-0"
          >
            <img
              src={CONTACT_INFO.avatarUrl}
              alt="Logo Bacówka u Eliasza"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#E4DCC8] shadow-xs group-hover:border-[#28261B] transition-colors shrink-0"
            />
            <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none whitespace-nowrap">
              <span className="font-['Barlow'] font-light tracking-[0.14em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase text-[#28261B]/80 group-hover:text-[#28261B] transition-colors">
                Bacówka
              </span>
              <span className="font-['Caveat'] text-2xl sm:text-3xl font-bold text-[#28261B] group-hover:text-[#4A4533] transition-colors whitespace-nowrap">
                u Eliasza
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Główne menu" className="hidden md:flex items-center gap-8">
            <a
              href="#o-nas"
              id="nav-link-about"
              className="font-['Barlow'] font-medium text-[15px] text-[#28261B] hover:text-[#8A8270] transition-colors tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#28261B] hover:after:w-full after:transition-all"
            >
              O Nas
            </a>
            <a
              href="#galeria"
              id="nav-link-gallery"
              className="font-['Barlow'] font-medium text-[15px] text-[#28261B] hover:text-[#8A8270] transition-colors tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#28261B] hover:after:w-full after:transition-all"
            >
              Galeria
            </a>
            <a
              href="#kontakt"
              id="nav-link-contact"
              className="font-['Barlow'] font-medium text-[15px] text-[#28261B] hover:text-[#8A8270] transition-colors tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#28261B] hover:after:w-full after:transition-all"
            >
              Kontakt
            </a>
          </nav>

          {/* Right Action: Outlined Pill WhatsApp button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full border-1.5 border-[#28261B] text-[#28261B] font-['Barlow'] font-medium text-xs sm:text-[15px] hover:bg-[#28261B] hover:text-[#F8F3ED] transition-all duration-200 shadow-2xs group focus:outline-none focus:ring-2 focus:ring-[#28261B] whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 group-hover:bg-emerald-400 animate-pulse" />
              <span className="hidden xs:inline sm:inline">Napisz na WhatsApp</span>
              <span className="inline xs:hidden sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#28261B] hover:bg-[#E4DCC8]/40 focus:outline-none focus:ring-2 focus:ring-[#28261B]"
              aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-[#28261B] rounded-full transition-transform duration-300 origin-left ${
                    mobileMenuOpen ? 'rotate-45 translate-x-1' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#28261B] rounded-full transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-[#28261B] rounded-full transition-transform duration-300 origin-left ${
                    mobileMenuOpen ? '-rotate-45 translate-x-1' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-dropdown-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-72 opacity-100 pb-5 pt-2 border-t border-[#E4DCC8]' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3 px-2">
            <a
              href="#o-nas"
              onClick={() => setMobileMenuOpen(false)}
              className="font-['Barlow'] text-base font-medium text-[#28261B] py-2 px-3 rounded-md hover:bg-[#FAF3EB] transition-colors"
            >
              O Nas
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="font-['Barlow'] text-base font-medium text-[#28261B] py-2 px-3 rounded-md hover:bg-[#FAF3EB] transition-colors"
            >
              Galeria
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="font-['Barlow'] text-base font-medium text-[#28261B] py-2 px-3 rounded-md hover:bg-[#FAF3EB] transition-colors"
            >
              Kontakt
            </a>
            <div className="pt-2">
              <span className="font-['Caveat'] text-lg text-[#8A8270] block px-3">
                tradycja • pasja • z sercem
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
