'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError('Email hoặc mật khẩu không chính xác');
        setIsLoading(false);
      } else {
        router.push('/');
        router.refresh(); 
      }
    } catch (err) {
       setError('Có lỗi xảy ra, vui lòng thử lại');
       setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setIsLoading(true);
    // Hardcoded credentials matching route.ts
    const res = await signIn('credentials', {
      redirect: false,
      email: 'user@example.com',
      password: '123456',
    });
    
    if (!res?.error) {
       router.push('/');
       router.refresh();
    } else {
        setError('Đăng nhập Demo thất bại (Kiểm tra route.ts)');
        setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.card}
      >
        <div className={styles.header}>
           <h1 className={styles.title}>Chào mừng trở lại</h1>
           <p className={styles.subtitle}>Đăng nhập để tiếp tục trải nghiệm</p>
        </div>

        {error && (
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className={styles.error}
            >
                {error}
            </motion.div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input 
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className={styles.input}
                   placeholder="name@company.com"
                   required
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Mật khẩu</label>
                <input 
                   type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className={styles.input}
                   placeholder="••••••••"
                   required
                />
            </div>
            
            <div className={styles.row}>
                <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>Ghi nhớ đăng nhập</span>
                </label>
                <a href="#" className={styles.forgotLink}>Quên mật khẩu?</a>
            </div>

            <button 
                type="submit"
                disabled={isLoading}
                className={styles.submitBtn}
            >
                {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
            </button>
        </form>
        
        <div className={styles.divider}>
             <span className={styles.dividerText}>hoặc</span>
        </div>

         <button
            onClick={handleDemoLogin}
            type="button"
            className={styles.demoBtn}
         >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Dùng tài khoản Demo
         </button>
             
         <div className={styles.footer}>
            Chưa có tài khoản?
            <Link href="/dang-ky" className={styles.link}>
                Đăng ký ngay
            </Link>
         </div>
      </motion.div>
    </div>
  );
}
