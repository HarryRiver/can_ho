'use client';

import styles from './UserProfile.module.css';

export default function ProfileInfo() {
  return (
    <div className={styles.card}>
      <div className={styles.sectionTitle}>
        Thông tin cá nhân
        <span className={styles.subText}>Thông tin của bạn được bảo mật theo tiêu chuẩn AES-256</span>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <label>HỌ VÀ TÊN</label>
          <div className={styles.value}>Nguyễn Văn A</div>
        </div>
        <div className={styles.infoItem}>
          <label>ĐỊA CHỈ EMAIL</label>
          <div className={styles.value}>vanna.nguyen@example.com</div>
        </div>
        <div className={styles.infoItem}>
          <label>SỐ ĐIỆN THOẠI</label>
          <div className={styles.value}>+84 90 123 4567</div>
        </div>
        <div className={styles.infoItem}>
          <label>SỐ CMND / CCCD</label>
          <div className={styles.value}>
            001092XXXXXX
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#10B981" stroke="none">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.securityBanner}>
        <div className={styles.securityLeft}>
          <div className={styles.securityIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <rect x="10" y="8" width="4" height="8" />
              <path d="M12 8v8" />
            </svg>
          </div>
          <div className={styles.securityContent}>
            <h4>Tăng cường bảo mật</h4>
            <p>Kích hoạt xác thực 2 lớp để bảo vệ tài khoản của bạn.</p>
          </div>
        </div>
        <button className={styles.securityBtn}>Thiết lập ngay</button>
      </div>
    </div>
  );
}
