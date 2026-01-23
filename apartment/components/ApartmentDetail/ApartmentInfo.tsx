'use client';

import { Apartment } from '@/data/apartments';
import styles from './ApartmentInfo.module.css';

interface ApartmentInfoProps {
  apartment: Apartment;
}

export default function ApartmentInfo({ apartment }: ApartmentInfoProps) {
  const specs = apartment.specs || {
    area: apartment.sqft,
    rooms: apartment.beds,
    baths: apartment.baths,
    furniture: 'N/A'
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleContent}>
          <h1 className={styles.title}>{apartment.title}</h1>
          <p className={styles.location}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {apartment.location}
          </p>
        </div>
        <div className={styles.priceBox}>
          <span className={styles.price}>{apartment.price}</span>
          <span className={styles.period}>/month</span>
        </div>
      </div>

      <div className={styles.specsGrid}>
        <div className={styles.specCard}>
          <div className={styles.specIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path d="M7 2v20M17 2v20M2 7h20M2 17h20" />
            </svg>
          </div>
          <div className={styles.specInfo}>
            <span>AREA</span>
            <p>{specs.area}</p>
          </div>
        </div>

        <div className={styles.specCard}>
          <div className={styles.specIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21h18M5 21V7l8-4 7 4v14" />
            </svg>
          </div>
          <div className={styles.specInfo}>
            <span>BEDROOMS</span>
            <p>{specs.rooms}</p>
          </div>
        </div>

        <div className={styles.specCard}>
          <div className={styles.specIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            </svg>
          </div>
          <div className={styles.specInfo}>
            <span>BATHROOMS</span>
            <p>{specs.baths}</p>
          </div>
        </div>

        <div className={styles.specCard}>
          <div className={styles.specIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className={styles.specInfo}>
            <span>FURNITURE</span>
            <p>{specs.furniture}</p>
          </div>
        </div>
      </div>

      <div className={styles.descriptionSection}>
        <h2 className={styles.sectionTitle}>About this property</h2>
        <p className={styles.description}>
          {apartment.description || 'No description available for this property.'}
        </p>
      </div>

      <div className={styles.amenitiesSection}>
        <h2 className={styles.sectionTitle}>Building Amenities</h2>
        <div className={styles.amenitiesGrid}>
          {(apartment.amenities || ['24/7 Security', 'Private Parking']).map((item) => (
            <div key={item} className={styles.amenityItem}>
              <div className={styles.checkCircle}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
