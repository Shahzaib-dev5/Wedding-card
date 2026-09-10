/**
 * Wedding Invitation Application Types
 */

export interface EventDetail {
  id: string;
  title: string;
  subtitle: string;
  date: string; // ISO date or formatted
  time: string;
  venueName: string;
  hallOrLawn: string;
  address: string;
  city: string;
  themeColor: string;
  dressCode: string;
  dressCodeSuggestion: string;
  description: string;
  highlights: string[];
  timeline: { time: string; activity: string; icon?: string }[];
  googleMapsUrl: string;
}

export interface WeddingData {
  bismillahText: string;
  hosts: {
    parentsNames: string; // e.g. "Mr. & Mrs. Tariq Mahmood"
    sideDescription: string; // e.g. "cordially request the honour of your presence at the wedding celebrations of their beloved daughter"
    familyHonorific: string;
  };
  bride: {
    name: string;
    fullName: string;
    title: string;
  };
  groom: {
    name: string;
    fullName: string;
    parentsNames: string;
    title: string;
  };
  tagline: string;
  hashtag: string;
  events: {
    mehndi: EventDetail;
    barat: EventDetail;
  };
  venueCoordinates: {
    lat: number;
    lng: number;
  };
}

export interface RSVPSubmission {
  id: string;
  guestName: string;
  contactNumber: string;
  email?: string;
  attendingEvents: 'both' | 'mehndi' | 'barat' | 'declined';
  numberOfAdults: number;
  numberOfChildren: number;
  dietaryPreference: 'halal_standard' | 'vegetarian' | 'vegan' | 'special';
  specialDietaryNotes?: string;
  favoriteMehndiSong?: string;
  blessingMessage?: string;
  submittedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'engagement' | 'prewedding' | 'mehndi_moments' | 'rings';
  imageUrl: string;
  caption: string;
  date?: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  event: 'General' | 'Mehndi' | 'Barat';
}

export interface TravelGuide {
  venueAddress: string;
  city: string;
  nearestAirport: {
    name: string;
    code: string;
    distance: string;
    drivingTime: string;
  };
  parkingAndValet: string;
  carDirections: string[];
  recommendedHotels: {
    name: string;
    distance: string;
    rating: string;
    bookingNote?: string;
    phone: string;
  }[];
}
