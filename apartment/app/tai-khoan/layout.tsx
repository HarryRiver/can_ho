'use client';

import ProfileSidebar from '@/components/UserProfile/ProfileSidebar';
import styles from '@/components/UserProfile/UserProfile.module.css';

export default function UserProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <ProfileSidebar />
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
}
