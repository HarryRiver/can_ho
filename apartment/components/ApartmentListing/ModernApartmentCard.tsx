'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styles from './ModernApartmentCard.module.css';

interface ModernApartmentCardProps {
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
}

export default function ModernApartmentCard({
  id,
  image,
  badge,
  badgeType,
  price,
  title,
  rating,
  location,
  beds,
  baths,
  sqft
}: ModernApartmentCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/can-ho/${id}`} className={styles.linkWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={title} fill className={styles.image} />
          
          <div className={styles.topOverlay}>
            <span className={`${styles.badge} ${styles[badgeType]}`}>
              {badge}
            </span>
            <button 
              className={`${styles.favoriteBtn} ${isFavorite ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          <div className={styles.priceTag}>
            {price}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.rating}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff7b00" stroke="#ff7b00">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>{rating}</span>
            </div>
          </div>

          <p className={styles.location}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location}
          </p>

          <div className={styles.specs}>
            <div className={styles.specItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M5 21V7l8-4 7 4v14M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
              </svg>
              <span>{beds}</span>
            </div>
            <div className={styles.specItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M9 4v16" />
              </svg>
              <span>{baths}</span>
            </div>
            <div className={styles.specItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                <path d="M7 2v20M17 2v20M2 7h20M2 17h20" />
              </svg>
              <span>{sqft}</span>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.agents} onClick={(e) => e.preventDefault()}>
              <div className={styles.avatar}>
                <Image src="/images/team-1.png" alt="agent" fill />
              </div>
              <div className={`${styles.avatar} ${styles.overlapping}`}>
                <div className={styles.moreCount}>+2</div>
              </div>
            </div>
            <button className={styles.viewBtn}>View Details</button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
