import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Download, ExternalLink, Check } from 'lucide-react';
import { WeddingData } from '../types';
import { MarigoldFlower } from './FloralMotifs';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  weddingData: WeddingData;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({
  isOpen,
  onClose,
  weddingData,
}) => {
  const [downloadedEvent, setDownloadedEvent] = useState<string | null>(null);

  if (!isOpen) return null;

  const { mehndi, barat } = weddingData.events;

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = (
    title: string,
    description: string,
    location: string,
    startDateStr: string,
    durationHours: number
  ) => {
    const start = new Date(startDateStr);
    const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000);

    const formatGCal = (date: Date) =>
      date.toISOString().replace(/-|:|\.\d+/g, '');

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      details: description,
      location: location,
      dates: `${formatGCal(start)}/${formatGCal(end)}`,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  // Download .ics file
  const downloadIcs = (
    id: string,
    title: string,
    description: string,
    location: string,
    startDateStr: string,
    durationHours: number
  ) => {
    const start = new Date(startDateStr);
    const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000);

    const formatIcs = (date: Date) =>
      date.toISOString().replace(/-|:|\.\d+/g, '');

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Aiman & Daniyal Wedding//Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${id}-${Date.now()}@weddinginvite`,
      `DTSTAMP:${formatIcs(new Date())}`,
      `DTSTART:${formatIcs(start)}`,
      `DTEND:${formatIcs(end)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
      `LOCATION:${location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${id}_wedding_event.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedEvent(id);
    setTimeout(() => setDownloadedEvent(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] border-2 border-[#C89B3C]/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5A534B] hover:text-[#2D2A26] p-1.5 rounded-full hover:bg-[#C89B3C]/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#C89B3C]/15 text-[#9A721C] flex items-center justify-center mx-auto mb-2">
            <CalendarIcon className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2A26]">
            Save Wedding Dates
          </h3>
          <p className="text-xs text-[#5A534B] mt-1">
            Add these special ceremonies to your Google Calendar or Apple Calendar/iCal.
          </p>
        </div>

        <div className="space-y-4">
          {/* Mehndi Option */}
          <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-[#E87722]/30">
            <div className="flex items-center gap-2 text-[#E87722] mb-1">
              <MarigoldFlower size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">
                1. Mehndi Celebration
              </span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#2D2A26]">
              {mehndi.title}
            </h4>
            <p className="text-xs text-[#5A534B] mb-3">
              Friday, October 23, 2026 • 7:00 PM onwards at {mehndi.venueName}
            </p>

            <div className="flex gap-2">
              <a
                href={getGoogleCalendarUrl(
                  `${weddingData.bride.name} & ${weddingData.groom.name} - Mehndi Night`,
                  `${mehndi.subtitle}. Venue: ${mehndi.venueName}, ${mehndi.address}`,
                  `${mehndi.venueName}, ${mehndi.address}`,
                  mehndi.date,
                  5
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-full bg-[#E87722] hover:bg-[#D46B18] text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Google Calendar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() =>
                  downloadIcs(
                    'mehndi',
                    `${weddingData.bride.name} & ${weddingData.groom.name} - Mehndi Night`,
                    `${mehndi.subtitle}. Venue: ${mehndi.venueName}, ${mehndi.address}`,
                    `${mehndi.venueName}, ${mehndi.address}`,
                    mehndi.date,
                    5
                  )
                }
                className="py-2 px-4 rounded-full bg-white border border-[#E87722]/40 text-[#E87722] hover:bg-[#E87722]/10 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                {downloadedEvent === 'mehndi' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Download className="w-3.5 h-3.5" />}
                <span>.ICS / Apple</span>
              </button>
            </div>
          </div>

          {/* Barat Option */}
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C89B3C]/35">
            <div className="flex items-center gap-2 text-[#9A721C] mb-1">
              <CalendarIcon className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                2. Barat & Grand Reception
              </span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#2D2A26]">
              {barat.title}
            </h4>
            <p className="text-xs text-[#5A534B] mb-3">
              Sunday, October 25, 2026 • 6:30 PM onwards at {barat.venueName}
            </p>

            <div className="flex gap-2">
              <a
                href={getGoogleCalendarUrl(
                  `${weddingData.bride.name} & ${weddingData.groom.name} - Barat & Grand Reception`,
                  `${barat.subtitle}. Venue: ${barat.venueName}, ${barat.address}`,
                  `${barat.venueName}, ${barat.address}`,
                  barat.date,
                  5
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-full bg-[#9A721C] hover:bg-[#78530C] text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Google Calendar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() =>
                  downloadIcs(
                    'barat',
                    `${weddingData.bride.name} & ${weddingData.groom.name} - Barat & Grand Reception`,
                    `${barat.subtitle}. Venue: ${barat.venueName}, ${barat.address}`,
                    `${barat.venueName}, ${barat.address}`,
                    barat.date,
                    5
                  )
                }
                className="py-2 px-4 rounded-full bg-white border border-[#C89B3C]/50 text-[#9A721C] hover:bg-[#C89B3C]/10 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                {downloadedEvent === 'barat' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Download className="w-3.5 h-3.5" />}
                <span>.ICS / Apple</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full text-xs font-semibold text-[#7C756B] hover:text-[#2D2A26] border border-[#C89B3C]/30 hover:bg-white transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
