import Image from 'next/image';
import Link from 'next/link';
import styles from './ApartmentCard.module.css';

interface ApartmentProps {
  id: number;
  image: string;
  tag: string;
  tagType: 'premium' | 'new' | 'hot';
  title: string;
  price: string;
  address: string;
  area: string;
  bedrooms: number;
  wc: number;
}

export default function ApartmentCard({
  id,
  image,
  tag,
  tagType,
  title,
  price,
  address,
  area,
  bedrooms,
  wc,
}: ApartmentProps) {
  const getTagClass = () => {
    switch (tagType) {
      case 'premium':
        return styles.tagPremium;
      case 'new':
        return styles.tagNew;
      case 'hot':
        return styles.tagHot;
      default:
        return '';
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill className={styles.image} />
        <span className={`${styles.tag} ${getTagClass()}`}>{tag}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.price}>{price}</span>
        </div>
        <p className={styles.address}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {address}
        </p>

        <div className={styles.specs}>
          <span className={styles.specItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h18v18H3z" />
            </svg>
            {area}
          </span>
          <span className={styles.specItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 22h20M9 22V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16" />
            </svg>
            {bedrooms} PN
          </span>
          <span className={styles.specItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <path d="M15 12V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6" />
            </svg>
            {wc} WC
          </span>
        </div>

        <div className={styles.footer}>
          <Link href={`/can-ho/${id}`} className={styles.button} style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}
