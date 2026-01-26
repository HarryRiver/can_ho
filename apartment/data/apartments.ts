export interface Apartment {
  id: number;
  image: string;
  badge: string;
  badgeType: 'rare' | 'new' | 'featured';
  price: string;
  title: string;
  type?: string;
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
    badge: 'PREMIUM',
    badgeType: 'featured',
    price: '25tr/tháng',
    title: 'Vinhomes Central Park',
    type: 'Căn hộ chung cư',
    rating: 4.9,
    location: 'Quận Bình Thạnh, TP.HCM',
    beds: '2 PN',
    baths: '2 WC',
    sqft: '85m²',
    description: 'Trải nghiệm đỉnh cao của sự sang trọng tại căn hộ độc quyền này. Sở hữu tầm nhìn toàn cảnh công viên và sông Sài Gòn, cùng thiết kế nội thất hiện đại và tiện nghi cao cấp.',
    amenities: ['An ninh 24/7', 'Hồ bơi vô cực', 'Chỗ đậu xe riêng', 'Nhà thông minh'],
    specs: {
      area: '85m²',
      rooms: '2 Phòng ngủ',
      baths: '2 WC',
      furniture: 'Cao cấp'
    }
  },
  {
    id: 2,
    image: '/images/vinhomes.png', // Using same placeholder as featured section
    badge: 'MỚI NHẤT',
    badgeType: 'new',
    price: '18tr/tháng',
    title: 'Masteri Thảo Điền',
    type: 'Căn hộ chung cư',
    rating: 4.7,
    location: 'Quận 2, TP. Thủ Đức',
    beds: '1 PN',
    baths: '1 WC',
    sqft: '62m²',
    description: 'Căn hộ hiện đại nằm ngay trung tâm Thảo Điền. Trần cao, cửa sổ lớn đón nắng tự nhiên và nội thất tinh tế tạo nên không gian sống lý tưởng.',
    amenities: ['Phòng Gym', 'Sân thượng', 'Thân thiện thú cưng'],
    specs: {
      area: '62m²',
      rooms: '1 Phòng ngủ',
      baths: '1 WC',
      furniture: 'Hiện đại'
    }
  },
  {
    id: 3,
    image: '/images/vinhomes.png', // Using same placeholder as featured section
    badge: 'ĐẶC BIỆT',
    badgeType: 'rare',
    price: '45tr/tháng',
    title: 'The Metropole',
    type: 'Căn hộ chung cư',
    rating: 4.8,
    location: 'Quận 2, TP. Thủ Đức',
    beds: '3 PN',
    baths: '3 WC',
    sqft: '120m²',
    description: 'Căn hộ 3 phòng ngủ sang trọng tại vị trí đắc địa Thủ Thiêm. Thiết kế thanh lịch kết hợp hài hòa với tiện ích đô thị, mang lại cuộc sống tiện nghi bậc nhất.',
    amenities: ['Lễ tân', 'Phòng xông hơi', 'View sông'],
    specs: {
      area: '120m²',
      rooms: '3 Phòng ngủ',
      baths: '3 WC',
      furniture: 'Full nội thất'
    }
  },
  {
    id: 4,
    image: '/images/about-hero.png',
    badge: 'NỔI BẬT',
    badgeType: 'featured',
    price: '35tr/tháng',
    title: 'Căn hộ Modernist Quận 7',
    type: 'Căn hộ chung cư',
    rating: 4.8,
    location: 'Quận 7, TP.HCM',
    beds: '2 PN',
    baths: '2 WC',
    sqft: '90m²',
    description: 'Căn hộ 2 phòng ngủ hiện đại được bao quanh bởi không gian xanh mát tại Quận 7. Thiết kế thanh lịch đáp ứng tiện nghi đô thị.',
    amenities: ['Gym', 'Sân vườn', 'Ban công'],
    specs: {
      area: '90m²',
      rooms: '2 Phòng ngủ',
      baths: '2 WC',
      furniture: 'Full nội thất'
    }
  },
  {
    id: 5,
    image: '/images/vinhomes.png',
    badge: 'MỚI',
    badgeType: 'new',
    price: '28tr/tháng',
    title: 'Urban Sky Garden Quận 1',
    type: 'Penthouse',
    rating: 4.6,
    location: 'Quận 1, TP.HCM',
    beds: '2 PN',
    baths: '2 WC',
    sqft: '80m²',
    description: 'Sống giữa những tầng mây tại căn hộ hiện đại ngay trung tâm Quận 1, sở hữu sân vườn riêng trên không.',
    amenities: ['Vườn trên không', 'Lễ tân 24/7', 'Khu văn phòng'],
    specs: {
      area: '80m²',
      rooms: '2 Phòng ngủ',
      baths: '2 WC',
      furniture: 'Hiện đại'
    }
  },
  {
    id: 6,
    image: '/images/about-hero.png',
    badge: 'HIẾM',
    badgeType: 'rare',
    price: '55tr/tháng',
    title: 'Grand View Luxury Thảo Điền',
    type: 'Duplex',
    rating: 5.0,
    location: 'Quận 2, TP. Thủ Đức',
    beds: '4 PN',
    baths: '3.5 WC',
    sqft: '180m²',
    description: 'Đỉnh cao của cuộc sống ven sông. Căn hộ 4 phòng ngủ rộng lớn này mang đến tầm nhìn vô song và nội thất cao cấp.',
    amenities: ['Hồ bơi vô cực', 'Hầm rượu', 'Thang máy riêng'],
    specs: {
      area: '180m²',
      rooms: '4 Phòng ngủ',
      baths: '3.5 WC',
      furniture: 'Sang trọng cao cấp'
    }
  },
  {
    id: 7,
    image: '/images/vinhomes.png',
    badge: 'MỚI',
    badgeType: 'new',
    price: '15tr/tháng',
    title: 'Royal City Luxury Apartment',
    type: 'Căn hộ chung cư',
    rating: 4.5,
    location: 'Thanh Xuân, Hà Nội',
    beds: '2 PN',
    baths: '2 WC',
    sqft: '90m²',
    description: 'Căn hộ sang trọng tại Royal City với đầy đủ tiện ích mua sắm và giải trí ngay trong lòng đất.',
    amenities: ['Trung tâm thương mại', 'Hồ bơi', 'An ninh 24/7'],
    specs: {
      area: '90m²',
      rooms: '2 Phòng ngủ',
      baths: '2 WC',
      furniture: 'Full nội thất'
    }
  },
  {
    id: 8,
    image: '/images/about-hero.png',
    badge: 'HOT',
    badgeType: 'featured',
    price: '12tr/tháng',
    title: 'Dragon Bridge View Đà Nẵng',
    type: 'Căn hộ chung cư',
    rating: 4.7,
    location: 'Sơn Trà, Đà Nẵng',
    beds: '2 PN',
    baths: '2 WC',
    sqft: '75m²',
    description: 'Tầm nhìn trực diện Cầu Rồng, vị trí đắc địa du lịch và nghỉ dưỡng tại Đà Nẵng.',
    amenities: ['View sông', 'Hồ bơi', 'Ban công'],
    specs: {
      area: '75m²',
      rooms: '2 Phòng ngủ',
      baths: '2 WC',
      furniture: 'Hiện đại'
    }
  },
  {
    id: 9,
    image: '/images/vinhomes.png',
    badge: 'VIP',
    badgeType: 'rare',
    price: '65tr/tháng',
    title: 'Landmark 81 Sky Villa',
    type: 'Penthouse',
    rating: 5.0,
    location: 'Bình Thạnh, TP.HCM',
    beds: '4 PN',
    baths: '4 WC',
    sqft: '200m²',
    description: 'Sống tại đỉnh cao Việt Nam. Căn hộ Penthouse đẳng cấp tại Landmark 81.',
    amenities: ['Sky Bar', 'Hồ bơi vô cực', 'Lễ tân 24/7', 'Thang máy riêng'],
    specs: {
      area: '200m²',
      rooms: '4 Phòng ngủ',
      baths: '4 WC',
      furniture: 'Sang trọng cao cấp'
    }
  },
  {
    id: 10,
    image: '/images/about-hero.png',
    badge: '',
    badgeType: 'new',
    price: '8tr/tháng',
    title: 'Căn hộ Studio Cầu Giấy',
    type: 'Studio',
    rating: 4.2,
    location: 'Cầu Giấy, Hà Nội',
    beds: 'Studio',
    baths: '1 WC',
    sqft: '35m²',
    description: 'Căn hộ Studio nhỏ gọn tiện nghi, phù hợp cho sinh viên hoặc người đi làm độc thân.',
    amenities: ['Thang máy', 'Chỗ đậu xe'],
    specs: {
      area: '35m²',
      rooms: 'Studio',
      baths: '1 WC',
      furniture: 'Cơ bản'
    }
  },
  {
    id: 11,
    image: '/images/vinhomes.png',
    badge: 'YÊU THÍCH',
    badgeType: 'featured',
    price: '22tr/tháng',
    title: 'Estella Heights Resort Living',
    type: 'Căn hộ chung cư',
    rating: 4.9,
    location: 'Quận 2, TP. Thủ Đức',
    beds: '3 PN',
    baths: '2 WC',
    sqft: '110m²',
    description: 'Phong cách nghỉ dưỡng resort ngay tại thành phố. Không gian xanh mát và hồ bơi rộng lớn.',
    amenities: ['Hồ bơi resort', 'Gym', 'BBQ', 'Thân thiện thú cưng'],
    specs: {
      area: '110m²',
      rooms: '3 Phòng ngủ',
      baths: '2 WC',
      furniture: 'Full nội thất'
    }
  },
  {
    id: 12,
    image: '/images/about-hero.png',
    badge: 'BIỂN',
    badgeType: 'rare',
    price: '18tr/tháng',
    title: 'Ocean View Apartment Mỹ Khê',
    type: 'Căn hộ chung cư',
    rating: 4.6,
    location: 'Ngũ Hành Sơn, Đà Nẵng',
    beds: '2 PN',
    baths: '2 WC',
    sqft: '80m²',
    description: 'Chỉ vài bước chân ra biển Mỹ Khê. Căn hộ thoáng mát với ban công rộng.',
    amenities: ['View biển', 'Ban công', 'Chỗ đậu xe'],
    specs: {
      area: '80m²',
      rooms: '2 Phòng ngủ',
      baths: '2 WC',
      furniture: 'Hiện đại'
    }
  },
  {
    id: 13,
    image: '/images/vinhomes.png',
    badge: '',
    badgeType: 'new',
    price: '10tr/tháng',
    title: 'Vinhomes Smart City Studio',
    type: 'Studio',
    rating: 4.4,
    location: 'Nam Từ Liêm, Hà Nội',
    beds: 'Studio',
    baths: '1 WC',
    sqft: '30m²',
    description: 'Căn hộ thông minh tại đại đô thị phía Tây Hà Nội.',
    amenities: ['Công viên Nhật Bản', 'Xe buýt điện', 'Gym'],
    specs: {
      area: '30m²',
      rooms: 'Studio',
      baths: '1 WC',
      furniture: 'Full nội thất'
    }
  },
  {
    id: 14,
    image: '/images/about-hero.png',
    badge: 'SANG TRỌNG',
    badgeType: 'featured',
    price: '40tr/tháng',
    title: 'Diamond Island Duplex',
    type: 'Duplex',
    rating: 4.8,
    location: 'Quận 2, TP. Thủ Đức',
    beds: '3 PN',
    baths: '3 WC',
    sqft: '150m²',
    description: 'Căn hộ Duplex thông tầng tại Đảo Kim Cương, 3 mặt giáp sông.',
    amenities: ['Hồ bơi muối khoáng', 'Bến du thuyền', 'An ninh 24/7'],
    specs: {
      area: '150m²',
      rooms: '3 Phòng ngủ',
      baths: '3 WC',
      furniture: 'Cao cấp'
    }
  },
  {
    id: 15,
    image: '/images/vinhomes.png',
    badge: '',
    badgeType: 'new',
    price: '9tr/tháng',
    title: 'Căn hộ Sunrise City View',
    type: 'Căn hộ chung cư',
    rating: 4.3,
    location: 'Quận 7, TP.HCM',
    beds: '1 PN',
    baths: '1 WC',
    sqft: '50m²',
    description: 'Vị trí thuận tiện di chuyển về trung tâm. Tiện ích nội khu đầy đủ.',
    amenities: ['Hồ bơi', 'Gym', 'Siêu thị'],
    specs: {
      area: '50m²',
      rooms: '1 Phòng ngủ',
      baths: '1 WC',
      furniture: 'Cơ bản'
    }
  },
  {
    id: 16,
    image: '/images/about-hero.png',
    badge: 'CỔ ĐIỂN',
    badgeType: 'rare',
    price: '20tr/tháng',
    title: 'Indochina Riverside Đà Nẵng',
    type: 'Căn hộ chung cư',
    rating: 4.5,
    location: 'Hải Châu, Đà Nẵng',
    beds: '2 PN',
    baths: '2 WC',
    sqft: '95m²',
    description: 'Kiến trúc Đông Dương cổ điển bên sông Hàn lãng mạn.',
    amenities: ['View sông Hàn', 'Trung tâm thương mại', 'Gym'],
    specs: {
      area: '95m²',
      rooms: '2 Phòng ngủ',
      baths: '2 WC',
      furniture: 'Cổ điển'
    }
  },
  {
    id: 17,
    image: '/images/vinhomes.png',
    badge: '',
    badgeType: 'new',
    price: '16tr/tháng',
    title: 'Time City Park Hill',
    type: 'Căn hộ chung cư',
    rating: 4.7,
    location: 'Hai Bà Trưng, Hà Nội',
    beds: '2 PN',
    baths: '2 WC',
    sqft: '82m²',
    description: 'Không gian sống xanh mát giữa lòng thủ đô Hà Nội.',
    amenities: ['Nhạc nước', 'Bệnh viện', 'Trường học'],
    specs: {
      area: '82m²',
      rooms: '2 Phòng ngủ',
      baths: '2 WC',
      furniture: 'Full nội thất'
    }
  },
  {
    id: 18,
    image: '/images/about-hero.png',
    badge: 'MỚI',
    badgeType: 'new',
    price: '30tr/tháng',
    title: 'Empire City Linden',
    type: 'Căn hộ chung cư',
    rating: 4.8,
    location: 'Quận 2, TP. Thủ Đức',
    beds: '2 PN',
    baths: '2 WC',
    sqft: '92m²',
    description: 'Căn hộ cao cấp tại khu đô thị mới Thủ Thiêm.',
    amenities: ['Hồ bơi chuẩn Olympic', 'Rạp chiếu phim', 'Lounge'],
    specs: {
      area: '92m²',
      rooms: '2 Phòng ngủ',
      baths: '2 WC',
      furniture: 'Hiện đại'
    }
  }
];
