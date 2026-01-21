import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logoIcon}
          >
            <path
              d="M3 21H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 21V7L12 3L19 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 10H15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 14H15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.logoText}>
            Apartment<span className={styles.logoHighlight}>Rental</span>
          </span>
        </Link>

        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={styles.navLink}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.navLink}>
                Căn hộ
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.navLink}>
                Dự án
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.navLink}>
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.navLink}>
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button className={styles.loginBtn}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            Đăng tin
          </button>
          <button className={styles.userBtn} aria-label="User Profile">
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
