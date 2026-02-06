'use client';

import { motion } from 'framer-motion';
import styles from './Stepper.module.css';

interface StepperProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: 'Thông tin' },
  { id: 2, label: 'Hình ảnh' },
  { id: 3, label: 'Mô tả' },
  { id: 4, label: 'Tiện ích' },
];

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div key={step.id} className={styles.stepWrapper}>
          <div className={`${styles.step} ${currentStep === step.id ? styles.active : ''} ${currentStep > step.id ? styles.completed : ''}`}>
            <span className={styles.stepLabel}>STEP {step.id}</span>
            <span className={styles.stepTitle}>{step.label}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={styles.connector} />
          )}
          {currentStep === step.id && (
             <motion.div layoutId="activeStep" className={styles.activeBar} />
          )}
        </div>
      ))}
    </div>
  );
}
