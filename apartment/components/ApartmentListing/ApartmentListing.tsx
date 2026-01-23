'use client';

import { apartments } from '@/data/apartments';
import FilterSidebar from './FilterSidebar';
import ModernApartmentCard from './ModernApartmentCard';
import styles from './ApartmentListing.module.css';

export default function ApartmentListing() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.flexLayout}>
          <FilterSidebar />
          
          <main className={styles.mainContent}>
            <header className={styles.listingHeader}>
              <div className={styles.headerInfo}>
                <span className={styles.availableLabel}>AVAILABLE UNITS</span>
                <h1 className={styles.countTitle}>124 Premium Results</h1>
              </div>
              
              <div className={styles.headerActions}>
                <div className={styles.viewToggle}>
                  <button className={`${styles.toggleBtn} ${styles.active}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button className={styles.toggleBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  </button>
                </div>
                
                <div className={styles.sortSelect}>
                  <select>
                    <option>Newest Listings</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </header>

            <div className={styles.grid}>
              {apartments.map((apt) => (
                <ModernApartmentCard key={apt.id} {...apt} />
              ))}
            </div>

            <div className={styles.pagination}>
              <button className={styles.pageArrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className={`${styles.pageNum} ${styles.active}`}>1</button>
              <button className={styles.pageNum}>2</button>
              <button className={styles.pageNum}>3</button>
              <span className={styles.pageDots}>...</span>
              <button className={styles.pageNum}>12</button>
              <button className={styles.pageArrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
