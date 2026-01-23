'use client';

import Image from 'next/image';
import styles from './Step2Media.module.css';

export default function Step2Media() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Property Photos</h2>
      <span className={styles.counter}>5 / 12 photos used</span>

      <div className={styles.mainPhotoSection}>
        <h3 className={styles.label}>MAIN PHOTO (COVER)</h3>
        <div className={styles.coverImageWrapper}>
          <Image 
            src="/images/bedroom-1.png" 
            alt="Main Cover" 
            fill 
            className={styles.coverImage} 
          />
          <span className={styles.coverBadge}>CURRENT COVER</span>
        </div>
      </div>

      <div className={styles.gallerySection}>
        <h3 className={styles.label}>GALLERY PHOTOS</h3>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItem}>
            <Image src="/images/gallery-1.png" alt="Gallery 1" fill className={styles.galleryImage} />
            <div className={styles.imageNumber}>1</div>
          </div>
          <div className={styles.galleryItem}>
            <Image src="/images/gallery-3.png" alt="Gallery 2" fill className={styles.galleryImage} />
          </div>
          <div className={styles.galleryItem}>
            <Image src="/images/gallery-2.png" alt="Gallery 3" fill className={styles.galleryImage} />
          </div>
          <div className={styles.galleryItem}>
            <Image src="/images/gallery-4.png" alt="Gallery 4" fill className={styles.galleryImage} />
          </div>
          
          <button className={styles.addPhotoBtn}>
            <div className={styles.addIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <span>ADD PHOTO</span>
          </button>
        </div>
      </div>

      <div className={styles.videoSection}>
        <h3 className={styles.subTitle}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff7b00" stroke="none">
             <path d="M23 7l-7 5 7 5V7z"/>
             <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
          </svg>
          Virtual Tour & Video
        </h3>
        
        <div className={styles.formGroup}>
          <label>YouTube or Matterport Link</label>
          <div className={styles.inputWithIcon}>
            <div className={styles.iconPrefix}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="https://www.youtube.com/watch?v=... or https://my.matterport.com/show/..." 
            />
          </div>
          <p className={styles.helper}>3D tours increase engagement by over 300%.</p>
        </div>
      </div>
    </div>
  );
}
