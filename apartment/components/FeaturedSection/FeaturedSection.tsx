'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 1, 0.44, 1] as [number, number, number, number],
    },
  },
};

export default function FeaturedSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Căn hộ nổi bật</h2>
          <Link href="#" className={styles.viewAll}>
            Xem tất cả &rarr;
          </Link>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {APARTMENTS.map((apt) => (
            <motion.div key={apt.id} variants={itemVariants}>
              <ApartmentCard {...apt} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

