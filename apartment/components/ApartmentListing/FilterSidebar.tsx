'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './FilterSidebar.module.css';

const MAX_PRICE_LIMIT = 100; // 100 Million

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE_LIMIT);
  const [apartmentTypes, setApartmentTypes] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeThumb, setActiveThumb] = useState<'min' | 'max' | null>(null);

  // Initialize from URL
  useEffect(() => {
    const min = searchParams.get('minPrice');
    const max = searchParams.get('maxPrice');
    const types = searchParams.get('types');
    const amens = searchParams.get('amenities');

    if (min) setMinPrice(parseInt(min));
    if (max) setMaxPrice(parseInt(max));
    if (types) setApartmentTypes(types.split(','));
    if (amens) setAmenities(amens.split(','));
  }, [searchParams]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!activeThumb || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const rawValue = Math.round(percent * MAX_PRICE_LIMIT);
      
      const clampedValue = Math.max(0, Math.min(MAX_PRICE_LIMIT, rawValue));

      if (activeThumb === 'min') {
        const newValue = Math.min(clampedValue, maxPrice);
        setMinPrice(newValue);
      } else {
        const newValue = Math.max(clampedValue, minPrice);
        setMaxPrice(newValue);
      }
    };

    const handleMouseUp = () => {
      setActiveThumb(null);
    };

    if (activeThumb) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeThumb, minPrice, maxPrice]);

  const toggleType = (type: string) => {
    if (apartmentTypes.includes(type)) {
      setApartmentTypes(apartmentTypes.filter(t => t !== type));
    } else {
      setApartmentTypes([...apartmentTypes, type]);
    }
  };

  const toggleAmenity = (amenity: string) => {
    if (amenities.includes(amenity)) {
      setAmenities(amenities.filter(a => a !== amenity));
    } else {
      setAmenities([...amenities, amenity]);
    }
  };

  const handleUpdateSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (minPrice > 0) params.set('minPrice', minPrice.toString());
    else params.delete('minPrice');

    if (maxPrice < MAX_PRICE_LIMIT) params.set('maxPrice', maxPrice.toString());
    else params.delete('maxPrice');

    if (apartmentTypes.length > 0) params.set('types', apartmentTypes.join(','));
    else params.delete('types');

    if (amenities.length > 0) params.set('amenities', amenities.join(','));
    else params.delete('amenities');

    router.push(`/can-ho?${params.toString()}`);
  };

  const handleReset = () => {
    setMinPrice(0);
    setMaxPrice(MAX_PRICE_LIMIT);
    setApartmentTypes([]);
    setAmenities([]);
    router.push('/can-ho');
  };

  // Calculate percentage for slider visualization
  const minPercent = (minPrice / MAX_PRICE_LIMIT) * 100;
  const maxPercent = (maxPrice / MAX_PRICE_LIMIT) * 100;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>Bộ lọc</h2>
        <button className={styles.resetBtn} onClick={handleReset}>ĐẶT LẠI</button>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>KHOẢNG GIÁ (TRIỆU/THÁNG)</h3>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderTrack} ref={sliderRef}>
            <div 
              className={styles.sliderThumb} 
              style={{ left: `${minPercent}%` }}
              onMouseDown={() => setActiveThumb('min')}
            ></div>
            <div 
              className={styles.sliderThumb} 
              style={{ left: `${maxPercent}%` }}
              onMouseDown={() => setActiveThumb('max')}
            ></div>
            <div 
              className={styles.sliderRange} 
              style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
            ></div>
          </div>
          <div className={styles.rangeInputs}>
            <div className={styles.rangeBox}>
              <span>TỐI THIỂU</span>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input 
                  type="number" 
                  value={minPrice} 
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  style={{ width: '40px', border: 'none', background: 'transparent', fontWeight: 700, textAlign: 'right' }} 
                />
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: '0 0 4px 2px' }}>tr</span>
              </div>
            </div>
            <div className={styles.rangeBox}>
              <span>TỐI ĐA</span>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input 
                  type="number" 
                  value={maxPrice} 
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  style={{ width: '40px', border: 'none', background: 'transparent', fontWeight: 700, textAlign: 'right' }} 
                />
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: '0 0 4px 2px' }}>tr</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>LOẠI CĂN HỘ</h3>
        <div className={styles.checkboxGroup}>
          {[
            { label: 'Studio', count: 12 },
            { label: '1 Phòng ngủ', count: 45 },
            { label: '2 Phòng ngủ', count: 31 },
            { label: 'Penthouse', count: 8 },
          ].map((item) => (
            <label key={item.label} className={styles.checkboxLabel}>
              <div className={styles.checkboxWrapper}>
                <input 
                  type="checkbox" 
                  checked={apartmentTypes.includes(item.label)}
                  onChange={() => toggleType(item.label)}
                />
                <span className={styles.checkmark}></span>
                {item.label}
              </div>
              <span className={styles.count}>{item.count}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>TIỆN ÍCH</h3>
        <div className={styles.tagGroup}>
          {[
            'Hồ bơi', 'Gym', 'Chỗ đậu xe', 'Thú cưng', 'Ban công', 'Lễ tân'
          ].map((amenity) => (
            <button 
              key={amenity}
              className={`${styles.tagBtn} ${amenities.includes(amenity) ? styles.active : ''}`}
              onClick={() => toggleAmenity(amenity)}
            >
              {amenity}
            </button>
          ))}
        </div>
      </div>

      <button className={styles.updateBtn} onClick={handleUpdateSearch}>
        Cập nhật tìm kiếm
      </button>
    </aside>
  );
}
