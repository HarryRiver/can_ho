import Link from 'next/link';
import ApartmentCard from './ApartmentCard';
import styles from './FeaturedSection.module.css';

const APARTMENTS = [
  {
    id: 1,
    image: '/images/vinhomes.png',
    tag: 'Premium',
    tagType: 'premium' as const,
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
    tagType: 'new' as const,
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
    tagType: 'hot' as const,
    title: 'The Metropole',
    price: '45tr/tháng',
    address: 'Quận 2, TP. Thủ Đức',
    area: '120m²',
    bedrooms: 3,
    wc: 3,
  },
];

export default function FeaturedSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Căn hộ nổi bật</h2>
          <Link href="#" className={styles.viewAll}>
            Xem tất cả &rarr;
          </Link>
        </div>

        <div className={styles.grid}>
          {APARTMENTS.map((apt) => (
            <ApartmentCard key={apt.id} {...apt} />
          ))}
        </div>
      </div>
    </section>
  );
}
