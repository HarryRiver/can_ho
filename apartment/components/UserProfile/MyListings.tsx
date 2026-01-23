'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MyListings.module.css';

const MOCK_LISTINGS = [
  {
    id: '#LR-9012',
    title: 'Penthouse Landmark 81 - View Sông',
    image: '/images/vinhomes.png',
    location: 'Bình Thạnh, TP. Hồ Chí Minh',
    status: 'active',
    statusLabel: 'Đang hoạt động',
    views: '1,240',
    dateLabel: 'NGÀY ĐĂNG',
    date: '12/10/2023',
    price: '$4,500/tháng'
  },
  {
    id: '#LR-8821',
    title: 'Căn hộ Vinhome Grand Park 2PN',
    image: '/images/bedroom-1.png',
    location: 'Quận 9, TP. Hồ Chí Minh',
    status: 'expired',
    statusLabel: 'Đã hết hạn',
    views: '450',
    dateLabel: 'HẾT HẠN VÀO',
    date: '01/03/2024',
    price: '$600/tháng'
  },
  {
    id: '#LR-9244',
    title: 'Studio Midtown Phú Mỹ Hưng',
    image: '/images/about-hero.png',
    location: 'Quận 7, TP. Hồ Chí Minh',
    status: 'pending',
    statusLabel: 'Đang chờ duyệt',
    views: '0',
    dateLabel: 'DỰ KIẾN DUYỆT',
    date: '~ 2 giờ tới',
    price: '$1,200/tháng'
  }
];

export default function MyListings() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Quản lý tin đăng</h1>
          <p className={styles.subtitle}>Quản lý và theo dõi hiệu quả các căn hộ đang cho thuê của bạn.</p>
        </div>
        <Link href="/dang-tin" className={styles.createBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Đăng tin mới
        </Link>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>TỔNG TIN ĐĂNG</div>
          <div className={styles.statValue}>12</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>ĐANG HOẠT ĐỘNG</div>
          <div className={`${styles.statValue} ${styles.textGreen}`}>08</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>ĐANG CHỜ DUYỆT</div>
          <div className={`${styles.statValue} ${styles.textOrange}`}>02</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>HẾT HẠN</div>
          <div className={`${styles.statValue} ${styles.textRed}`}>02</div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterBar}>
        <div className={styles.dropdowns}>
          <select className={styles.select}>
            <option>Tất cả trạng thái</option>
            <option>Đang hoạt động</option>
            <option>Đang chờ duyệt</option>
            <option>Đã hết hạn</option>
          </select>
          <select className={styles.select}>
            <option>Mới nhất</option>
            <option>Cũ nhất</option>
            <option>Giá cao - thấp</option>
          </select>
        </div>
        <div className={styles.searchBox}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Tìm theo mã tin hoặc tên..." />
        </div>
      </div>

      {/* Listing Cards */}
      <div className={styles.listingsList}>
        {MOCK_LISTINGS.map((item) => (
          <div key={item.id} className={`${styles.listingCard} ${item.status === 'expired' ? styles.cardExpired : ''}`}>
            {/* Image Section */}
            <div className={styles.imageSection}>
              <Image src={item.image} alt={item.title} fill className={styles.image} />
              <div className={styles.idBadge}>ID: {item.id}</div>
              {item.status === 'expired' && <div className={styles.expiredOverlay} />}
            </div>

            {/* Content Section */}
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <span className={`${styles.statusBadge} ${styles[item.status]}`}>
                  {item.statusLabel}
                </span>
              </div>
              
              <div className={styles.location}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {item.location}
              </div>

              <div className={styles.cardStats}>
                <div className={styles.statItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <div>
                    <div className={styles.statLabelMini}>LƯỢT XEM</div>
                    <div className={styles.statValueMini}>{item.views}</div>
                  </div>
                </div>

                <div className={styles.statItem}>
                  {item.status === 'pending' ? (
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <polygon points="5 3 19 12 5 21 5 3"></polygon>
                       <line x1="5" y1="3" x2="19" y2="12"></line>
                     </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  )}
                  <div>
                    <div className={styles.statLabelMini}>{item.dateLabel}</div>
                    <div className={styles.statValueMini}>{item.date}</div>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <div>
                    <div className={styles.statLabelMini}>GIÁ THUÊ</div>
                    <div className={styles.statValueMini}>{item.price}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Section */}
            <div className={styles.cardActions}>
              {item.status === 'active' && (
                <>
                  <button className={styles.actionBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Sửa tin
                  </button>
                  <button className={`${styles.actionBtn} ${styles.btnOrange}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="21" x2="4" y2="14" />
                      <line x1="4" y1="10" x2="4" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="3" />
                      <line x1="20" y1="21" x2="20" y2="16" />
                      <line x1="20" y1="12" x2="20" y2="3" />
                    </svg>
                    Đẩy tin
                  </button>
                </>
              )}
              {item.status === 'expired' && (
                <>
                  <button className={`${styles.actionBtn} ${styles.btnBlueFilled}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 4v6h-6" />
                      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                    </svg>
                    Gia hạn ngay
                  </button>
                  <button className={styles.actionBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                    Gỡ tin
                  </button>
                </>
              )}
              {item.status === 'pending' && (
                <>
                  <button className={styles.actionBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    Xem trước
                  </button>
                  <button className={styles.actionBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Sửa tin
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Pagination */}
      <div className={styles.footer}>
        <div className={styles.pageText}>Hiển thị 3 trên 12 tin đăng</div>
        <div className={styles.pagination}>
          <button className={styles.pageBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className={`${styles.pageBtn} ${styles.pageActive}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <button className={styles.pageBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
