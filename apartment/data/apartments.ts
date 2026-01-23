export interface Apartment {
  id: number;
  image: string;
  badge: string;
  badgeType: 'rare' | 'new' | 'featured';
  price: string;
  title: string;
  rating: number;
  location: string;
  beds: string;
  baths: string;
  sqft: string;
  description?: string;
  amenities?: string[];
  specs?: {
    area: string;
    rooms: string;
    baths: string;
    furniture: string;
  };
}

export const apartments: Apartment[] = [
  {
    id: 1,
    image: '/images/vinhomes.png',
    badge: 'RARE FIND',
    badgeType: 'rare',
    price: '$6,450',
    title: 'The Sky Residence Penthouse',
    rating: 4.9,
    location: 'Downtown District, Sector 4',
    beds: '3 Beds',
    baths: '2.5 Baths',
    sqft: '1,850 sqft',
    description: 'Experience the heights of luxury in this exclusive penthouse. Featuring floor-to-ceiling windows with a 360-degree view of the downtown skyline.',
    amenities: ['24/7 Security', 'Infinity Pool', 'Private Parking', 'Smart Home'],
    specs: {
      area: '1,850 sqft',
      rooms: '3 Rooms',
      baths: '2.5 Full',
      furniture: 'Luxury Designer'
    }
  },
  {
    id: 2,
    image: '/images/about-hero.png',
    badge: 'NEWLY LISTED',
    badgeType: 'new',
    price: '$4,200',
    title: 'Ironworks Industrial Loft',
    rating: 4.7,
    location: 'Arts District, East Riverside',
    beds: '1 Bed',
    baths: '1 Bath',
    sqft: '1,100 sqft',
    description: 'A stunning industrial loft in the heart of the Arts District. High ceilings, exposed brick, and modern finishes make this a unique living space.',
    amenities: ['Gym', 'Rooftop Lounge', 'Pet Friendly'],
    specs: {
      area: '1,100 sqft',
      rooms: '1 Room',
      baths: '1 Full',
      furniture: 'Industrial Chic'
    }
  },
  {
    id: 3,
    image: '/images/vinhomes.png',
    badge: 'PROMOTED',
    badgeType: 'new',
    price: '$3,100',
    title: 'Serene Waterfront Studio',
    rating: 4.5,
    location: 'South Harbor Marina',
    beds: 'Studio',
    baths: '1 Bath',
    sqft: '780 sqft',
    description: 'A peaceful studio apartment situated right on the waterfront. Perfect for those who enjoy morning views of the marina.',
    amenities: ['Concierge', 'Sauna', 'Waterfront Access'],
    specs: {
      area: '780 sqft',
      rooms: 'Studio',
      baths: '1 Full',
      furniture: 'Minimalist'
    }
  },
  {
    id: 4,
    image: '/images/about-hero.png',
    badge: 'FEATURED',
    badgeType: 'featured',
    price: '$5,800',
    title: 'The Ivy Modernist 2BR',
    rating: 4.8,
    location: 'Garden District, West End',
    beds: '2 Beds',
    baths: '2 Baths',
    sqft: '1,420 sqft',
    description: 'Modern 2-bedroom apartment surrounded by greenery in the prestigious Garden District. Elegant design meets urban convenience.',
    amenities: ['Gym', 'Garden', 'Balcony'],
    specs: {
      area: '1,420 sqft',
      rooms: '2 Rooms',
      baths: '2 Full',
      furniture: 'Fully Furnished'
    }
  },
  {
    id: 5,
    image: '/images/vinhomes.png',
    badge: 'NEW',
    badgeType: 'new',
    price: '$3,900',
    title: 'Urban Sky Garden',
    rating: 4.6,
    location: 'Central Business District',
    beds: '2 Beds',
    baths: '2 Baths',
    sqft: '1,200 sqft',
    description: 'Live above the clouds in this modern CBD apartment featuring a private sky garden terrace.',
    amenities: ['Sky Garden', '24/7 Concierge', 'Business Center'],
    specs: {
      area: '1,200 sqft',
      rooms: '2 Rooms',
      baths: '2 Full',
      furniture: 'Modern'
    }
  },
  {
    id: 6,
    image: '/images/about-hero.png',
    badge: 'RARE',
    badgeType: 'rare',
    price: '$7,200',
    title: 'Grand View Luxury',
    rating: 5.0,
    location: 'Riverfront Heights',
    beds: '4 Beds',
    baths: '3.5 Baths',
    sqft: '2,500 sqft',
    description: 'The pinnacle of riverfront living. This expansive 4-bedroom residence offers unmatched views and premium finishes throughout.',
    amenities: ['Infinity Pool', 'Wine Cellar', 'Private Elevator'],
    specs: {
      area: '2,500 sqft',
      rooms: '4 Rooms',
      baths: '3.5 Full',
      furniture: 'Premium Luxury'
    }
  }
];
