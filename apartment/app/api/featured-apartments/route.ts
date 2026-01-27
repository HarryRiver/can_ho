
import { NextResponse } from 'next/server';

const FEATURED_APARTMENTS = [
  {
    id: 1,
    image: '/images/vinhomes.png',
    tag: 'Premium',
    tagType: 'premium',
    title: 'Vinhomes Central Park',
    price: '25tr/tháng',
    address: 'Quận Bình Thạnh, TP.HCM',
    area: '85m²',
    bedrooms: 2,
    wc: 2,
  },
  {
    id: 2,
    image: '/images/vinhomes.png',
    tag: 'Mới nhất',
    tagType: 'new',
    title: 'Masteri Thảo Điền',
    price: '18tr/tháng',
    address: 'Quận 2, TP. Thủ Đức',
    area: '62m²',
    bedrooms: 1,
    wc: 1,
  },
  {
    id: 3,
    image: '/images/vinhomes.png',
    tag: 'Đặc biệt',
    tagType: 'hot',
    title: 'The Metropole',
    price: '45tr/tháng',
    address: 'Quận 2, TP. Thủ Đức',
    area: '120m²',
    bedrooms: 3,
    wc: 3,
  },
];

export async function GET() {

  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return NextResponse.json(FEATURED_APARTMENTS);
}
