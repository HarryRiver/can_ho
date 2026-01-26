'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import styles from './FeaturedSection.module.css';

interface Apartment {
  id: number;
  image: string;
  tag: string;
  tagType: 'premium' | 'new' | 'hot';
  title: string;
  price: string;
  address: string;
  area: string;
  bedrooms: number;
  wc: number;
}

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
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await fetch('/api/featured-apartments');
        const data = await response.json();
        setApartments(data);
      } catch (error) {
        console.error('Failed to fetch apartments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApartments();
  }, []);

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
          <Link href="/can-ho" className={styles.viewAll}>
            Xem tất cả &rarr;
          </Link>
        </motion.div>

        {isLoading ? (
          <div className={styles.loading}>Đang tải...</div>
        ) : (
          <motion.div 
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {apartments.map((apt) => (
              <motion.div key={apt.id} variants={itemVariants}>
                <ApartmentCard {...apt} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

