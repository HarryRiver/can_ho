'use client';

import { PostListingFormData, FormChangeEvent } from '@/types/postListing';
import styles from './Step4Amenities.module.css';

interface Step4Props {
  formData: PostListingFormData;
  onChange: (e: FormChangeEvent) => void;
  onToggleAmenity: (amenity: string) => void;
}

const buildingFeatures = [
  'Infinity Pool', 'Modern Gym', '24/7 Security', 
  'Concierge', 'Rooftop Lounge', 'Underground Parking'
];

const apartmentFeatures = [
  'Smart Home', 'High Ceilings', 'Walk-in Closet',
  'Wine Cellar', 'Private Balcony', 'Pet Friendly'
];

export default function Step4Amenities({ formData, onChange, onToggleAmenity }: Step4Props) {
  const isSelected = (amenity: string) => formData.amenities?.includes(amenity);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>
        <div className={styles.checkedIcon}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        Building & Apartment Amenities
      </h2>

      <div className={styles.groupSection}>
        <h3 className={styles.subTitle}>BUILDING FEATURES</h3>
        <div className={styles.grid2}>
          {buildingFeatures.map(feature => (
            <div 
              key={feature} 
              className={`${styles.featureCard} ${isSelected(feature) ? styles.active : ''}`}
              onClick={() => onToggleAmenity(feature)}
            >
              <div className={`${styles.checkbox} ${isSelected(feature) ? styles.checked : ''}`}>
                {isSelected(feature) && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                )}
              </div>
              <span className={styles.featureLabel}>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.groupSection}>
        <h3 className={styles.subTitle}>APARTMENT FEATURES</h3>
        <div className={styles.grid2}>
          {apartmentFeatures.map(feature => (
            <div 
              key={feature} 
              className={`${styles.featureCard} ${isSelected(feature) ? styles.active : ''}`}
              onClick={() => onToggleAmenity(feature)}
            >
              <div className={`${styles.checkbox} ${isSelected(feature) ? styles.checked : ''}`}>
                {isSelected(feature) && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                )}
              </div>
              <span className={styles.featureLabel}>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className={styles.sectionTitleWithIcon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2">
          <path d="M23 18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <path d="M10 14h4"/><path d="M12 12v4"/>
        </svg>
        Rental Policies
      </h2>

      <div className={styles.policiesRow}>
        <div className={styles.formGroup} style={{ flex: 1 }}>
          <label>Minimum Lease Term</label>
          <div className={styles.selectWrapper}>
            <select name="leaseTerm" value={formData.leaseTerm} onChange={onChange}>
              <option value="6 Months">6 Months</option>
              <option value="12 Months">12 Months</option>
              <option value="24 Months">24 Months</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup} style={{ flex: 1 }}>
          <label>Security Deposit</label>
          <div className={styles.inputWithIcon}>
            <div className={styles.prefix}>$</div>
            <input 
              type="text" 
              name="deposit" 
              value={formData.deposit} 
              onChange={onChange}
              placeholder="7000" 
            />
          </div>
        </div>
      </div>

      <div className={styles.ruleSection}>
        <label className={styles.label}>House Rules</label>
        <div className={styles.ruleRow}>
          <div className={styles.ruleCard}>
            <div className={styles.ruleContent}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M20 12v6"/><path d="M4 12v6"/><path d="M2 22h20"/><path d="M12 2v6"/><path d="M12 12a4 4 0 0 1 0-8"/></svg>
              <span>No Smoking</span>
            </div>
            <div className={`${styles.circleCheck} ${styles.checked}`}>
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
          <div className={styles.ruleCard}>
             <div className={styles.ruleContent}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.963-1.454 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.963-1.454-2.344-2.5"/><path d="M12 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
              <span>Pets Allowed</span>
            </div>
            <div className={`${styles.circleCheck} ${styles.checked}`}>
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
