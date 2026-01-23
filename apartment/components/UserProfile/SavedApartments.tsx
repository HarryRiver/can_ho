'use client';

import { useState } from 'react';
import SavedApartmentCard from './SavedApartmentCard';
import styles from './SavedApartments.module.css';

// Mock data based on the user's image request
const SAVED_ITEMS = [
  {
    id: 1,
    image: '/images/vinhomes.png', // Using existing images or closest match
    badge: 'SẴN SÀNG',
    badgeColor: 'blue' as const,
    title: 'Vinhomes Central Park...',
    rating: 4.9,
    location: 'Quận 1, TP. Hồ Chí Minh',
    beds: '3 PN',
    baths: '2 PT',
    sqft: '120m²',
    price: '25,000,000'
  },
  {
    id: 2,
    image: '/images/about-hero.png', 
    badge: 'PHỔ BIẾN',
    badgeColor: 'green' as const,
    title: 'The Landmark 81 Studio',
    rating: 5.0,
    location: 'Bình Thạnh, TP. Hồ Chí Minh',
    beds: '1 PN',
    baths: '1 PT',
    sqft: '45m²',
    price: '18,500,000'
  },
  {
    id: 3,
    image: '/images/team-1.png', // Placeholder
    badge: 'MỚI',
    badgeColor: 'orange' as const,
    title: 'Lake View Residences',
    rating: 4.7,
    location: 'Quận 2, TP. Hồ Chí Minh',
    beds: '2 PN',
    baths: '2 PT',
    sqft: '85m²',
    price: '21,000,000'
  },
  // Add more placeholders to fill the grid if needed for visual parity
];

export default function SavedApartments() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerTitles}>
          <h1 className={styles.pageTitle}>Căn hộ đã lưu</h1>
          <p className={styles.subTitle}>Bạn đang có 15 căn hộ trong danh sách quan tâm</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.actionBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            Lọc theo giá
          </button>
          <button className={styles.actionBtn}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            Mới nhất
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {SAVED_ITEMS.map((item) => (
          <SavedApartmentCard key={item.id} {...item} />
        ))}
        {/* Placeholder for skeleton/empty card as seen in image */}
        <div className={styles.placeholderCard}>
           <div className={styles.placeholderIconWrapper}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
           </div>
           <div className={styles.placeholderLines}>
             <div className={styles.line} style={{ width: '80%' }}></div>
             <div className={styles.line} style={{ width: '60%' }}></div>
             <div className={styles.line} style={{ width: '40%' }}></div>
             <div className={styles.line} style={{ width: '30%', marginLeft: 'auto' }}></div>
           </div>
        </div>
      </div>

       {/* Pagination */}
      <div className={styles.pagination}>
        <button className={styles.pageBtn} disabled>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <span className={styles.dots}>...</span>
        <button className={styles.pageBtn}>5</button>
        <button className={styles.pageBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
