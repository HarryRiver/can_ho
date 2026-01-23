'use client';

import styles from './UserProfile.module.css';

const stats = [
  {
    label: 'Căn hộ đã thuê',
    value: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-7.5 7.5" />
        <path d="M13.5 9.5L10 13l3.5 3.5" />
        <path d="M4.5 16.5l-2.5 2.5 2.5 2.5 2.5-2.5" />
        <circle cx="9.5" cy="7.5" r="5.5" />
        <circle cx="4.5" cy="19.5" r="2.5" />
      </svg>
    ),
    color: 'blue'
  },
  {
    label: 'Căn hộ đã lưu',
    value: '15',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: 'orange'
  },
  {
    label: 'Lượt xem tin',
    value: '120',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    color: 'green'
  }
];

export default function ProfileStats() {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles[stat.color]}`}>
            {stat.icon}
          </div>
          <div className={styles.statContent}>
            <h4>{stat.label}</h4>
            <div className={styles.value}>{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
