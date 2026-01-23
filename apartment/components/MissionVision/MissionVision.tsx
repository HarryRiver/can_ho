'use client';

import { motion } from 'framer-motion';
import styles from './MissionVision.module.css';

export default function MissionVision() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.iconBox}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className={styles.title}>Sứ mệnh của chúng tôi</h2>
            <p className={styles.desc}>
              Mang đến trải nghiệm tìm kiếm và thuê căn hộ tuyệt vời nhất thông qua sự minh bạch, 
              tận tâm và ứng dụng công nghệ hiện đại. Chúng tôi tin rằng mỗi người đều xứng đáng 
              có một không gian sống hoàn hảo để an tâm phát triển sự nghiệp và tận hưởng cuộc sống.
            </p>
          </motion.div>

          <motion.div 
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.iconBox}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h2 className={styles.title}>Tầm nhìn chiến lược</h2>
            <p className={styles.desc}>
              Trở thành hệ sinh thái dịch vụ lưu trú hàng đầu Việt Nam, là sự lựa chọn số 1 
              của khách hàng trong và ngoài nước khi nghĩ đến căn hộ cao cấp. Chúng tôi không ngừng 
              mở rộng mạng lưới đối tác và nâng cấp tiêu chuẩn dịch vụ mỗi ngày.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
