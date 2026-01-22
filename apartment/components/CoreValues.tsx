'use client';

import { motion } from 'framer-motion';
import styles from './CoreValues.module.css';

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Minh bạch & Trung thực',
    desc: 'Mọi thông tin về giá cả, pháp lý và hiện trạng căn hộ đều được công khai rõ ràng, bảo vệ tối đa lợi ích của khách hàng.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
    title: 'Đổi mới sáng tạo',
    desc: 'Chúng tôi không ngừng áp dụng công nghệ VR 360, AI trong tìm kiếm để mang đến trải nghiệm xem nhà tiện lợi nhất.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Khách hàng là trọng tâm',
    desc: 'Sự hài lòng của khách hàng là thước đo thành công duy nhất. Chúng tôi đồng hành cùng bạn từ khi tìm kiếm cho đến khi nhận nhà.',
  },
];

export default function CoreValues() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Giá trị cốt lõi</h2>
          <div className={styles.line}></div>
          <p className={styles.subtitle}>
            Nền tảng của mọi hoạt động tại Apartment Rental dựa trên những giá trị bền vững.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {value.icon}
              </div>
              <h3 className={styles.cardTitle}>{value.title}</h3>
              <p className={styles.cardDesc}>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
