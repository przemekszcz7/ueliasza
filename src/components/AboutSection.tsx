import { HIGHLIGHT_FEATURES, CONTACT_INFO } from '../data/bacowkaData';
import { OrnamentalDivider } from './OrnamentalDivider';

export function AboutSection() {
  return (
    <section id="o-nas" className="py-20 sm:py-28 bg-[#F8F3ED] text-[#28261B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-['Caveat'] text-2xl sm:text-3xl text-[#8A8270] block mb-2 font-normal">
            Tradycja • Pasja • Z Sercem
          </span>
          <h2 id="about-heading" className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#28261B] tracking-tight">
            O Bacówce u Eliasza
          </h2>
          <OrnamentalDivider />
          <p className="font-['Barlow'] text-lg sm:text-xl text-[#28261B]/80 leading-relaxed font-normal mt-4">
            W sercu malowniczego Koniakowa, na beskidzkich halach otoczonych szumem lasów i panoramą górskich grzbietów, 
            prowadzimy naszą bacówkę z głębokim szacunkiem do wielopokoleniowej kultury pasterskiej.
          </p>
        </div>

        {/* Narrative & Photo highlight grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-3 border-[#28261B] pl-6 py-1">
              <h3 className="font-['Playfair_Display'] italic text-2xl sm:text-3xl text-[#28261B] font-semibold">
                „Góralskie serce i szacunek do natury na każdym kroku”
              </h3>
            </div>

            <p className="font-['Barlow'] text-base sm:text-lg text-[#28261B]/85 leading-relaxed">
              Bacówka u Eliasza powstała z miłości do Beskidów, tutejszej ziemi oraz żywych tradycji wypasowych. 
              Od wiosny do jesieni nasze owce pasą się na czystych, soczystych trawach Trójwsi Beskidzkiej, 
              gdzie powietrze pachnie ziołami i żywicą.
            </p>

            <p className="font-['Barlow'] text-base sm:text-lg text-[#28261B]/85 leading-relaxed">
              Dla nas bacowanie to nie tylko rzemiosło — to wstawanie o świcie, dbałość o dobrostan zwierząt, 
              szczera gościnność i pielęgnowanie tożsamości, którą przekazano nam z pokolenia na pokolenie. 
              Każdego, kto odwiedza Koniaków lub przemierza szlaki, witamy z otwartym sercem i prawdziwym góralskim duchem.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-10 w-10 rounded-full ring-2 ring-[#F8F3ED] bg-[#FAF3EB] text-center leading-10 text-lg">🐑</span>
                <span className="inline-block h-10 w-10 rounded-full ring-2 ring-[#F8F3ED] bg-[#FAF3EB] text-center leading-10 text-lg">🏔️</span>
                <span className="inline-block h-10 w-10 rounded-full ring-2 ring-[#F8F3ED] bg-[#FAF3EB] text-center leading-10 text-lg">🧀</span>
              </div>
              <div className="text-sm font-['Barlow'] text-[#8A8270]">
                <strong className="text-[#28261B] font-medium block">Autentyczne tradycje pasterskie</strong>
                Beskid Śląski • Koniaków • Od 2024
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E4DCC8] bg-[#FAF3EB] group">
              <img
                src="https://i.postimg.cc/pLd9mR31/bacowka-2.jpg"
                alt="Klimat Bacówki u Eliasza w Koniakowie"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#28261B]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-[#F8F3ED]">
                <span className="font-['Caveat'] text-2xl text-[#E4DCC8]">Koniaków, Beskidy</span>
                <span className="font-['Barlow'] font-semibold text-lg text-white">Miejsce tworzone z pasją i sercem</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid (4 Features requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {HIGHLIGHT_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              id={`feature-card-${idx}`}
              className="p-6 sm:p-7 rounded-xl bg-[#FAF3EB] border border-[#E4DCC8] hover:border-[#28261B]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8F3ED] border border-[#E4DCC8] flex items-center justify-center text-2xl mb-5 shadow-2xs">
                  {feature.emoji}
                </div>
                <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#28261B] mb-3">
                  {feature.title}
                </h4>
                <p className="font-['Barlow'] text-sm sm:text-base text-[#28261B]/80 leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dark Contact Card */}
        <div
          id="dark-contact-card"
          className="rounded-2xl bg-[#28261B] text-[#F8F3ED] p-6 sm:p-12 border border-[#3E3B2C] shadow-xl relative overflow-hidden"
        >
          {/* Subtle background glow/texture contained inside */}
          <div className="absolute right-0 bottom-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#3E3B2C]/40 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="font-['Caveat'] text-2xl sm:text-3xl text-[#E4DCC8] block">
                Zapraszamy do kontaktu i odwiedzin
              </span>
              <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF3EB]">
                Chcesz zapytać o bacówkę lub napisać do nas?
              </h3>
              <p className="font-['Barlow'] text-base sm:text-lg text-[#E4DCC8]/90 max-w-2xl font-normal leading-relaxed">
                Jesteśmy dostępni na WhatsAppie oraz profilu Facebook. Chętnie odpowiemy na Twoje wiadomości, podzielimy się aktualnościami z hali i powitamy Cię w Koniakowie!
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="about-card-whatsapp-btn"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#FAF3EB] text-[#28261B] font-['Barlow'] font-semibold text-base hover:bg-[#FFFFFF] hover:shadow-lg transition-all text-center"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Napisz na WhatsApp</span>
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="about-card-facebook-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#E4DCC8]/40 bg-[#FAF3EB]/10 text-[#FAF3EB] font-['Barlow'] font-medium text-base hover:bg-[#FAF3EB]/20 hover:border-[#FAF3EB] transition-all text-center"
              >
                <span>Odwiedź nas na Facebooku</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
