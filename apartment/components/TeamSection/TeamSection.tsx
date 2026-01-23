'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TeamSection.module.css';

const team = [
  {
    name: 'Nguyễn Văn Nam',
    role: 'Founder & CEO',
    image: '/images/team-1.png',
  },
  {
    name: 'Lê Thị Mai',
    role: 'Giám đốc Vận hành',
    image: '/images/team-2.png',
  },
  {
    name: 'Trần Minh Hoàng',
    role: 'Trưởng bộ phận Công nghệ',
    image: '/images/team-1.png', // Reusing for demo
  },
  {
    name: 'Phạm Thanh Thủy',
    role: 'Giám đốc Marketing',
    image: '/images/team-2.png', // Reusing for demo
  },
];

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Đội ngũ cộng sự</h2>
          <p className={styles.subtitle}> Những chuyên gia tâm huyết luôn sẵn sàng đồng hành cùng bạn.</p>
        </motion.div>

        <div className={styles.grid}>
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
