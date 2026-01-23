'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EditProfileModal.module.css';
import Image from 'next/image';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const [activeTab, setActiveTab] = useState('profile');
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className={styles.modal}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerTitle}>
              <button className={styles.backBtn} onClick={onClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
              </button>
              <h2>Chỉnh sửa hồ sơ</h2>
            </div>
            <p className={styles.headerSub}>Cập nhật thông tin cá nhân và ảnh đại diện của bạn.</p>
          </div>

          <div className={styles.content}>
            {/* Avatar Section */}
            <div className={styles.sectionCard}>
              <div className={styles.avatarRow}>
                <div className={styles.avatarWrapper}>
                   <Image src="/images/team-1.png" alt="Avatar" width={80} height={80} className={styles.avatar} />
                </div>
                <div className={styles.avatarActions}>
                  <h3>Ảnh đại diện</h3>
                  <div className={styles.actionButtons}>
                    <button className={styles.uploadBtn}>Tải ảnh mới</button>
                    <button className={styles.deleteBtn}>Xóa ảnh</button>
                  </div>
                  <p className={styles.note}>JPG, GIF hoặc PNG. Dung lượng tối đa 2MB.</p>
                </div>
              </div>
            </div>

            {/* Information Form */}
            <div className={styles.sectionCard}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Họ và tên</label>
                  <input type="text" defaultValue="Nguyễn Văn A" className={styles.input} />
                  <p className={styles.helper}>Tên này sẽ hiển thị trên hồ sơ và các tin đăng của bạn.</p>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.labelRow}>
                    <label>Địa chỉ Email</label>
                  </div>
                  <div className={styles.verifiedInputWrapper}>
                    <input type="email" defaultValue="vanna.nguyen@example.com" className={styles.input} />
                    <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="#10B981" stroke="none">
                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className={`${styles.helper} ${styles.green}`}>Email đã được xác minh.</p>
                </div>

                <div className={styles.formGroup}>
                  <label>Số điện thoại</label>
                  <input type="tel" defaultValue="+84 90 123 4567" className={styles.input} />
                </div>

                <div className={styles.formGroup}>
                  <label>Số CMND / CCCD</label>
                  <input type="text" defaultValue="001092XXXXXX" className={styles.input} disabled />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label>Địa chỉ thường trú</label>
                  <textarea rows={3} defaultValue="Số 123, Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh" className={styles.textarea}></textarea>
                </div>
              </div>
              
              <div className={styles.infoNote}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.infoIcon}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
                Một số thông tin đã xác minh không thể thay đổi trực tiếp.
                <div className={styles.footerActions}>
                  <button className={styles.cancelBtn} onClick={onClose}>Hủy</button>
                  <button className={styles.saveBtn}>Lưu thay đổi</button>
                </div>
              </div>
            </div>

            {/* Security Link */}
            <div className={styles.securityLink}>
              <div className={styles.securityIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className={styles.securityText}>
                <h4>Bảo mật tài khoản</h4>
                <p>Muốn thay đổi mật khẩu? Truy cập phần cài đặt bảo mật.</p>
              </div>
              <button className={styles.linkBtn}>Đi tới Cài đặt</button>
            </div>
            
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
