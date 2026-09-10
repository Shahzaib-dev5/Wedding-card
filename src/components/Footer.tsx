import React from 'react';
import { Heart, Sparkles, MapPin, Phone, Mail } from 'lucide-react';
import { WeddingData } from '../types';
import { MarigoldFlower } from './FloralMotifs';

interface FooterProps {
  weddingData: WeddingData;
}

export const Footer: React.FC<FooterProps> = ({ weddingData }) => {
  return (
    <footer className="bg-[#1F1D1A] text-[#E8E1D5] py-14 px-4 sm:px-6 relative overflow-hidden border-t-2 border-[#C89B3C]/40">
      {/* Decorative top mandala arches */}
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <div className="flex items-center justify-center gap-2">
          <MarigoldFlower size={22} />
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#F89C36]">
            {weddingData.bride.name} & {weddingData.groom.name}
          </span>
          <MarigoldFlower size={22} />
        </div>

        <p className="font-serif text-lg sm:text-xl text-[#D3C3A9] italic max-w-xl mx-auto">
          "And among His signs is that He created for you spouses from among yourselves so that you may find tranquility in them; and He placed between you affection and mercy."
        </p>
        <p className="text-xs uppercase tracking-widest text-[#9A721C]">
          — Surah Ar-Rum (30:21)
        </p>

        <div className="h-[1px] w-48 mx-auto bg-gradient-to-r from-transparent via-[#C89B3C]/50 to-transparent my-6"></div>

        {/* Family Greeting & Contact */}
        <div className="space-y-2 text-xs text-[#B8ADA0]">
          <p className="font-semibold text-white">
            With warmest regards & hospitality:
          </p>
          <p className="text-sm font-serif text-[#F89C36]">
            {weddingData.hosts.parentsNames} & The Extended Family
          </p>
          <p className="text-[11px] text-[#8C8479]">
            {weddingData.events.mehndi.city}
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#9E9385]">
          <a
            href="#invitation"
            className="hover:text-[#F89C36] transition-colors"
          >
            Invitation
          </a>
          <span>•</span>
          <a
            href="#ceremonies"
            className="hover:text-[#F89C36] transition-colors"
          >
            Mehndi & Barat
          </a>
          <span>•</span>
          <a
            href="#gallery"
            className="hover:text-[#F89C36] transition-colors"
          >
            Engagement Gallery
          </a>
          <span>•</span>
          <a
            href="#map-travel"
            className="hover:text-[#F89C36] transition-colors"
          >
            Directions & Map
          </a>
          <span>•</span>
          <a
            href="#rsvp"
            className="hover:text-[#F89C36] transition-colors font-bold text-[#F89C36]"
          >
            RSVP
          </a>
        </div>

        <div className="pt-6 text-[11px] text-[#6E665D]">
          {weddingData.hashtag} • Designed with floral elegance for the bride's wedding celebrations
        </div>
      </div>
    </footer>
  );
};
