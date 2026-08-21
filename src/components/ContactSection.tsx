import { useState } from 'react';
import { CONTACT_INFO } from '../data/bacowkaData';
import { OrnamentalDivider } from './OrnamentalDivider';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(CONTACT_INFO.whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-[#F8F3ED] text-[#28261B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-['Caveat'] text-2xl sm:text-3xl text-[#8A8270] block mb-2 font-normal">
            Skontaktuj się z nami
          </span>
          <h2 id="contact-heading" className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#28261B] tracking-tight">
            Kontakt & Lokalizacja
          </h2>
          <OrnamentalDivider />
          <p className="font-['Barlow'] text-lg sm:text-xl text-[#28261B]/80 leading-relaxed font-normal mt-4">
            Najprostszą i najszybszą formą kontaktu z nami jest wiadomość na komunikatorze WhatsApp. 
            Napisz śmiało — odpowiemy najszybciej, jak to możliwe prosto z beskidzkiej hali!
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Primary Channel: WhatsApp */}
          <div
            id="whatsapp-channel-card"
            className="p-8 sm:p-10 rounded-2xl bg-[#FAF3EB] border-2 border-[#28261B] shadow-md flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-['Barlow'] text-xs uppercase font-semibold tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Główny kanał kontaktu
                </span>
                <span className="text-3xl">💬</span>
              </div>

              <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#28261B] mb-2">
                Napisz na WhatsApp
              </h3>
              <p className="font-['Barlow'] text-sm sm:text-base text-[#28261B]/80 mb-6 leading-relaxed">
                Wiadomości, pytania o bacówkę, aktualności z wypasu czy informacje dla odwiedzających.
              </p>

              <div className="p-4 rounded-xl bg-[#F8F3ED] border border-[#E4DCC8] mb-8 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8A8270] block font-['Barlow']">
                    Numer WhatsApp
                  </span>
                  <span className="font-['Barlow'] text-xl font-bold text-[#28261B]">
                    {CONTACT_INFO.whatsappNumber}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="px-3 py-1.5 rounded-lg border border-[#E4DCC8] hover:border-[#28261B] text-xs font-['Barlow'] font-medium text-[#28261B] hover:bg-[#FAF3EB] transition-colors"
                >
                  {copied ? '✓ Skopiowano' : 'Kopiuj'}
                </button>
              </div>
            </div>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-section-whatsapp-btn"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#28261B] text-[#FAF3EB] font-['Barlow'] font-semibold text-base uppercase tracking-wider hover:bg-[#3E3B2C] hover:shadow-lg transition-all text-center"
            >
              <span>Otwórz WhatsApp i napisz</span>
              <span>→</span>
            </a>
          </div>

          {/* Social & Village Note */}
          <div
            id="location-channel-card"
            className="p-8 sm:p-10 rounded-2xl bg-[#FAF3EB] border border-[#E4DCC8] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#E4DCC8]/50 text-[#28261B] font-['Barlow'] text-xs uppercase font-medium tracking-wider">
                  Góry & Tradycja
                </span>
                <span className="text-3xl">📍</span>
              </div>

              <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#28261B] mb-2">
                Koniaków, Beskidy
              </h3>
              <p className="font-['Barlow'] text-sm sm:text-base text-[#28261B]/80 mb-6 leading-relaxed">
                Nasza bacówka znajduje się w Koniakowie (woj. śląskie, Trójwieś Beskidzka) — pośród malowniczych hal Beskidu Śląskiego i Żywieckiego.
              </p>

              <div className="space-y-3 mb-8">
                <div className="p-3.5 rounded-xl bg-[#F8F3ED] border border-[#E4DCC8] flex items-center gap-3 text-sm text-[#28261B]">
                  <span className="text-xl">🏔️</span>
                  <span><strong>Miejscowość:</strong> Koniaków (Trójwieś Beskidzka)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8F3ED] border border-[#E4DCC8] flex items-center gap-3 text-sm text-[#28261B]">
                  <span className="text-xl">🌿</span>
                  <span><strong>Okres wypasu:</strong> Sezon tradycyjny (wiosna – jesień)</span>
                </div>
              </div>
            </div>

            {/* Facebook Link */}
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-facebook-link"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#28261B] bg-transparent text-[#28261B] font-['Barlow'] font-semibold text-base hover:bg-[#28261B] hover:text-[#FAF3EB] transition-all text-center"
            >
              <span>Zobacz nas na Facebooku</span>
              <span>↗</span>
            </a>
          </div>

        </div>

        {/* Honest Notice */}
        <div className="text-center p-6 rounded-xl bg-[#FAF3EB]/70 border border-[#E4DCC8] text-xs sm:text-sm text-[#8A8270] font-['Barlow']">
          <p>
            ℹ️ <strong>Uczciwa informacja:</strong> Ze względu na specyfikę pracy na hali i wypasu owiec, najszybszy kontakt z nami odbywa się poprzez komunikator <strong>WhatsApp</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
