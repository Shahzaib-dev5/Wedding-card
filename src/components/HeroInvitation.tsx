import React from 'react';
import { Calendar, Heart } from 'lucide-react';
import { WeddingData } from '../types';
import { FloralDivider, GoldMandalaCorner, MarigoldFlower } from './FloralMotifs';
import { brideSwingImg } from '../data/weddingData';

interface HeroInvitationProps {
  weddingData: WeddingData;
  onOpenCalendarModal: () => void;
}

export const HeroInvitation: React.FC<HeroInvitationProps> = ({
  weddingData,
  onOpenCalendarModal,
}) => {
  return (
    <section id="invitation" className="relative pt-6 pb-12 md:pt-10 md:pb-16 overflow-hidden bg-mandala">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        {/* Main invitation card with royal arched styling */}
        <div className="relative bg-[#FAF7F2]/95 backdrop-blur-md border-2 border-[#C89B3C]/50 rounded-t-[3rem] sm:rounded-t-[4rem] rounded-b-3xl p-6 sm:p-10 text-center shadow-xl">
          {/* Top corner ornaments */}
          <GoldMandalaCorner className="absolute top-3 left-3" />
          <GoldMandalaCorner className="absolute top-3 right-3 -scale-x-100" />
          <GoldMandalaCorner className="absolute bottom-3 left-3 -scale-y-100" />
          <GoldMandalaCorner className="absolute bottom-3 right-3 -scale-x-100 -scale-y-100" />

          {/* Bismillah Islamic Calligraphy Blessing */}
          <div className="mb-3">
            <p className="font-serif text-lg sm:text-xl text-[#9A721C] tracking-wide font-medium">
              {weddingData.bismillahText}
            </p>
            <p className="text-[11px] uppercase tracking-widest text-[#7C756B] mt-0.5">
              In the Name of Allah, the Most Gracious, the Most Merciful
            </p>
          </div>

          <FloralDivider className="my-3" />

          {/* Host Parent's Warm Invitation */}
          <div className="space-y-1 mb-5">
            <span className="inline-block px-3 py-0.5 rounded-full bg-[#E87722]/10 text-[#E87722] text-[11px] font-semibold uppercase tracking-wider">
              Wedding Invitation
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-[#2D2A26] font-bold">
              {weddingData.hosts.parentsNames}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A534B] italic font-serif max-w-lg mx-auto">
              Request the honour of your presence and blessings at the wedding of their daughter
            </p>
          </div>

          {/* Couple Announcement with Floral Swing Illustration */}
          <div className="my-4 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Bride */}
            <div className="text-center md:text-right">
              <span className="text-[10px] uppercase tracking-widest text-[#609888] font-bold">
                The Bride
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#9A721C]">
                {weddingData.bride.name}
              </h1>
              <p className="text-xs text-[#7C756B]">Daughter of {weddingData.hosts.parentsNames}</p>
            </div>

            {/* Center: Bride on Floral Swing Artwork (Matching reference!) */}
            <div className="relative group">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-[#C89B3C]/60 overflow-hidden shadow-lg bg-[#FFF9EE]">
                <img
                  src={brideSwingImg}
                  alt="Bride sitting on floral swing with marigolds"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-[#FAF7F2] rounded-full p-1 border border-[#E87722] shadow-xs">
                <MarigoldFlower size={20} />
              </div>
              <div className="absolute -top-1 -right-1 bg-[#FAF7F2] rounded-full p-1 border border-[#E87722] shadow-xs">
                <MarigoldFlower size={20} />
              </div>
            </div>

            {/* Groom */}
            <div className="text-center md:text-left">
              <span className="text-[10px] uppercase tracking-widest text-[#9A721C] font-bold">
                The Groom
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#9A721C]">
                {weddingData.groom.name}
              </h1>
              <p className="text-xs text-[#7C756B]">{weddingData.groom.parentsNames}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href="#rsvp"
              className="px-6 py-2.5 rounded-full bg-[#E87722] hover:bg-[#D46B18] text-white font-semibold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>RSVP With Blessings</span>
            </a>

            <button
              onClick={onOpenCalendarModal}
              className="px-5 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-white text-[#9A721C] font-semibold text-xs border border-[#C89B3C]/50 shadow-xs transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>Save Dates</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
