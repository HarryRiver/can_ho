import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <span className={styles.heroTag}>Nền tảng thuê căn hộ cao cấp</span>
        <h1 className={styles.title}>
          Tìm căn hộ lý tưởng – <br />
          Nhanh chóng & An toàn
        </h1>
        <p className={styles.subtitle}>
          Hơn 10,000+ căn hộ đã được xác minh. Tìm kiếm ngôi nhà mới của bạn chỉ với vài bước đơn giản.
        </p>

        <div className={styles.searchBox}>
          <div className={styles.filterGroup}>
            <svg
              className={styles.filterIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div className={styles.filterContent}>
              <span className={styles.label}>Khu vực</span>
              <span className={styles.value}>Khu vực, quận huyện...</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          <div className={styles.filterGroup}>
            <svg
              className={styles.filterIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 1v22" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <div className={styles.filterContent}>
              <span className={styles.label}>Mức giá</span>
              <span className={styles.value}>Giá thuê (Tất cả)</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          <div className={styles.filterGroup}>
            <svg
              className={styles.filterIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <div className={styles.filterContent}>
              <span className={styles.label}>Loại hình</span>
              <span className={styles.value}>Loại hình căn hộ</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          <button className={styles.searchBtn}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Tìm kiếm
          </button>
        </div>
      </div>
    </section>
  );
}
