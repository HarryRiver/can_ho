'use client';

import styles from './Step3Description.module.css';

interface Step3Props {
  formData: any;
  onChange: (e: any) => void;
}

export default function Step3Description({ formData, onChange }: Step3Props) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Detailed Description</h2>

      <div className={styles.editorContainer}>
        <div className={styles.toolbar}>
          <div className={styles.tools}>
            <button className={styles.toolBtn}><b>B</b></button>
            <button className={styles.toolBtn}><i>I</i></button>
            <button className={styles.toolBtn}><u>U</u></button>
            <div className={styles.divider}></div>
            <button className={styles.toolBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </button>
            <button className={styles.toolBtn}>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
            </button>
            <button className={styles.toolBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </button>
          </div>
          <button className={styles.helpBtn}>?</button>
        </div>
        <textarea 
          className={styles.textarea}
          name="description"
          value={formData.description}
          onChange={onChange}
          placeholder="Highlight the key selling points of the property: the architecture, the lifestyle, recent renovations, and any special features that make it unique..."
          rows={8}
        ></textarea>
      </div>
      <p className={styles.helperText}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        Recommended length: 200-500 words for better SEO ranking.
      </p>

      <div className={styles.featuresSection}>
        <h3 className={styles.subTitle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          Property Features
        </h3>
        
        <div className={styles.grid3}>
          <div className={styles.formGroup}>
            <label>Furniture Status</label>
            <div className={styles.selectWrapper}>
              <select name="furniture" defaultValue="Fully furnished">
                <option value="Fully furnished">Fully furnished</option>
                <option value="Partially furnished">Partially furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label>View</label>
            <div className={styles.selectWrapper}>
              <select name="view" defaultValue="City Skyline">
                <option value="City Skyline">City Skyline</option>
                <option value="River View">River View</option>
                <option value="Park View">Park View</option>
                <option value="Garden View">Garden View</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label>Direction</label>
            <div className={styles.selectWrapper}>
              <select name="direction" defaultValue="North">
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East">East</option>
                <option value="West">West</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.locationSection}>
        <h3 className={styles.subTitle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
          Nearby Locations
        </h3>

        <div className={styles.locationRow}>
          <div className={styles.formGroup} style={{ flex: 1.5 }}>
            <label>PLACE TYPE</label>
            <div className={styles.selectWrapper}>
              <select defaultValue="International School">
                <option>International School</option>
                <option>Shopping Mall</option>
                <option>Hospital</option>
                <option>Metro Station</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formGroup} style={{ flex: 2 }}>
            <label>NAME OF PLACE</label>
            <input type="text" placeholder="e.g. St. James Academy" className={styles.input} />
          </div>
          
          <div className={styles.formGroup} style={{ flex: 0.8 }}>
            <label>DISTANCE</label>
            <div className={styles.inputWithSuffix}>
              <input type="text" placeholder="1.2" />
              <span>km</span>
            </div>
          </div>

          <button className={styles.deleteBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>

        <button className={styles.addLocationBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Another Location
        </button>
      </div>
    </div>
  );
}
