import { GalleryItem, GuestbookEntry, TravelGuide, WeddingData } from '../types';
import brideSwingImg from '../assets/images/bride_floral_swing_1789013526105.jpg';
import weddingHeaderImg from '../assets/images/wedding_floral_header_1789013541113.jpg';
import engagementPortraitImg from '../assets/images/engagement_portrait_1789013556102.jpg';
import mehndiHandsImg from '../assets/images/mehndi_hands_rings_1789013575733.jpg';

export { brideSwingImg, weddingHeaderImg, engagementPortraitImg, mehndiHandsImg };

export const initialWeddingData: WeddingData = {
  bismillahText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  hosts: {
    parentsNames: 'Mr. & Mrs. Tariq Mahmood',
    sideDescription:
      'cordially request the pleasure of your company and prayers to celebrate the wedding festivities of their beloved daughter',
    familyHonorific: 'Together with their elders and families (The Mahmood Family)',
  },
  bride: {
    name: 'Aiman',
    fullName: 'Aiman Tariq',
    title: 'Beloved Daughter',
  },
  groom: {
    name: 'Daniyal',
    fullName: 'Daniyal Shakeel',
    parentsNames: 'Mr. & Mrs. Shakeel Ahmed',
    title: 'Son of Mr. & Mrs. Shakeel Ahmed',
  },
  tagline: 'Two Souls, One Heart, An Eternal Bond Blessed by Allah',
  hashtag: '#AimanWedsDaniyal',
  events: {
    mehndi: {
      id: 'mehndi',
      title: 'The Mehndi Celebration',
      subtitle: 'Phoolon ki Holi, Sangeet & Dholak Night',
      date: '2026-10-23T19:00:00',
      time: '7:00 PM onwards',
      venueName: 'The Marquee Royal Courtyard',
      hallOrLawn: 'Emerald Garden & Poolside Marquee',
      address: 'Club Road, Near Royal Palm Golf & Country Club',
      city: 'Lahore, Pakistan',
      themeColor: '#E87722',
      dressCode: 'Festive Mehndi Vibrance',
      dressCodeSuggestion: 'Shades of Sunshine Yellow, Mustard, Mint Green & Coral',
      description:
        'Join the bride’s family for an enchanting evening filled with fragrant marigolds, live henna artistry, rhythmic dholak beats, traditional dance performances, and exquisite street food delicacies.',
      highlights: [
        'Live Henna & Mehndi Artists for all guests',
        'Traditional Dholak & Sangeet Dance Performances',
        'Gendha Phool (Marigold) Flower Shower & Entry',
        'Authentic Street Food Stalls & Kashmiri Chai',
      ],
      timeline: [
        { time: '07:00 PM', activity: 'Guest Welcome & Henna Stations Open' },
        { time: '07:45 PM', activity: 'Royal Entry of the Bride on Floral Jhula' },
        { time: '08:30 PM', activity: 'Rasme-Mehndi & Family Dance Performances' },
        { time: '09:45 PM', activity: 'Lavish Traditional Dinner & Live BBQ' },
        { time: '11:00 PM', activity: 'Dhol & Musical Night Jam' },
      ],
      googleMapsUrl: 'https://maps.google.com/?q=Royal+Palm+Golf+and+Country+Club+Lahore',
    },
    barat: {
      id: 'barat',
      title: 'The Barat & Grand Reception',
      subtitle: 'Nikah Ceremony, Royal Banquet & Rukhsati',
      date: '2026-10-25T18:30:00',
      time: '6:30 PM to 11:30 PM',
      venueName: 'The Grand Crystal Ballroom',
      hallOrLawn: 'Imperial Banquet Hall & Grand Foyer',
      address: 'Canal Bank Road, Phase V Executive Enclave',
      city: 'Lahore, Pakistan',
      themeColor: '#C89B3C',
      dressCode: 'Regal Formal / Black Tie & Sherwani',
      dressCodeSuggestion: 'Ivory, Champagne Gold, Deep Burgundy, or Emerald Formals',
      description:
        'Hosted with utmost warmth and pride by the bride’s parents as we warmly welcome the Groom’s Barat procession, witness the sacred Nikah vows, share a lavish celebratory feast, and send off our dear daughter with prayers and heartfelt blessings.',
      highlights: [
        'Grand Welcome of the Groom’s Barat with Rose Petal Shower',
        'Solemnization of Sacred Nikah & Duas',
        'Seven-Course Royal Mughlai Banquet Dinner',
        'Emotional & Blessed Rukhsati Ceremony',
      ],
      timeline: [
        { time: '06:30 PM', activity: 'Arrival of Guests & Welcome Beverages' },
        { time: '07:30 PM', activity: 'Grand Baraat Procession Swagat' },
        { time: '08:15 PM', activity: 'Sacred Nikah Khawan Ceremony & Duas' },
        { time: '09:15 PM', activity: 'Imperial Dinner & Celebration Feast' },
        { time: '10:45 PM', activity: 'Rukhsati Ceremony with Quranic Blessings' },
      ],
      googleMapsUrl: 'https://maps.google.com/?q=The+Grand+Ballroom+Canal+Bank+Road',
    },
  },
  venueCoordinates: {
    lat: 31.5204,
    lng: 74.3587,
  },
};

