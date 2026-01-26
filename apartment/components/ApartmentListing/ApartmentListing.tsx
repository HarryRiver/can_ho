'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, useState, useEffect } from 'react';
import { apartments } from '@/data/apartments';
import FilterSidebar from './FilterSidebar';
import ModernApartmentCard from './ModernApartmentCard';
import styles from './ApartmentListing.module.css';

const ITEMS_PER_PAGE = 6;

export default function ApartmentListing() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const locationParam = searchParams.get('location');
  const priceParam = searchParams.get('price');
  const typeParam = searchParams.get('type');

  const minPriceParam = searchParams.get('minPrice');
  const maxPriceParam = searchParams.get('maxPrice');
  const typesParam = searchParams.get('types'); // comma separated
  const amenitiesParam = searchParams.get('amenities'); // comma separated

  const filteredApartments = useMemo(() => {
    return apartments.filter((apt) => {
      // Filter by location
      if (locationParam && !apt.location.toLowerCase().includes(locationParam.toLowerCase())) {
        return false;
      }

      // Filter by strict type (from Hero)
      if (typeParam && apt.type !== typeParam) {
        return false;
      }

      // Filter by multiple types (from Sidebar)
      if (typesParam) {
        const selectedTypes = typesParam.split(',');
        const matchesType = selectedTypes.some(t => {
          if (t === 'Studio') return apt.beds.includes('Studio') || apt.type?.includes('Studio');
          if (t === '1 Phòng ngủ') return apt.beds.includes('1');
          if (t === '2 Phòng ngủ') return apt.beds.includes('2');
          if (t === 'Penthouse') return apt.type === 'Penthouse';
          return apt.type === t;
        });
        if (!matchesType) return false;
      }

      // Filter by amenities
      if (amenitiesParam) {
        const selectedAmenities = amenitiesParam.split(',');
        const hasAllAmenities = selectedAmenities.every(selected => 
          apt.amenities?.some(existing => existing.toLowerCase().includes(selected.toLowerCase()))
        );
        if (!hasAllAmenities) return false;
      }

      // Filter by price
      const priceValue = parseInt(apt.price.replace(/[^\d]/g, ''));
      
      if (minPriceParam && priceValue < parseInt(minPriceParam)) return false;
      if (maxPriceParam && priceValue > parseInt(maxPriceParam)) return false;

      if (priceParam) {
        switch (priceParam) {
          case 'Dưới 10 triệu':
            return priceValue < 10;
          case '10 - 20 triệu':
            return priceValue >= 10 && priceValue <= 20;
          case '20 - 35 triệu':
            return priceValue >= 20 && priceValue <= 35;
          case '35 - 50 triệu':
            return priceValue >= 35 && priceValue <= 50;
          case 'Trên 50 triệu':
            return priceValue > 50;
          default:
            return true;
        }
      }

      return true;
    });
  }, [locationParam, priceParam, typeParam, minPriceParam, maxPriceParam, typesParam, amenitiesParam]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredApartments]);

  const totalPages = Math.ceil(filteredApartments.length / ITEMS_PER_PAGE);
  const paginatedApartments = filteredApartments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.flexLayout}>
          <FilterSidebar />
          
          <main className={styles.mainContent}>
            <header className={styles.listingHeader}>
              <div className={styles.headerInfo}>
                <span className={styles.availableLabel}>CĂN HỘ HIỆN CÓ</span>
                <h1 className={styles.countTitle}>
                  {filteredApartments.length > 0 
                    ? `${filteredApartments.length} Kết quả tìm thấy` 
                    : 'Không tìm thấy kết quả'}
                </h1>
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
                    <option>Mới nhất</option>
                    <option>Giá: Thấp đến Cao</option>
                    <option>Giá: Cao đến Thấp</option>
                  </select>
                </div>
              </div>
            </header>

            {paginatedApartments.length > 0 ? (
              <div className={styles.grid}>
                {paginatedApartments.map((apt) => (
                  <ModernApartmentCard key={apt.id} {...apt} />
                ))}
              </div>
            ) : (
              <div style={{ padding: '40px', textAlign: 'center', color: '#666', background: '#f8f9fa', borderRadius: '12px' }}>
                <h3>Không tìm thấy căn hộ phù hợp</h3>
                <p>Vui lòng thử lại với các tiêu chí tìm kiếm khác.</p>
              </div>
            )}

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button 
                  className={styles.pageArrow} 
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'default' : 'pointer' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                
                {Array.from({ length: Math.min(6, totalPages) }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`${styles.pageNum} ${currentPage === page ? styles.active : ''}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
                
                {totalPages > 6 && <span className={styles.pageDots}>...</span>}
                
                <button 
                  className={styles.pageArrow}
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  style={{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'default' : 'pointer' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
