import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLogo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                 <path d="M3 21h18M5 21V7l8-4 7 4v14" />
              </svg>
              Apartment<span>Rental</span>
            </Link>
            <p className={styles.brandDesc}>
              Nền tảng cho thuê căn hộ chuyên nghiệp hàng đầu Việt Nam. Chúng tôi kết nối khách hàng với những không gian sống đẳng cấp nhất.
            </p>
            <div className={styles.socials}>
              <Link href="#" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className={styles.socialIcon}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
            </div>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Khám phá</h4>
            <div className={styles.links}>
              <Link href="#" className={styles.link}>Căn hộ tại TP.HCM</Link>
              <Link href="#" className={styles.link}>Căn hộ tại Hà Nội</Link>
              <Link href="#" className={styles.link}>Dự án mới nổi</Link>
              <Link href="#" className={styles.link}>Căn hộ Penthouse</Link>
            </div>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Công ty</h4>
            <div className={styles.links}>
              <Link href="/ve-chung-toi" className={styles.link}>Về chúng tôi</Link>
              <Link href="/lien-he" className={styles.link}>Liên hệ</Link>
              <Link href="#" className={styles.link}>Quy trình làm việc</Link>
              <Link href="#" className={styles.link}>Chính sách bảo mật</Link>
              <Link href="#" className={styles.link}>Điều khoản dịch vụ</Link>
            </div>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Liên hệ</h4>
            <div className={styles.links}>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>1900 1234</span>
              </div>
              <div className={styles.contactItem}>
                 <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>support@apartment.vn</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2024 Apartment Rental. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <Link href="#" className={styles.link}>Hướng dẫn thuê</Link>
            <Link href="#" className={styles.link}>Hướng dẫn chủ nhà</Link>
            <Link href="#" className={styles.link}>Blog bất động sản</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
