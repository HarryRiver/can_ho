'use client';

import { motion } from 'framer-motion';
import styles from './AboutStats.module.css';

const stats = [
  { value: '10,000+', label: 'CĂN HỘ NIÊM YẾT' },
  { value: '5,000+', label: 'KHÁCH HÀNG HÀI LÒNG' },
  { value: '50+', label: 'ĐỐI TÁC CHIẾN LƯỢC' },
  { value: '24/7', label: 'HỖ TRỢ KHÁCH HÀNG' },
];

export default function AboutStats() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.value}>{stat.value}</h3>
              <p className={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
