'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './AccountSettings.module.css';

type Tab = 'profile' | 'security' | 'notifications' | 'billing';

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Cài đặt tài khoản</h1>
        <p className={styles.subTitle}>Quản lý thông tin cá nhân, bảo mật và tùy chọn thông báo của bạn.</p>
      </div>

      <div className={styles.contentWrapper}>
        {/* Settings Navigation */}
        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'profile' ? styles.active : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Thông tin chung
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'security' ? styles.active : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Đăng nhập & Bảo mật
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'notifications' ? styles.active : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            Thông báo
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'billing' ? styles.active : ''}`}
            onClick={() => setActiveTab('billing')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            Thanh toán
          </button>
        </div>

        {/* Tab Content */}
        <div className={styles.panel}>
          
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className={styles.tabContent}>
              <div className={styles.avatarSection}>
                <div className={styles.avatarWrapper}>
                  <Image src="/images/team-1.png" alt="Avatar" width={100} height={100} className={styles.avatar} />
                  <button className={styles.changeAvatarBtn}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                  </button>
                </div>
                <div className={styles.avatarInfo}>
                  <h3>Ảnh đại diện</h3>
                  <p>Cho phép định dạng PNG, JPG hoặc GIF. Kích thước tối đa 2MB.</p>
                </div>
              </div>

              <form className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Họ và tên</label>
                  <input type="text" defaultValue="Nguyễn Văn A" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input type="email" defaultValue="vanna.nguyen@example.com" className={styles.input} disabled />
                  <span className={styles.helperText}>Liên hệ admin để thay đổi email</span>
                </div>
                <div className={styles.formGroup}>
                  <label>Số điện thoại</label>
                  <input type="tel" defaultValue="+84 90 123 4567" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label>Địa chỉ</label>
                  <input type="text" defaultValue="Quận 2, TP. Hồ Chí Minh" className={styles.input} />
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label>Giới thiệu bản thân</label>
                  <textarea rows={4} className={styles.textarea} defaultValue="Xin chào, tôi là một người yêu thích không gian sống hiện đại và tiện nghi."></textarea>
                </div>
              </form>
              
              <div className={styles.formActions}>
                <button className={styles.cancelBtn}>Hủy bỏ</button>
                <button className={styles.saveBtn}>Lưu thay đổi</button>
              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === 'security' && (
            <div className={styles.tabContent}>
              <div className={styles.sectionHeader}>
                <h3>Đổi mật khẩu</h3>
                <p>Nên sử dụng mật khẩu mạnh bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.</p>
              </div>
              
              <form className={styles.securityForm}>
                <div className={styles.formGroup}>
                  <label>Mật khẩu hiện tại</label>
                  <input type="password" placeholder="••••••••" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label>Mật khẩu mới</label>
                  <input type="password" placeholder="Nhập mật khẩu mới" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label>Nhập lại mật khẩu mới</label>
                  <input type="password" placeholder="Nhập lại mật khẩu mới" className={styles.input} />
                </div>
                <div className={styles.formActions}>
                   <button className={styles.saveBtn}>Cập nhật mật khẩu</button>
                </div>
              </form>

              <div className={styles.divider}></div>

              <div className={styles.sectionHeader}>
                <h3>Xác thực 2 lớp (2FA)</h3>
                <p>Tăng cường bảo mật cho tài khoản của bạn bằng cách yêu cầu mã xác nhận khi đăng nhập.</p>
              </div>

              <div className={styles.twoFactorItem}>
                <div className={styles.twoFactorInfo}>
                  <div className={styles.iconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Ứng dụng xác thực</h4>
                    <p>Sử dụng Google Authenticator hoặc Authy</p>
                  </div>
                </div>
                <button 
                  className={`${styles.toggleBtn} ${is2FAEnabled ? styles.on : ''}`}
                  onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                >
                  <div className={styles.toggleHandle}></div>
                </button>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'notifications' && (
            <div className={styles.tabContent}>
               
               {/* 1. Notification Settings Card */}
               <div className={styles.cardSection}>
                 <div className={styles.cardHeader}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                   <h3>Cài đặt thông báo</h3>
                 </div>

                 <div className={styles.toggleRow}>
                   <div className={styles.toggleInfo}>
                     <h4>Thông báo qua Email</h4>
                     <p>Nhận cập nhật về các căn hộ mới và tin nhắn từ chủ nhà.</p>
                   </div>
                   <button className={`${styles.toggleBtn} ${styles.on}`}>
                     <div className={styles.toggleHandle}></div>
                   </button>
                 </div>

                 <div className={styles.toggleRow}>
                   <div className={styles.toggleInfo}>
                     <h4>Thông báo qua SMS</h4>
                     <p>Nhận mã xác thực và thông báo khẩn cấp qua số điện thoại.</p>
                   </div>
                   <button className={styles.toggleBtn}>
                     <div className={styles.toggleHandle}></div>
                   </button>
                 </div>

                 <div className={styles.toggleRow}>
                   <div className={styles.toggleInfo}>
                     <h4>Ưu đãi & Khuyến mãi</h4>
                     <p>Nhận thông tin về các chương trình giảm giá và ưu đãi đặc biệt.</p>
                   </div>
                   <button className={`${styles.toggleBtn} ${styles.on}`}>
                     <div className={styles.toggleHandle}></div>
                   </button>
                 </div>
               </div>

               {/* 2. Account Privacy Card */}
               <div className={styles.cardSection}>
                 <div className={styles.cardHeader}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                   <h3>Quyền riêng tư tài khoản</h3>
                 </div>

                 <div className={styles.privacyGrid}>
                    <div style={{fontSize: '0.75rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em'}}>HIỂN THỊ HỒ SƠ</div>
                    
                    <div className={`${styles.radioCard} ${styles.selected}`}>
                       <div className={styles.radioCircle}></div>
                       <div className={styles.radioContent}>
                          <h4>Công khai</h4>
                          <p>Mọi người đều có thể tìm thấy hồ sơ của bạn trên nền tảng.</p>
                       </div>
                    </div>

                    <div className={styles.radioCard}>
                       <div className={styles.radioCircle}></div>
                       <div className={styles.radioContent}>
                          <h4>Riêng tư</h4>
                          <p>Chỉ những chủ nhà mà bạn liên hệ mới có thể xem thông tin hồ sơ.</p>
                       </div>
                    </div>
                 </div>
               </div>

               {/* 3. Language & Currency Card */}
               <div className={styles.cardSection}>
                 <div className={styles.cardHeader}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                   <h3>Ngôn ngữ & Tiền tệ</h3>
                 </div>

                 <div className={styles.selectGrid}>
                   <div className={styles.selectGroup}>
                     <label>NGÔN NGỮ HIỂN THỊ</label>
                     <select className={styles.selectDropdown}>
                       <option>Tiếng Việt (VN)</option>
                       <option>English (US)</option>
                     </select>
                   </div>
                   <div className={styles.selectGroup}>
                     <label>TIỀN TỆ ƯU TIÊN</label>
                     <select className={styles.selectDropdown}>
                       <option>VND - Việt Nam Đồng</option>
                       <option>USD - US Dollar</option>
                     </select>
                   </div>
                 </div>
               </div>
              
              <div className={styles.bottomActions}>
                <button className={styles.textBtn}>Hủy thay đổi</button>
                <button className={styles.saveBtn}>Lưu cài đặt</button>
              </div>
            </div>
          )}

          {/* BILLING TAB */}
          {activeTab === 'billing' && (
            <div className={styles.tabContent}>
              <div className={styles.emptyState}>
                <Image src="/images/vinhomes.png" alt="Card" width={60} height={60} className={styles.emptyIcon} />
                <h3>Chưa có phương thức thanh toán</h3>
                <p>Thêm thẻ tín dụng hoặc tài khoản ngân hàng để thanh toán phí đăng tin dễ dàng hơn.</p>
                <button className={styles.saveBtn}>+ Thêm phương thức mới</button>
              </div>
            </div>
           )}

        </div>
      </div>
    </div>
  );
}
