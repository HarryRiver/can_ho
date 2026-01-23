'use client';

import { useState } from 'react';
import styles from './FilterSidebar.module.css';

export default function FilterSidebar() {
  const [apartmentTypes, setApartmentTypes] = useState(['Studio', '1 Bedroom']);
  const [amenities, setAmenities] = useState(['Rooftop Pool']);

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

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>Filters</h2>
        <button className={styles.resetBtn}>RESET ALL</button>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>PRICE RANGE (MONTHLY)</h3>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderTrack}>
            <div className={styles.sliderThumb} style={{ left: '15%' }}></div>
            <div className={styles.sliderThumb} style={{ left: '65%' }}></div>
            <div className={styles.sliderRange} style={{ left: '15%', width: '50%' }}></div>
          </div>
          <div className={styles.rangeInputs}>
            <div className={styles.rangeBox}>
              <span>MIN</span>
              <p>$2,500</p>
            </div>
            <div className={styles.rangeBox}>
              <span>MAX</span>
              <p>$8,500</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>APARTMENT TYPE</h3>
        <div className={styles.checkboxGroup}>
          {[
            { label: 'Studio', count: 12 },
            { label: '1 Bedroom', count: 45 },
            { label: '2 Bedrooms', count: 31 },
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
        <h3 className={styles.sectionTitle}>AMENITIES</h3>
        <div className={styles.tagGroup}>
          {[
            'Rooftop Pool', 'Gym', 'Parking', 'Pet Friendly', 'Balcony', 'Concierge'
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

      <button className={styles.updateBtn}>Update Search</button>
    </aside>
  );
}
