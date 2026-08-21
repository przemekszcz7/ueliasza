import { useState } from 'react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/bacowkaData';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LightboxModal } from './LightboxModal';

export function GallerySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const initialCount = 7;
  const initialPhotos = GALLERY_PHOTOS.slice(0, initialCount);
  const hiddenPhotos = GALLERY_PHOTOS.slice(initialCount);

  const activePhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null ? GALLERY_PHOTOS[selectedPhotoIndex] : null;

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
    );
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_PHOTOS.length);
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#FAF3EB] text-[#28261B] border-y border-[#E4DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-['Caveat'] text-2xl sm:text-3xl text-[#8A8270] block mb-2 font-normal">
            Kadry z Życia na Hali
          </span>
          <h2 id="gallery-heading" className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#28261B] tracking-tight">
            Galeria Zdjęć
          </h2>
          <OrnamentalDivider />
          <p className="font-['Barlow'] text-lg sm:text-xl text-[#28261B]/80 leading-relaxed font-normal mt-4">
            Zobacz autentyczne chwile z naszej bacówki w Koniakowie — wypas owiec, beskidzkie krajobrazy, 
            tradycyjne rzemiosło i niepowtarzalny góralski klimat.
          </p>
        </div>

        {/* CSS-only Expandable Checkbox Controller */}
        <input
          type="checkbox"
          id="gallery-expand-toggle"
          className="peer sr-only"
          checked={isExpanded}
          onChange={(e) => setIsExpanded(e.target.checked)}
        />

        {/* Gallery Masonry Layout (columns-1 sm:columns-2 md:columns-3 lg:columns-4) */}
        <div
          id="masonry-gallery-grid"
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {/* Always Visible First 7 Photos */}
          {initialPhotos.map((photo, index) => (
            <div
              key={photo.id}
              id={`gallery-item-${photo.id}`}
              onClick={() => setSelectedPhotoIndex(index)}
              className="break-inside-avoid group relative rounded-xl overflow-hidden border border-[#E4DCC8] bg-[#F8F3ED] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-auto">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={index < 4 ? "eager" : "lazy"}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#28261B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-[#28261B]/70 border border-[#FAF3EB]/50 backdrop-blur-xs flex items-center justify-center text-sm text-[#FAF3EB] shadow-md">
                    🔍
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Hidden 6 Photos (Expanded via CSS Peer or State) */}
          {hiddenPhotos.map((photo, index) => {
            const fullIndex = initialCount + index;
            return (
              <div
                key={photo.id}
                id={`gallery-item-${photo.id}`}
                onClick={() => setSelectedPhotoIndex(fullIndex)}
                className={`break-inside-avoid group relative rounded-xl overflow-hidden border border-[#E4DCC8] bg-[#F8F3ED] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  isExpanded ? 'block' : 'hidden peer-checked:block'
                }`}
              >
                <div className="relative overflow-hidden aspect-auto">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#28261B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-[#28261B]/70 border border-[#FAF3EB]/50 backdrop-blur-xs flex items-center justify-center text-sm text-[#FAF3EB] shadow-md">
                      🔍
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / Collapse Button & Label */}
        <div className="mt-12 text-center">
          <label
            htmlFor="gallery-expand-toggle"
            id="gallery-toggle-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-1.5 border-[#28261B] bg-[#F8F3ED] text-[#28261B] font-['Barlow'] font-semibold text-sm sm:text-base uppercase tracking-wider hover:bg-[#28261B] hover:text-[#FAF3EB] cursor-pointer shadow-xs transition-all duration-200 select-none"
          >
            <span>{isExpanded ? 'Zwiń dodatkowe zdjęcia' : 'Zobacz wszystkie zdjęcia (13)'}</span>
            <span className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </label>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={activePhoto}
        currentIndex={selectedPhotoIndex ?? 0}
        totalPhotos={GALLERY_PHOTOS.length}
        onClose={() => setSelectedPhotoIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
