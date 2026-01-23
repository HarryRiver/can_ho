'use client';

import Image from 'next/image';
import styles from './ApartmentGallery.module.css';

interface ApartmentGalleryProps {
  mainImage: string;
}

export default function ApartmentGallery({ mainImage }: ApartmentGalleryProps) {
  const images = [
    mainImage,
    '/images/bedroom-1.png',
    '/images/bathroom-1.png',
    '/images/about-hero.png',
    '/images/vinhomes.png',
  ];

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <Image src={images[0]} alt="Main view" fill className={styles.image} priority />
      </div>
      <div className={styles.sideImages}>
        {images.slice(1, 4).map((img, i) => (
          <div key={i} className={styles.smallImage}>
            <Image src={img} alt={`View ${i + 1}`} fill className={styles.image} />
          </div>
        ))}
        <div className={styles.moreImage}>
          <Image src={images[4]} alt="More views" fill className={styles.image} />
          <div className={styles.overlay}>+12 Photos</div>
        </div>
      </div>
    </div>
  );
}
