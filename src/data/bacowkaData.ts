export interface GalleryPhoto {
  id: string;
  url: string;
  alt: string;
  title: string;
  category?: string;
  aspect?: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // First 7 visible photos
  {
    id: 'gj9RhQ3L',
    url: 'https://i.postimg.cc/gj9RhQ3L/740953720-122184940880944758-8267240926039559386-n.jpg',
    alt: 'Bacówka u Eliasza w Koniakowie - widok na bacówkę i stado owiec',
    title: 'Wypas na beskidzkiej hali',
    category: 'Bacówka i wypas'
  },
  {
    id: 'pLd9mR31',
    url: 'https://i.postimg.cc/pLd9mR31/bacowka-2.jpg',
    alt: 'Tradycyjny klimat Bacówki u Eliasza',
    title: 'Góralska tradycja w Koniakowie',
    category: 'Klimat'
  },
  {
    id: 'fRb3VD1f',
    url: 'https://i.postimg.cc/fRb3VD1f/bacowka-3.jpg',
    alt: 'Owce na hali w Koniakowie',
    title: 'Kierdel owiec na pastwisku',
    category: 'Zwierzęta'
  },
  {
    id: 'SxKXnkHD',
    url: 'https://i.postimg.cc/SxKXnkHD/bacowka-4.jpg',
    alt: 'Drewniane wnętrze i tradycyjne wyroby bacówki',
    title: 'Tradycja i pasja z sercem',
    category: 'Tradycja'
  },
  {
    id: 'SxKXnkHZ',
    url: 'https://i.postimg.cc/SxKXnkHZ/bacowka-5.jpg',
    alt: 'Beskidzkie krajobrazy wokół Koniakowa',
    title: 'Beskidy - otoczenie bacówki',
    category: 'Krajobraz'
  },
  {
    id: '52tHXbDK',
    url: 'https://i.postimg.cc/52tHXbDK/bacowka-6.jpg',
    alt: 'Góralski styl i rzemiosło w Bacówce u Eliasza',
    title: 'Serce włożone w każdy dzień',
    category: 'Rzemiosło'
  },
  {
    id: '8zCF7Nx9',
    url: 'https://i.postimg.cc/8zCF7Nx9/bacowka-7.jpg',
    alt: 'Widok na góry i bacówkę u Eliasza',
    title: 'Koniaków - serce Beskidów',
    category: 'Beskidy'
  },
  // Hidden 6 photos (expandable)
  {
    id: 'g20wxm1T',
    url: 'https://i.postimg.cc/g20wxm1T/bacowka-8.jpg',
    alt: 'Codzienność na beskidzkiej hali',
    title: 'Życie na bacówce',
    category: 'Codzienność'
  },
  {
    id: 'vZm14bCJ',
    url: 'https://i.postimg.cc/vZm14bCJ/bacowka-9.jpg',
    alt: 'Bacowska gościnność w Koniakowie',
    title: 'Spotkanie z tradycją',
    category: 'Gościnność'
  },
  {
    id: 'YCS4vMJ7',
    url: 'https://i.postimg.cc/YCS4vMJ7/bacowka-10.jpg',
    alt: 'Sielskie beskidzkie pastwiska',
    title: 'Czysta natura i hale',
    category: 'Natura'
  },
  {
    id: 'x1dkXnWn',
    url: 'https://i.postimg.cc/x1dkXnWn/bacowka-11.jpg',
    alt: 'Drewniana chata pasterska',
    title: 'Klimat dawnych lat',
    category: 'Architektura'
  },
  {
    id: 'Nj0yKBWG',
    url: 'https://i.postimg.cc/Nj0yKBWG/bacowka-12.jpg',
    alt: 'Stado owiec pod szczytami Beskidów',
    title: 'Tradycyjny kierdel',
    category: 'Wypas'
  },
  {
    id: 'HkLJrdfp',
    url: 'https://i.postimg.cc/HkLJrdfp/bacowka-13.jpg',
    alt: 'Zachód słońca nad bacówką w Koniakowie',
    title: 'Beskidzki zmierzch u Eliasza',
    category: 'Klimat'
  }
];

export const HIGHLIGHT_FEATURES = [
  {
    emoji: '🏔️',
    title: 'Tradycja i pasja',
    desc: 'Czerpiemy z wielopokoleniowych tradycji pasterskich Beskidu Śląskiego i Trójwsi. Prawdziwe bacowanie to dla nas nie tylko praca, ale przede wszystkim styl życia i tożsamość.'
  },
  {
    emoji: '❤️',
    title: 'Prowadzone z sercem',
    desc: 'Każdy dzień w bacówce to szczere oddanie, troska o stado, szacunek do beskidzkiej natury i otwartość na każdego wędrowca, który zawita w nasze progi.'
  },
  {
    emoji: '📍',
    title: 'Koniaków, serce Beskidów',
    desc: 'Malowniczo położona bacówka w słynnym Koniakowie — krainie hal, koronek i najpiękniejszych panoram na beskidzkie szczyty oraz pasmo Ochodzitej.'
  },
  {
    emoji: '🆕',
    title: 'Działamy od 2024',
    desc: 'Od 2024 roku z dumą tworzymy miejsce pełne autentycznego góralskiego ducha, łącząc młodzieńczą energię z wiernością dawnym obyczajom.'
  }
];

export const CONTACT_INFO = {
  name: 'Bacówka u Eliasza',
  location: 'Koniaków, Beskidy',
  region: 'Trójwieś Beskidzka, Beskid Śląski',
  since: '2024',
  motto: 'tradycja • pasja • z sercem',
  whatsappNumber: '+48 452 564 754',
  whatsappRaw: '48452564754',
  whatsappUrl: 'https://wa.me/48452564754',
  facebookUrl: 'https://www.facebook.com',
  heroBg: 'https://i.postimg.cc/gj9RhQ3L/740953720-122184940880944758-8267240926039559386-n.jpg',
  avatarUrl: 'https://i.postimg.cc/Nfq7294c/662125801-122169268598944758-7141125219766278923-n.jpg'
};
