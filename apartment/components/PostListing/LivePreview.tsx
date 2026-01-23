'use client';

import Image from 'next/image';
import styles from './LivePreview.module.css';

interface LivePreviewProps {
  data: {
    title: string;
    rent: string;
    area: string;
    type: string;
    address: string;
    beds?: number;
    baths?: number;
    amenities?: string[];
    leaseTerm?: string;
    deposit?: string;
  };
}

export default function LivePreview({ data }: LivePreviewProps) {
  const showFinancials = !!data.deposit;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>LISTING SUMMARY</span>
        <span className={styles.status}>● Live Preview</span>
      </div>

      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <div className={styles.badge}>VERIFIED PROPERTY</div>
          <Image 
            src="/images/bedroom-1.png" 
            alt="Preview" 
            fill 
            className={styles.image} 
          />
          <div className={styles.priceTag}>
            ${data.rent || '0'}<span>/mo</span>
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>
            {data.title || 'Listing Title'}
          </h3>
          <p className={styles.address}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {data.address || 'Address'}
          </p>

          {data.amenities && data.amenities.length > 0 ? (
            <div className={styles.tagsRow}>
              {data.amenities.slice(0, 3).map(tag => (
                <span key={tag} className={styles.tag}>{tag.toUpperCase()}</span>
              ))}
              {data.amenities.length > 3 && (
                <span className={styles.tag}>+{data.amenities.length - 3} MORE</span>
              )}
            </div>
          ) : (
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>AREA</span>
                <span className={styles.statValue}>{data.area || '0'}m²</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statLabel}>BEDS</span>
                <span className={styles.statValue}>{data.beds || 2}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statLabel}>BATH</span>
                <span className={styles.statValue}>{data.baths || 2}</span>
              </div>
            </div>
          )}

          {showFinancials && (
            <div className={styles.financialRow}>
              <div>
                <span className={styles.finLabel}>Deposit:</span>
                <span className={styles.finValue}>${data.deposit}</span>
              </div>
              <div>
                <span className={styles.finLabel}>Term:</span>
                <span className={styles.finValue}>{data.leaseTerm}</span>
              </div>
            </div>
          )}
          
          {!showFinancials && <button className={styles.contactBtn}>Contact Agent</button>}
        </div>
      </div>

      {!showFinancials && (
        <div className={styles.mapPreview}>
          <Image src="/images/map.png" alt="Map" fill className={styles.mapImage} />
        </div>
      )}

      {showFinancials ? (
         <div className={styles.tipBox} style={{ background: '#f1f5f9' }}>
           <div className={styles.tipIcon} style={{ color: '#1e3a8a', background: '#dbeafe' }}>i</div>
           <div>
             <h4 className={styles.tipTitle} style={{ color: '#1e3a8a' }}>Visibility Boost</h4>
             <p className={styles.tipText}>Highlighting 'Pet Friendly' and '24/7 Security' increases listing visibility by 15% in premium searches.</p>
           </div>
         </div>
      ) : (
        <div className={styles.tipBox}>
          <div className={styles.tipIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div>
            <h4 className={styles.tipTitle}>Pro Tip</h4>
            <p className={styles.tipText}>
              Listings with more than 8 high-resolution photos receive significantly more inquiries from serious buyers.
            </p>
          </div>
        </div>
      )}

      {showFinancials && (
        <button className={styles.previewBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Preview Public Page
        </button>
      )}
    </div>
  );
}
