import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Copy,
  Check,
  Share2,
  ExternalLink,
  Car,
} from 'lucide-react';
import { WeddingData } from '../types';
import { FloralDivider } from './FloralMotifs';

interface DigitalMapSectionProps {
  weddingData: WeddingData;
  highlightEvent?: 'mehndi' | 'barat';
}

export const DigitalMapSection: React.FC<DigitalMapSectionProps> = ({
  weddingData,
  highlightEvent = 'barat',
}) => {
  const [selectedEvent, setSelectedEvent] = useState<'mehndi' | 'barat'>(highlightEvent);
  const [copied, setCopied] = useState(false);

  const venue =
    selectedEvent === 'mehndi'
      ? weddingData.events.mehndi
      : weddingData.events.barat;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${venue.venueName}, ${venue.address}, ${venue.city}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Location for ${weddingData.bride.name} & ${weddingData.groom.name}'s Wedding (${venue.title}):\n${venue.venueName}, ${venue.address}\nGoogle Maps: ${venue.googleMapsUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="map-travel" className="py-12 md:py-16 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#609888]/15 text-[#2D5D4E] text-xs font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Venue Location</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2A26]">
            Find Your Way
          </h2>
          <p className="text-xs sm:text-sm text-[#5A534B] mt-1">
            Complimentary valet parking is arranged for all invited guests.
          </p>

          {/* Simple Event Switcher */}
          <div className="mt-4 inline-flex p-1 rounded-full bg-[#FFF9EE] border border-[#C89B3C]/30 shadow-xs">
            <button
              onClick={() => setSelectedEvent('mehndi')}
              className={`px-4 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedEvent === 'mehndi'
                  ? 'bg-[#E87722] text-white shadow-xs'
                  : 'text-[#5A534B] hover:text-[#E87722]'
              }`}
            >
              1. Mehndi Venue
            </button>
            <button
              onClick={() => setSelectedEvent('barat')}
              className={`px-4 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedEvent === 'barat'
                  ? 'bg-[#9A721C] text-white shadow-xs'
                  : 'text-[#5A534B] hover:text-[#9A721C]'
              }`}
            >
              2. Barat Venue
            </button>
          </div>
        </div>

        {/* Venue Card */}
        <div className="bg-[#FFFDF9] border-2 border-[#C89B3C]/35 rounded-3xl p-6 sm:p-8 shadow-md">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="space-y-2 text-center md:text-left">
              <span
                className={`text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                  selectedEvent === 'mehndi'
                    ? 'bg-[#E87722]/15 text-[#E87722]'
                    : 'bg-[#C89B3C]/20 text-[#9A721C]'
                }`}
              >
                {venue.title}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D2A26]">
                {venue.venueName}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A534B] flex items-center justify-center md:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E87722] shrink-0" />
                <span>
                  {venue.address}, {venue.city}
                </span>
              </p>
              <p className="text-[11px] text-[#7C756B] flex items-center justify-center md:justify-start gap-1">
                <Car className="w-3.5 h-3.5 text-[#609888]" />
                <span>Valet parking available at the main gate</span>
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#9A721C] hover:bg-[#78530C] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={handleCopyAddress}
                className="px-4 py-2 rounded-full bg-white hover:bg-[#FAF7F2] text-[#2D2A26] border border-[#C89B3C]/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Address'}</span>
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        <FloralDivider className="my-8" />
      </div>
    </section>
  );
};
