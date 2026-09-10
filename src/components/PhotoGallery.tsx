import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { GalleryItem } from '../types';
import { FloralDivider } from './FloralMotifs';

interface PhotoGalleryProps {
  items: GalleryItem[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ items }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const displayPhotos = items.slice(0, 4);

  const handleNextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev! + 1) % displayPhotos.length));
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! - 1 + displayPhotos.length) % displayPhotos.length);
  };

  return (
    <section id="gallery" className="py-12 md:py-16 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C89B3C]/15 text-[#9A721C] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Captured Moments</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2A26]">
            Engagement & Celebrations
          </h2>
          <p className="text-xs sm:text-sm text-[#5A534B] mt-1">
            Glimpses of love, laughter, and sacred traditions.
          </p>
        </div>

        {/* 4-Photo Clean Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {displayPhotos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-4/5 border-2 border-[#C89B3C]/30 bg-[#FFFDF9] cursor-pointer shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-[11px] text-white font-medium truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <FloralDivider className="my-8" />
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded-full bg-black/40"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 rounded-full bg-black/40"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 rounded-full bg-black/40"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-2xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={displayPhotos[selectedPhotoIndex].imageUrl}
              alt={displayPhotos[selectedPhotoIndex].title}
              className="max-h-[75vh] w-auto object-contain rounded-2xl border border-white/20 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <p className="text-white text-xs mt-3 text-center">
              {displayPhotos[selectedPhotoIndex].title} — {displayPhotos[selectedPhotoIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
