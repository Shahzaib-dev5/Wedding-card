import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Shirt, Navigation } from 'lucide-react';
import { WeddingData } from '../types';
import { FloralDivider, MarigoldFlower } from './FloralMotifs';

interface CeremonyDetailsProps {
  weddingData: WeddingData;
  onSelectEventForMap: (eventId: 'mehndi' | 'barat') => void;
}

export const CeremonyDetails: React.FC<CeremonyDetailsProps> = ({
  weddingData,
  onSelectEventForMap,
}) => {
  const { mehndi, barat } = weddingData.events;

  return (
    <section id="ceremonies" className="py-12 md:py-16 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Simple Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E87722]/10 text-[#E87722] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ceremony Details</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2A26]">
            Mehndi & Barat
          </h2>
          <p className="text-xs sm:text-sm text-[#5A534B] mt-1">
            Two blessed evenings of celebration, family traditions, and prayers.
          </p>
        </div>

        {/* Clean Side-by-Side Ceremony Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mehndi Card */}
          <div className="rounded-3xl border-2 border-[#E87722]/30 bg-gradient-to-b from-[#FFFDF9] to-[#FFF8EE] p-6 shadow-md hover:border-[#E87722] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-[#E87722]/20">
                <div className="flex items-center gap-2 text-[#E87722]">
                  <MarigoldFlower size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Mehndi Night
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#E87722] text-white text-xs font-semibold">
                  7:00 PM
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2A26] mb-1">
                {mehndi.title}
              </h3>
              <p className="font-serif italic text-xs text-[#9A721C] mb-4">
                "{mehndi.subtitle}"
              </p>

              <div className="space-y-2 text-xs text-[#5A534B] mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#E87722] shrink-0" />
                  <span className="font-medium text-[#2D2A26]">Friday, October 23, 2026</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E87722] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2D2A26]">{mehndi.venueName}</strong>
                    <br />
                    {mehndi.address}, {mehndi.city}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Shirt className="w-4 h-4 text-[#609888] shrink-0" />
                  <span className="text-[#609888] font-semibold">
                    Dress Code: Mustard Yellow & Sage Mint
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E87722]/20 flex items-center justify-between">
              <a
                href={mehndi.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#E87722] font-semibold hover:underline flex items-center gap-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Maps</span>
              </a>
              <button
                onClick={() => onSelectEventForMap('mehndi')}
                className="text-xs text-[#7C756B] hover:text-[#2D2A26] font-medium"
              >
                View Directions ↓
              </button>
            </div>
          </div>

          {/* Barat Card */}
          <div className="rounded-3xl border-2 border-[#C89B3C]/35 bg-gradient-to-b from-[#FFFDF9] to-[#FAF7F2] p-6 shadow-md hover:border-[#C89B3C] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-[#C89B3C]/20">
                <div className="flex items-center gap-2 text-[#9A721C]">
                  <Sparkles className="w-4 h-4 text-[#9A721C]" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Barat & Reception
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#9A721C] text-white text-xs font-semibold">
                  6:30 PM
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2A26] mb-1">
                {barat.title}
              </h3>
              <p className="font-serif italic text-xs text-[#9A721C] mb-4">
                "{barat.subtitle}"
              </p>

              <div className="space-y-2 text-xs text-[#5A534B] mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#9A721C] shrink-0" />
                  <span className="font-medium text-[#2D2A26]">Sunday, October 25, 2026</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#9A721C] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2D2A26]">{barat.venueName}</strong>
                    <br />
                    {barat.address}, {barat.city}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Shirt className="w-4 h-4 text-[#9A721C] shrink-0" />
                  <span className="text-[#9A721C] font-semibold">
                    Dress Code: Formal Champagne Gold & Maroon
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C89B3C]/20 flex items-center justify-between">
              <a
                href={barat.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#9A721C] font-semibold hover:underline flex items-center gap-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Maps</span>
              </a>
              <button
                onClick={() => onSelectEventForMap('barat')}
                className="text-xs text-[#7C756B] hover:text-[#2D2A26] font-medium"
              >
                View Directions ↓
              </button>
            </div>
          </div>
        </div>

        <FloralDivider className="my-8" />
      </div>
    </section>
  );
};
