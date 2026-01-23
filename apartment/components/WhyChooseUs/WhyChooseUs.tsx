'use client';

import { motion } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Tin đăng xác thực',
    desc: 'Mọi thông tin và hình ảnh đều được đội ngũ kiểm duyệt thủ công.',
    color: '#eff6ff',
    textColor: '#1a73e8',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Giao dịch an toàn',
    desc: 'Quy trình pháp lý minh bạch, bảo vệ quyền lợi cả người thuê và chủ nhà.',
    color: '#ebf8ff',
    textColor: '#0056b3',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Hỗ trợ 24/7',
    desc: 'Đội ngũ chuyên viên luôn sẵn sàng giải đáp mọi thắc mắc của bạn.',
    color: '#fff0f0',
    textColor: '#d32f2f',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    title: 'Hình ảnh thực tế',
    desc: 'Sử dụng công nghệ chụp ảnh kiến trúc chuyên nghiệp và 3D Tour.',
    color: '#f0fdf4',
    textColor: '#15803d',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Tại sao chọn chúng tôi?</h2>
          <p className={styles.subtitle}>
            Chúng tôi mang đến trải nghiệm tìm kiếm và thuê căn hộ chuyên nghiệp nhất.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                borderColor: 'rgba(59, 130, 246, 0.2)'
              }}
            >
              <div 
                className={styles.iconWrapper} 
                style={{ backgroundColor: feature.color, color: feature.textColor }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

