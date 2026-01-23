'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Liên hệ với chúng tôi
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn tìm kiếm không gian sống hoàn hảo. <br />
            Hãy gửi thông tin cho chúng tôi, đội ngũ chuyên viên sẽ phản hồi bạn trong vòng 24h.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {/* Contact Form */}
          <motion.div 
            className={styles.formCard}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Họ và tên</label>
                  <input type="text" id="name" placeholder="Nguyễn Văn A" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Số điện thoại</label>
                  <input type="text" id="phone" placeholder="0901 234 567" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="example@email.com" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Lời nhắn</label>
                <textarea id="message" rows={5} placeholder="Bạn cần chúng tôi hỗ trợ gì?"></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Gửi yêu cầu
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className={styles.infoColumn}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Văn phòng chính</h3>
                <p>123 Đường Lê Lợi, Bến Thành, Quận 1, TP. Hồ Chí Minh</p>
              </div>
            </div>

            <div className={styles.mapWrapper}>
              <Image 
                src="/images/map.png" 
                alt="Office Map" 
                fill 
                className={styles.mapImage}
              />
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Hotline hỗ trợ</h3>
                <p>1900 1234 (24/7)</p>
                <p>028 7300 1234</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Email liên hệ</h3>
                <p>support@apartmentrental.vn</p>
                <p>sales@apartmentrental.vn</p>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
              <div className={styles.socials}>
                <a href="#" className={styles.socialBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className={styles.socialBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className={styles.socialBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
