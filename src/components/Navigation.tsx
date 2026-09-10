import React, { useState } from 'react';
import { Menu, X, Calendar, MapPin, Image as ImageIcon, Heart, MailCheck, Sparkles, Sliders, Mail } from 'lucide-react';
import { WeddingData } from '../types';

interface NavigationProps {
  weddingData: WeddingData;
  onOpenCustomizer: () => void;
  onViewEnvelope?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ weddingData, onOpenCustomizer, onViewEnvelope }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Card', href: '#invitation', icon: Sparkles },
    { label: 'Countdown', href: '#countdown', icon: Calendar },
    { label: 'Mehndi & Barat', href: '#ceremonies', icon: Calendar },
    { label: 'Gallery', href: '#gallery', icon: ImageIcon },
    { label: 'Venue', href: '#map-travel', icon: MapPin },
    { label: 'RSVP', href: '#rsvp', icon: MailCheck },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#C89B3C]/20 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Monogram / Bride Side Header */}
        <a
          href="#invitation"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full border border-[#C89B3C] bg-gradient-to-br from-[#FFF9EE] to-[#FAF7F2] flex items-center justify-center text-[#9A721C] shadow-xs group-hover:border-[#E87722] transition-colors">
            <span className="font-serif text-base font-bold">
              {weddingData.bride.name.charAt(0)}&{weddingData.groom.name.charAt(0)}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#2D2A26] group-hover:text-[#9A721C] transition-colors">
              {weddingData.bride.name} & {weddingData.groom.name}
            </span>
            <span className="text-[10px] font-medium tracking-wider uppercase text-[#E87722]">
              Bride's Family
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-[#4A453E] hover:text-[#9A721C] hover:bg-[#C89B3C]/10 transition-all"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {onViewEnvelope && (
            <button
              onClick={onViewEnvelope}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#9A721C] border border-[#C89B3C]/40 hover:bg-[#C89B3C]/10 transition-all flex items-center gap-1"
              title="Close card to view letter envelope"
            >
              <Mail className="w-3.5 h-3.5 text-[#E87722]" />
              <span className="hidden sm:inline">Envelope</span>
            </button>
          )}

          <a
            href="#rsvp"
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#E87722] text-white hover:bg-[#D46B18] shadow-xs transition-all flex items-center gap-1.5"
          >
            <MailCheck className="w-3.5 h-3.5" />
            <span>RSVP</span>
          </a>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#4A453E] hover:bg-[#C89B3C]/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#C89B3C]/20 bg-[#FAF7F2] px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left text-xs font-medium text-[#2D2A26] hover:bg-[#C89B3C]/15 hover:text-[#9A721C] transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-[#E87722]" />
                <span>{link.label}</span>
              </button>
            );
          })}
          {onViewEnvelope && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onViewEnvelope();
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left text-xs font-semibold text-[#9A721C] bg-[#C89B3C]/10 transition-colors mt-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#E87722]" />
              <span>Fold Back into Envelope</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
