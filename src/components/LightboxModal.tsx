import { useEffect } from 'react';
import { GalleryPhoto } from '../data/bacowkaData';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  currentIndex: number;
  totalPhotos: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function LightboxModal({
  photo,
  currentIndex,
  totalPhotos,
  onClose,
  onPrev,
  onNext
}: LightboxModalProps) {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [photo, onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-[#28261B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none"
      onClick={onClose}
    >
      {/* Container to prevent close on clicking the inner content */}
      <div
        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="w-full flex items-center justify-between text-[#FAF3EB] pb-3 border-b border-[#E4DCC8]/20 mb-3">
          <div className="flex items-center gap-3">
            <span className="font-['Caveat'] text-2xl text-[#E4DCC8]">Bacówka u Eliasza</span>
            <span className="text-xs font-['Barlow'] px-2 py-0.5 rounded-full bg-[#FAF3EB]/15 text-[#E4DCC8]">
              {currentIndex + 1} / {totalPhotos}
            </span>
          </div>

          <button
            type="button"
            id="lightbox-close-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FAF3EB]/20 text-[#FAF3EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FAF3EB]"
            aria-label="Zamknij podgląd"
          >
            <span className="text-2xl leading-none">✕</span>
          </button>
        </div>

        {/* Image Display */}
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl border border-[#E4DCC8]/20 bg-black/40 shadow-2xl">
          <img
            src={photo.url}
            alt={photo.alt}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Prev Button */}
          <button
            type="button"
            id="lightbox-prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-[#28261B]/80 text-[#FAF3EB] hover:bg-[#FAF3EB] hover:text-[#28261B] border border-[#E4DCC8]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#FAF3EB]"
            aria-label="Poprzednie zdjęcie"
          >
            <span className="text-xl font-bold">‹</span>
          </button>

          {/* Navigation Next Button */}
          <button
            type="button"
            id="lightbox-next-btn"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-[#28261B]/80 text-[#FAF3EB] hover:bg-[#FAF3EB] hover:text-[#28261B] border border-[#E4DCC8]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#FAF3EB]"
            aria-label="Następne zdjęcie"
          >
            <span className="text-xl font-bold">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
