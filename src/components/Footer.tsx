import { CONTACT_INFO } from '../data/bacowkaData';
import { OrnamentalDivider } from './OrnamentalDivider';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#28261B] text-[#FAF3EB] border-t border-[#3E3B2C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand & motto section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          
          <img
            src={CONTACT_INFO.avatarUrl}
            alt="Logo Bacówka u Eliasza"
            className="w-16 h-16 rounded-full object-cover border-2 border-[#E4DCC8]/40 mb-4 shadow-md"
            loading="lazy"
          />

          <div className="mb-2">
            <span className="font-['Barlow'] font-light tracking-[0.25em] text-xs sm:text-sm uppercase text-[#E4DCC8]/80 block">
              Bacówka
            </span>
            <span className="font-['Caveat'] text-4xl sm:text-5xl font-bold text-[#FAF3EB] block -mt-1">
              u Eliasza
            </span>
          </div>

          <p className="font-['Caveat'] text-2xl sm:text-3xl text-[#E4DCC8] mb-6 font-normal">
            tradycja • pasja • z sercem
          </p>

          <OrnamentalDivider variant="dark" />

          {/* Social & Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-link"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FAF3EB]/10 border border-[#E4DCC8]/30 text-sm font-['Barlow'] font-medium text-[#FAF3EB] hover:bg-[#FAF3EB] hover:text-[#28261B] transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>WhatsApp: {CONTACT_INFO.whatsappNumber}</span>
            </a>
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-facebook-link"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FAF3EB]/10 border border-[#E4DCC8]/30 text-sm font-['Barlow'] font-medium text-[#FAF3EB] hover:bg-[#FAF3EB] hover:text-[#28261B] transition-all"
            >
              <span>Facebook</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-8 py-6 border-y border-[#E4DCC8]/15 text-sm font-['Barlow'] text-[#E4DCC8]/80">
          <a href="#hero-section" className="hover:text-[#FAF3EB] transition-colors">
            Strona główna
          </a>
          <a href="#o-nas" className="hover:text-[#FAF3EB] transition-colors">
            O Nas
          </a>
          <a href="#galeria" className="hover:text-[#FAF3EB] transition-colors">
            Galeria
          </a>
          <a href="#kontakt" className="hover:text-[#FAF3EB] transition-colors">
            Kontakt
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-['Barlow'] text-[#8A8270] gap-4 text-center sm:text-left">
          <div>
            © {currentYear} Bacówka u Eliasza. Wszelkie prawa zastrzeżone.
          </div>
          <div className="flex items-center gap-2 text-[#E4DCC8]/70">
            <span>Od 2024</span>
            <span>•</span>
            <span>Koniaków, Beskidy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
