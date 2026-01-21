import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Tại sao chọn chúng tôi?</h2>
        <p className={styles.subtitle}>
          Chúng tôi mang đến trải nghiệm tìm kiếm và thuê căn hộ chuyên nghiệp nhất.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Tin đăng xác thực</h3>
            <p className={styles.cardDesc}>
              Mọi thông tin và hình ảnh đều được đội ngũ kiểm duyệt thủ công.
            </p>
          </div>

          <div className={styles.card}>
             <div className={styles.iconWrapper} style={{ backgroundColor: '#ebf8ff', color: '#0056b3' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Giao dịch an toàn</h3>
            <p className={styles.cardDesc}>
              Quy trình pháp lý minh bạch, bảo vệ quyền lợi cả người thuê và chủ nhà.
            </p>
          </div>

          <div className={styles.card}>
             <div className={styles.iconWrapper} style={{ backgroundColor: '#fff0f0', color: '#d32f2f' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Hỗ trợ 24/7</h3>
            <p className={styles.cardDesc}>
              Đội ngũ chuyên viên luôn sẵn sàng giải đáp mọi thắc mắc của bạn.
            </p>
          </div>

          <div className={styles.card}>
             <div className={styles.iconWrapper} style={{ backgroundColor: '#f0fdf4', color: '#15803d' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Hình ảnh thực tế</h3>
            <p className={styles.cardDesc}>
              Sử dụng công nghệ chụp ảnh kiến trúc chuyên nghiệp và 3D Tour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
