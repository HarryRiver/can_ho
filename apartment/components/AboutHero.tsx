'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className={styles.tag}>Giải pháp căn hộ tiêu chuẩn</span>
            <h1 className={styles.title}>
              Nâng tầm trải nghiệm <br />
              <span>Không gian sống</span>
            </h1>
            <p className={styles.desc}>
              Tại Apartment Rental, chúng tôi không chỉ kết nối bạn với một căn hộ, 
              mà còn là hành trình tìm kiếm một nơi thực sự gọi là "Nhà". Với sự tận tâm 
              và công nghệ tiên tiến, chúng tôi định nghĩa lại tiêu chuẩn thuê bất động sản 
              cao cấp tại Việt Nam.
            </p>
            
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.checkIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Uy tín hàng đầu</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.checkIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Quy trình nhanh gọn</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/about-hero.png" 
                alt="About us hero" 
                fill 
                className={styles.image}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