export const initialGalleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'The Engagement Moment',
    category: 'engagement',
    imageUrl: engagementPortraitImg,
    caption: 'A sunny afternoon where forever began in the heritage gardens.',
    date: 'February 2026',
  },
  {
    id: 'gallery-2',
    title: 'The Sacred Rings & Henna Motifs',
    category: 'rings',
    imageUrl: mehndiHandsImg,
    caption: 'Intertwined love: intricate henna peacocks, floral vines, and the sparkling symbol of eternity.',
    date: 'March 2026',
  },
  {
    id: 'gallery-3',
    title: 'Pre-Wedding Royal Courtyard',
    category: 'prewedding',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    caption: 'Sharing laughs and quiet promises amidst classical arches and warm marigold decor.',
    date: 'April 2026',
  },
  {
    id: 'gallery-4',
    title: 'Tradition & Splendor',
    category: 'mehndi_moments',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    caption: 'Vibrant yellow dupattas and festive florals in anticipation of the Mehndi festivities.',
    date: 'May 2026',
  },
  {
    id: 'gallery-5',
    title: 'Golden Hour Silhouette',
    category: 'engagement',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    caption: 'Two souls walking side by side as the evening sun bathes the palace in gold.',
    date: 'June 2026',
  },
  {
    id: 'gallery-6',
    title: 'Bespoke Jewelry & Heritage Details',
    category: 'rings',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop',
    caption: 'Passed down through generations, reimagined for a modern celebration of union.',
    date: 'July 2026',
  },
];

export const initialTravelGuide: TravelGuide = {
  venueAddress: 'The Grand Crystal & Royal Marquee Enclave, Main Canal Bank Road, Lahore',
  city: 'Lahore, Pakistan',
  nearestAirport: {
    name: 'Allama Iqbal International Airport (LHE)',
    code: 'LHE',
    distance: '18.4 km',
    drivingTime: 'Approx. 25–30 minutes via Ring Road',
  },
  parkingAndValet:
    'Complimentary VIP valet parking is available at Gate 2 for all guests. Dedicated Baraat parking and entrance through Gate 1.',
  carDirections: [
    'Take Lahore Ring Road towards DHA Phase 5 / Canal Interchange.',
    'Take the Canal Bank exit towards Executive Enclave.',
    'Continue straight for 1.2 km; venue entrance marquee is on the right side marked with illuminated floral arches.',
  ],
  recommendedHotels: [
    {
      name: 'Pearl Continental Hotel',
      distance: '6.2 km (12 mins)',
      rating: '5 Star Luxury',
      bookingNote: 'Special wedding guest rate available under code: AIMANDANIYAL',
      phone: '+92 42 111 505 505',
    },
    {
      name: 'Nishat Hotel & Suites Emporium',
      distance: '9.5 km (18 mins)',
      rating: '5 Star Boutique',
      bookingNote: 'Complimentary airport transfer when booked 14 days in advance',
      phone: '+92 42 111 646 835',
    },
    {
      name: 'Avari Hotel Lahore',
      distance: '7.8 km (15 mins)',
      rating: '4.8 Star Heritage',
      bookingNote: 'Close proximity to Mehndi venue with luxury family suites',
      phone: '+92 42 3636 6366',
    },
  ],
};

export const initialGuestbookEntries: GuestbookEntry[] = [
  {
    id: 'wish-1',
    name: 'Uncle Tariq & Auntie Shazia (Karachi)',
    relation: "Bride's Chacha & Chachi",
    message:
      'MashAllah, our dearest Aiman! You will always be our precious princess. May Allah SWT bless this union with endless affection, peace (Sakina), and joy. So excited for the Mehndi dance night!',
    timestamp: '2 hours ago',
    event: 'General',
  },
  {
    id: 'wish-2',
    name: 'Hina & Farhan (London)',
    relation: "Bride's First Cousins",
    message:
      'Counting down the days until we land in Lahore! The invitation and portrait on the swing are absolutely stunning. Can’t wait for the Barat welcome!',
    timestamp: 'Yesterday',
    event: 'Mehndi',
  },
  {
    id: 'wish-3',
    name: 'Dr. Munir Ahmed & Family',
    relation: 'Close Family Friends',
    message:
      'Heartiest congratulations to Tariq Bhai and family on this auspicious milestone. Our prayers are always with Aiman and Daniyal.',
    timestamp: '3 days ago',
    event: 'Barat',
  },
];
