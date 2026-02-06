'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Register.module.css';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu nhập lại không khớp');
      setIsLoading(false);
      return;
    }

    try {
      // 1. Call Register API
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Đăng ký thất bại');
      }

      // 2. Auto Login after successful registration
      const loginRes = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (!loginRes?.error) {
        router.push('/');
        router.refresh();
      } else {
        // Fallback if auto-login fails, redirect to login page
        router.push('/dang-nhap');
      }

    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra, vui lòng thử lại');
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
           <h1 className={styles.title}>Tạo tài khoản mới</h1>
           <p className={styles.subtitle}>Tham gia cộng đồng ApartmentRental</p>
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
                <label className={styles.label}>Họ và tên</label>
                <input 
                   type="text"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   className={styles.input}
                   placeholder="Nguyễn Văn A"
                   required
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input 
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   className={styles.input}
                   placeholder="name@company.com"
                   required
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Mật khẩu</label>
                <input 
                   type="password"
                   name="password"
                   value={formData.password}
                   onChange={handleChange}
                   className={styles.input}
                   placeholder="••••••••"
                   required
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Nhập lại mật khẩu</label>
                <input 
                   type="password"
                   name="confirmPassword"
                   value={formData.confirmPassword}
                   onChange={handleChange}
                   className={styles.input}
                   placeholder="••••••••"
                   required
                />
            </div>
            
            <button 
                type="submit"
                disabled={isLoading}
                className={styles.submitBtn}
            >
                {isLoading ? 'Đang tạo tài khoản...' : 'Đăng ký'}
            </button>
        </form>
        
        <div className={styles.footer}>
             <p>
                Đã có tài khoản?
                <Link href="/dang-nhap" className={styles.link}>
                    Đăng nhập
                </Link>
             </p>
        </div>
      </motion.div>
    </div>
  );
}
