'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './TransactionHistory.module.css';

const TRANSACTIONS = [
  {
    id: 'TRX-9821',
    property: 'Vinhomes Central Park',
    image: '/images/vinhomes.png',
    type: 'Tiền thuê tháng 11',
    date: '24/11/2024',
    amount: '25,000,000đ',
    status: 'completed',
    statusLabel: 'Thành công'
  },
  {
    id: 'TRX-9820',
    property: 'The Landmark 81 Studio',
    image: '/images/about-hero.png',
    type: 'Đặt cọc (Deposit)',
    date: '15/10/2024',
    amount: '50,000,000đ',
    status: 'completed',
    statusLabel: 'Thành công'
  },
  {
    id: 'TRX-9819',
    property: 'Phí dịch vụ chung cư',
    image: '/images/vinhomes.png', // Generic image or specific property
    type: 'Phí quản lý Q3/2024',
    date: '05/10/2024',
    amount: '1,500,000đ',
    status: 'pending',
    statusLabel: 'Đang xử lý'
  },
  {
    id: 'TRX-9818',
    property: 'Masteri Thảo Điền',
    image: '/images/bedroom-1.png',
    type: 'Hoàn trả cọc',
    date: '01/09/2024',
    amount: '+22,000,000đ',
    status: 'refunded',
    statusLabel: 'Hoàn tiền'
  },
  {
    id: 'TRX-9817',
    property: 'Dịch vụ dọn dẹp',
    image: '/images/bathroom-1.png',
    type: 'Dọn phòng chuyên sâu',
    date: '20/08/2024',
    amount: '800,000đ',
    status: 'cancelled',
    statusLabel: 'Đã hủy'
  }
];

export default function TransactionHistory() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitles}>
          <h1 className={styles.pageTitle}>Lịch sử giao dịch</h1>
          <p className={styles.subTitle}>Quản lý các khoản thanh toán và lịch sử thuê nhà của bạn</p>
        </div>
        
        <div className={styles.filters}>
          <div className={styles.searchBox}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Tìm kiếm giao dịch..." />
          </div>
          <button className={styles.filterBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Tháng này
          </button>
        </div>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Giao dịch / Tài sản</th>
              <th>Ngày</th>
              <th>Trạng thái</th>
              <th className={styles.amountHeader}>Số tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {TRANSACTIONS.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className={styles.propertyCell}>
                    <div className={styles.imageWrapper}>
                      <Image src={item.image} alt={item.property} fill className={styles.image} />
                    </div>
                    <div className={styles.propertyInfo}>
                      <div className={styles.propertyName}>{item.property}</div>
                      <div className={styles.transactionType}>{item.type}</div>
                      <div className={styles.mobileDate}>{item.date}</div>
                    </div>
                  </div>
                </td>
                <td className={styles.dateCell}>{item.date}</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles[item.status]}`}>
                    {item.statusLabel}
                  </span>
                </td>
                <td className={styles.amountCell}>
                  {item.amount}
                </td>
                <td className={styles.actionCell}>
                  <button className={styles.detailBtn}>Chi tiết</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {/* Pagination (Simplified) */}
       <div className={styles.pagination}>
        <span className={styles.pageInfo}>Hiển thị 1-5 trong số 24 giao dịch</span>
        <div className={styles.pageActions}>
           <button className={styles.navBtn} disabled>Trước</button>
           <button className={styles.navBtn}>Tiếp</button>
        </div>
      </div>
    </div>
  );
}
