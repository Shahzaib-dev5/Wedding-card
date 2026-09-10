import React, { useState } from 'react';
import { Sparkles, Heart, MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WeddingData } from '../types';
import { MarigoldFlower } from './FloralMotifs';
import { brideSwingImg } from '../data/weddingData';

interface EnvelopeCoverProps {
  weddingData: WeddingData;
  isOpened: boolean;
  onOpen: () => void;
  onCloseToEnvelope: () => void;
}

export const EnvelopeCover: React.FC<EnvelopeCoverProps> = ({
  weddingData,
  isOpened,
  onOpen,
  onCloseToEnvelope,
}) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpened || isOpening) return;
    setIsOpening(true);

    // Fire festive gold & saffron confetti burst
    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#E87722', '#C89B3C', '#F89C36', '#FAF7F2', '#609888'],
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      onOpen();
      setIsOpening(false);
    }, 1100);
  };

  if (isOpened) {
    return (
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={onCloseToEnvelope}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md border border-[#C89B3C]/50 text-[#9A721C] hover:text-[#78530C] hover:bg-white shadow-md text-xs font-semibold transition-all hover:scale-105 cursor-pointer"
          title="Fold back into Letter Envelope"
        >
          <MailOpen className="w-3.5 h-3.5 text-[#E87722]" />
          <span>View Envelope</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#1E1B18]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      {/* Background soft ambient glowing circles */}
      <div className="absolute w-96 h-96 rounded-full bg-[#E87722]/15 blur-3xl -top-12 -left-12 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-[#C89B3C]/15 blur-3xl -bottom-12 -right-12 pointer-events-none" />

      <div className="relative w-full max-w-lg mx-auto py-8">
        {/* Envelope Outer Shadow Wrapper */}
        <div
          onClick={handleOpenClick}
          className={`relative bg-[#FAF7F2] rounded-3xl border-2 border-[#C89B3C]/60 p-6 sm:p-10 shadow-2xl transition-all duration-700 cursor-pointer select-none group ${
            isOpening ? 'scale-95 opacity-90' : 'hover:shadow-[#C89B3C]/20 hover:border-[#C89B3C]'
          }`}
          style={{
            backgroundImage:
              'radial-gradient(#E87722 0.4px, transparent 0.4px), radial-gradient(#C89B3C 0.4px, #FAF7F2 0.4px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
          }}
        >
          {/* Inner Golden Foil Border */}
          <div className="absolute inset-3 sm:inset-4 border border-[#C89B3C]/40 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-5 border border-dashed border-[#C89B3C]/25 rounded-xl pointer-events-none" />

          {/* Top Flap Decorative V-Triangle */}
          <div
            className={`w-full overflow-hidden transition-all duration-700 origin-top mb-4 ${
              isOpening ? '-rotate-180 opacity-0' : ''
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-[#9A721C] mb-2">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C89B3C]" />
              <MarigoldFlower size={18} />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C89B3C]" />
            </div>
            <p className="font-serif text-center text-sm sm:text-base text-[#9A721C] tracking-wide font-medium">
              {weddingData.bismillahText}
            </p>
          </div>

          {/* Invitation Greeting & Names */}
          <div className="text-center my-6 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#E87722]/10 text-[#E87722] text-[11px] font-bold uppercase tracking-widest">
              Wedding Invitation
            </span>

            <p className="text-xs sm:text-sm text-[#7C756B] uppercase tracking-wider font-medium">
              From the Family of
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#2D2A26] font-bold">
              {weddingData.hosts.parentsNames}
            </h2>

            <p className="text-xs sm:text-sm text-[#5A534B] italic max-w-sm mx-auto font-serif">
              Cordially invite you to share in the joyful wedding celebrations of their beloved daughter
            </p>

            {/* Couple Names */}
            <div className="pt-2 pb-1">
              <h1 className="font-serif text-3xl sm:text-4xl text-[#9A721C] font-bold tracking-tight">
                {weddingData.bride.name}{' '}
                <span className="text-[#E87722] font-light">&</span>{' '}
                {weddingData.groom.name}
              </h1>
            </div>

            <div className="inline-flex items-center gap-3 text-xs text-[#7C756B] font-medium pt-1">
              <span>Mehndi • Oct 23</span>
              <span>•</span>
              <span>Barat • Oct 25</span>
            </div>
          </div>

          {/* Golden Wax Seal Button in Center */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleOpenClick}
              className="relative group/seal focus:outline-none"
            >
              {/* Pulsing Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#E87722] via-[#C89B3C] to-[#E87722] rounded-full blur-xs opacity-75 group-hover/seal:opacity-100 animate-pulse" />

              {/* The Wax Seal Disc */}
              <div
                className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#E87722] via-[#C89B3C] to-[#9A721C] border-2 border-[#FFE8A3] shadow-xl flex flex-col items-center justify-center text-white transition-transform duration-300 ${
                  isOpening ? 'scale-125 rotate-45' : 'group-hover/seal:scale-105'
                }`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-dashed border-[#FFF2CC]/60 flex flex-col items-center justify-center">
                  <span className="font-serif text-base sm:text-lg font-bold tracking-widest text-[#FFFDF9] drop-shadow-xs">
                    A & D
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#FFF9EE] mt-0.5">
                    Seal
                  </span>
                </div>
              </div>
            </button>

            {/* Tap to Open Prompt */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9A721C] animate-bounce mt-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E87722]" />
              <span>{isOpening ? 'Opening Invitation...' : 'Tap Wax Seal to Open'}</span>
            </div>
          </div>

          {/* Bottom Card Peeking Preview */}
          <div className="mt-8 pt-4 border-t border-[#C89B3C]/20 flex items-center justify-center gap-2 text-[11px] text-[#7C756B]">
            <Heart className="w-3 h-3 text-[#E87722] fill-[#E87722]" />
            <span>Honouring your presence with heartfelt prayers</span>
          </div>
        </div>

        {/* Quick hint for guests */}
        <p className="text-center text-xs text-[#FAF7F2]/70 mt-4">
          Click or tap the envelope seal to unseal the card
        </p>
      </div>
    </div>
  );
};
