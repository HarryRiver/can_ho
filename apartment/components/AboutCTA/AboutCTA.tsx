'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './AboutCTA.module.css';

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Sẵn sàng tìm kiếm tổ ấm mới?</h2>
            <p className={styles.desc}>
              Hãy để chúng tôi giúp bạn tìm thấy không gian sống mơ ước chỉ với vài bước đơn giản. 
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
            </p>
            <div className={styles.btns}>
              <Link href="#" className={styles.primaryBtn}>Xem danh sách căn hộ</Link>
              <Link href="#" className={styles.secondaryBtn}>Liên hệ chuyên gia</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
