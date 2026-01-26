'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const LOCATIONS = [
  'Quận 1, TP.HCM',
  'Quận 2, TP. Thủ Đức',
  'Quận 3, TP.HCM',
  'Quận 4, TP.HCM',
  'Quận 7, TP.HCM',
  'Quận Bình Thạnh, TP.HCM',
  'Quận Ba Đình, Hà Nội',
  'Quận Hoàn Kiếm, Hà Nội',
  'Quận Tây Hồ, Hà Nội',
  'Quận Cầu Giấy, Hà Nội',
  'Quận Đống Đa, Hà Nội',
  'Quận Hai Bà Trưng, Hà Nội',
  'Quận Thanh Xuân, Hà Nội',
  'Quận Nam Từ Liêm, Hà Nội',
  'Quận Hải Châu, Đà Nẵng',
  'Quận Sơn Trà, Đà Nẵng',
  'Quận Ngũ Hành Sơn, Đà Nẵng',
  'Quận Thanh Khê, Đà Nẵng',
];

const PRICES = [
  'Dưới 10 triệu',
  '10 - 20 triệu',
  '20 - 35 triệu',
  '35 - 50 triệu',
  'Trên 50 triệu',
];

const PROPERTY_TYPES = [
  'Căn hộ chung cư',
  'Căn hộ Studio',
  'Penthouse',
  'Duplex',
  'Officetel',
];

export default function Hero() {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState({
    location: '',
    price: '',
    type: ''
  });

  const toggleDropdown = (key: string) => {
    setActiveDropdown(prev => prev === key ? null : key);
  };

  const handleSelect = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setActiveDropdown(null);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.location) params.append('location', filters.location);
    if (filters.price) params.append('price', filters.price);
    if (filters.type) params.append('type', filters.type);
    
    router.push(`/can-ho?${params.toString()}`);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.blobContainer}>
        <div className={styles.blob + ' ' + styles.blob1}></div>
        <div className={styles.blob + ' ' + styles.blob2}></div>
      </div>
      
      <div className="container">
        <motion.span 
          className={styles.heroTag}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nền tảng thuê căn hộ cao cấp
        </motion.span>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tìm căn hộ lý tưởng – <br />
          <span>Nhanh chóng & An toàn</span>
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hơn 10,000+ căn hộ đã được xác minh. Tìm kiếm ngôi nhà mới của bạn chỉ với vài bước đơn giản.
        </motion.p>

        <motion.div 
          className={styles.searchBox}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.01 }}
          ref={dropdownRef}
        >
          {/* Location Filter */}
          <div className={styles.filterGroup} onClick={() => toggleDropdown('location')}>
            <svg
              className={styles.filterIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div className={styles.filterContent}>
              <span className={styles.label}>Khu vực</span>
              <span className={styles.value}>{filters.location || 'Khu vực, quận huyện...'}</span>
            </div>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#ccc" 
              strokeWidth="2"
              style={{ transform: activeDropdown === 'location' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            
            <AnimatePresence>
              {activeDropdown === 'location' && (
                <motion.div 
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {LOCATIONS.map((loc) => (
                    <div 
                      key={loc}
                      className={`${styles.dropdownItem} ${filters.location === loc ? styles.active : ''}`}
                      onClick={() => handleSelect('location', loc)}
                    >
                      {loc}
                      {filters.location === loc && <span style={{ color: '#3b82f6' }}>✓</span>}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Price Filter */}
          <div className={styles.filterGroup} onClick={() => toggleDropdown('price')}>
            <svg
              className={styles.filterIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 1v22" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <div className={styles.filterContent}>
              <span className={styles.label}>Mức giá</span>
              <span className={styles.value}>{filters.price || 'Giá thuê (Tất cả)'}</span>
            </div>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#ccc" 
              strokeWidth="2"
              style={{ transform: activeDropdown === 'price' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>

            <AnimatePresence>
              {activeDropdown === 'price' && (
                <motion.div 
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {PRICES.map((price) => (
                    <div 
                      key={price}
                      className={`${styles.dropdownItem} ${filters.price === price ? styles.active : ''}`}
                      onClick={() => handleSelect('price', price)}
                    >
                      {price}
                      {filters.price === price && <span style={{ color: '#3b82f6' }}>✓</span>}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Type Filter */}
          <div className={styles.filterGroup} onClick={() => toggleDropdown('type')}>
            <svg
              className={styles.filterIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <div className={styles.filterContent}>
              <span className={styles.label}>Loại hình</span>
              <span className={styles.value}>{filters.type || 'Loại hình căn hộ'}</span>
            </div>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#ccc" 
              strokeWidth="2"
              style={{ transform: activeDropdown === 'type' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>

            <AnimatePresence>
              {activeDropdown === 'type' && (
                <motion.div 
                  className={styles.dropdownMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {PROPERTY_TYPES.map((type) => (
                    <div 
                      key={type}
                      className={`${styles.dropdownItem} ${filters.type === type ? styles.active : ''}`}
                      onClick={() => handleSelect('type', type)}
                    >
                      {type}
                      {filters.type === type && <span style={{ color: '#3b82f6' }}>✓</span>}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button 
            className={styles.searchBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSearch}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Tìm kiếm
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
