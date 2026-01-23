'use client';

import Image from 'next/image';
import styles from './ContactAgentCard.module.css';

export default function ContactAgentCard() {
  return (
    <div className={styles.stickyWrapper}>
      <div className={styles.card}>
        <div className={styles.agentInfo}>
          <div className={styles.avatar}>
            <Image src="/images/team-1.png" alt="Agent" fill />
          </div>
          <div>
            <h3 className={styles.agentName}>Alex Peterson</h3>
            <span className={styles.verified}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#2563eb">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              VERIFIED AGENT
            </span>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>FULL NAME</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className={styles.formGroup}>
            <label>PHONE NUMBER</label>
            <input type="text" placeholder="+84 000 000 000" />
          </div>
          <div className={styles.formGroup}>
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className={styles.formGroup}>
            <label>MESSAGE</label>
            <textarea rows={4} defaultValue="I am Interested in this property..."></textarea>
          </div>

          <button type="submit" className={styles.sendBtn}>Send Inquiry</button>
          <button type="button" className={styles.callBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </button>
        </form>
      </div>

      <div className={styles.guarantee}>
        <div className={styles.guaranteeIcon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div>
          <h4 className={styles.guaranteeTitle}>Protected by Premium Guarantee</h4>
          <p className={styles.guaranteeText}>We ensure all documents are verified before transaction.</p>
        </div>
      </div>
    </div>
  );
}
