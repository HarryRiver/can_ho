'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import styles from './UserProfile.module.css';

const MENU_ITEMS = [
  { icon: '👤', label: 'Hồ sơ cá nhân', href: '/tai-khoan' },
  { icon: '❤️', label: 'Căn hộ đã lưu', href: '/tai-khoan/saved' },
  { icon: '🕒', label: 'Lịch sử giao dịch', href: '/tai-khoan/history' },
  { icon: '📝', label: 'Tin đăng của tôi', href: '/tai-khoan/listings' },
  { icon: '⚙️', label: 'Cài đặt', href: '/tai-khoan/settings' },
];

export default function ProfileSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className={styles.sidebar}>
      {/* Mini Profile */}
      <div className={styles.miniProfile}>
        <img 
          src={session?.user?.image || "/images/team-1.png"} 
          alt="Avatar" 
          className={styles.miniAvatar}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=User&background=random';
          }}
        />
        <div className={styles.miniInfo}>
          <h3>{session?.user?.name || "Khách"}</h3>
          <div className={styles.verifiedBadge}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            XÁC MINH
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className={styles.navMenu}>
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <button 
        className={styles.logoutBtn}
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        Đăng xuất
      </button>

      {/* Support Box */}
      <div className={styles.supportBox}>
        <div className={styles.supportTitle}>HỖ TRỢ KHÁCH HÀNG</div>
        <p className={styles.supportText}>
          Bạn cần trợ giúp về hồ sơ hoặc hợp đồng thuê?
        </p>
        <Link href="/lien-he" className={styles.supportLink}>
          Liên hệ ngay
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
