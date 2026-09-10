/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EnvelopeCover } from './components/EnvelopeCover';
import { Navigation } from './components/Navigation';
import { HeroInvitation } from './components/HeroInvitation';
import { CountdownTimer } from './components/CountdownTimer';
import { CeremonyDetails } from './components/CeremonyDetails';
import { PhotoGallery } from './components/PhotoGallery';
import { DigitalMapSection } from './components/DigitalMapSection';
import { RSVPForm } from './components/RSVPForm';
import { GuestbookWishes } from './components/GuestbookWishes';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { CalendarModal } from './components/CalendarModal';
import { FamilyCustomizerModal } from './components/FamilyCustomizerModal';
import {
  initialWeddingData,
  initialGalleryItems,
  initialGuestbookEntries,
} from './data/weddingData';
import { GalleryItem, GuestbookEntry, WeddingData } from './types';

export default function App() {
  const [weddingData, setWeddingData] = useState<WeddingData>(() => {
    try {
      const saved = localStorage.getItem('wedding_config_aiman_daniyal');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return initialWeddingData;
  });

  const [galleryItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_gallery_aiman_daniyal');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return initialGalleryItems;
  });

  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_guestbook_aiman_daniyal');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return initialGuestbookEntries;
  });

  // Start with the Letter Envelope closed so user experiences the royal letter first!
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const [customizerModalOpen, setCustomizerModalOpen] = useState(false);
  const [mapHighlightEvent, setMapHighlightEvent] = useState<'mehndi' | 'barat'>('barat');

  const handleSaveCustomData = (updated: WeddingData) => {
    setWeddingData(updated);
    try {
      localStorage.setItem('wedding_config_aiman_daniyal', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetCustomData = () => {
    setWeddingData(initialWeddingData);
    try {
      localStorage.removeItem('wedding_config_aiman_daniyal');
    } catch {
      // ignore
    }
  };

  const handleAddWish = (entry: GuestbookEntry) => {
    const updated = [entry, ...guestbookEntries];
    setGuestbookEntries(updated);
    try {
      localStorage.setItem('wedding_guestbook_aiman_daniyal', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleSelectEventForMap = (eventId: 'mehndi' | 'barat') => {
    setMapHighlightEvent(eventId);
    const element = document.querySelector('#map-travel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2A26] flex flex-col selection:bg-[#E87722]/20 selection:text-[#9B2226]">
      {/* 1. Letter / Envelope Initial Experience */}
      <EnvelopeCover
        weddingData={weddingData}
        isOpened={isEnvelopeOpened}
        onOpen={() => setIsEnvelopeOpened(true)}
        onCloseToEnvelope={() => setIsEnvelopeOpened(false)}
      />

      {/* Ambient Traditional Instrumentals Synth Player */}
      <AudioPlayer triggerPlay={isEnvelopeOpened} />

      {/* Navigation Header */}
      <Navigation
        weddingData={weddingData}
        onOpenCustomizer={() => setCustomizerModalOpen(true)}
        onViewEnvelope={() => setIsEnvelopeOpened(false)}
      />

      {/* Main Content Sections - Simple, Clean & Visual */}
      <main className="flex-1">
        {/* Hero Wedding Card with Bride on Swing Artwork */}
        <HeroInvitation
          weddingData={weddingData}
          onOpenCalendarModal={() => setCalendarModalOpen(true)}
        />

        {/* Live Countdown Timer */}
        <CountdownTimer
          weddingData={weddingData}
          onOpenCalendarModal={() => setCalendarModalOpen(true)}
        />

        {/* Mehndi & Barat Ceremony Cards */}
        <CeremonyDetails
          weddingData={weddingData}
          onSelectEventForMap={handleSelectEventForMap}
        />

        {/* Engagement & Celebration Moments */}
        <PhotoGallery items={galleryItems} />

        {/* Venue Location & Direct Navigation */}
        <DigitalMapSection
          weddingData={weddingData}
          highlightEvent={mapHighlightEvent}
        />

        {/* Simple RSVP Form */}
        <RSVPForm weddingData={weddingData} />

        {/* Prayers & Blessings */}
        <GuestbookWishes
          entries={guestbookEntries}
          onAddWish={handleAddWish}
        />
      </main>

      {/* Footer */}
      <Footer weddingData={weddingData} />

      {/* Calendar Add Modal */}
      <CalendarModal
        isOpen={calendarModalOpen}
        onClose={() => setCalendarModalOpen(false)}
        weddingData={weddingData}
      />

      {/* Family Personalization Modal */}
      <FamilyCustomizerModal
        isOpen={customizerModalOpen}
        onClose={() => setCustomizerModalOpen(false)}
        weddingData={weddingData}
        onSave={handleSaveCustomData}
        onReset={handleResetCustomData}
      />
    </div>
  );
}
