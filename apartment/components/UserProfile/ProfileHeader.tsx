'use client';

import { useState } from 'react';
import styles from './UserProfile.module.css';
import EditProfileModal from '../EditProfileModal/EditProfileModal';

export default function ProfileHeader() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <div className={`${styles.card} ${styles.headerCard}`}>
        <div className={styles.headerLeft}>
          <div className={styles.bigAvatarWrapper}>
            <img 
              src="/images/team-1.png" 
              alt="User Avatar" 
              className={styles.bigAvatar}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=random';
              }}
            />
            <div className={styles.cameraIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
          </div>
          
          <div className={styles.headerInfo}>
            <h1>
              Nguyễn Văn A
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563EB" stroke="none">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </h1>
            <div className={styles.joinDate}>Thành viên từ tháng 10, 2023</div>
            <div className={styles.badges}>
              <div className={styles.statusBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email đã xác minh
              </div>
              <div className={styles.statusBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                CCCD đã xác minh
              </div>
            </div>
          </div>
        </div>

        <button className={styles.editBtn} onClick={() => setIsEditModalOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Chỉnh sửa hồ sơ
        </button>
      </div>

      <EditProfileModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
    </>
  );
}
