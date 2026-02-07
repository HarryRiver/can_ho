'use client';

import { PostListingFormData, FormChangeEvent } from '@/types/postListing';
import styles from './Step1BasicInfo.module.css';

interface Step1Props {
  formData: PostListingFormData;
  onChange: (e: FormChangeEvent) => void;
}

export default function Step1BasicInfo({ formData, onChange }: Step1Props) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Property Basics</h2>

      <div className={styles.formGroup}>
        <label>Listing Title</label>
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={onChange}
          placeholder="e.g. Minimalist Loft in Downtown Arts District" 
          className={styles.input}
        />
        <p className={styles.helper}>Clear titles receive 20% more clicks.</p>
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label>Monthly Rent</label>
          <div className={styles.inputWithIcon}>
            <div className={styles.prefix}>$</div>
            <input 
              type="text" 
              name="rent" 
              value={formData.rent} 
              onChange={onChange}
              placeholder="3,500" 
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Total Area</label>
          <div className={styles.inputWithIcon}>
            <input 
              type="text" 
              name="area" 
              value={formData.area} 
              onChange={onChange}
              placeholder="120" 
            />
            <div className={styles.suffix}>m²</div>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label>Property Type</label>
          <div className={styles.selectWrapper}>
            <select name="type" value={formData.type} onChange={onChange}>
              <option value="Penthouse">Penthouse</option>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedrooms">2 Bedrooms</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Address / Location</label>
          <div className={styles.inputWithIcon}>
            <div className={styles.iconPrefix}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={onChange}
              placeholder="123 Skyline Ave, New York" 
            />
          </div>
        </div>
      </div>

      <div className={styles.mediaUpload}>
        <h3 className={styles.subTitle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          Media Upload
        </h3>
        
        <div className={styles.uploadArea}>
          <div className={styles.uploadIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </div>
          <p className={styles.uploadText}>Drag and drop high-res images here</p>
          <p className={styles.uploadSubText}>Supports JPG, PNG up to 10MB each</p>
          <button className={styles.browseBtn}>Browse Files</button>
        </div>
      </div>

      <div className={styles.descriptionSection}>
        <h3 className={styles.subTitle}>Property Description</h3>
        <div className={styles.toolbar}>
          <button className={styles.toolBtn}><b>B</b></button>
          <button className={styles.toolBtn}><i>I</i></button>
          <button className={styles.toolBtn}>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          </button>
          <button className={styles.toolBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </button>
        </div>
        <textarea 
          className={styles.textarea}
          name="description"
          placeholder="Describe the lifestyle, the views, and the unique architecture..."
          rows={6}
          value={formData.description}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
}
