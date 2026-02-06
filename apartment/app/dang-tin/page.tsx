'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Stepper from '@/components/PostListing/Stepper';
import LivePreview from '@/components/PostListing/LivePreview';
import Step1BasicInfo from '@/components/PostListing/Step1BasicInfo';
import Step2Media from '@/components/PostListing/Step2Media';
import Step3Description from '@/components/PostListing/Step3Description';
import Step4Amenities from '@/components/PostListing/Step4Amenities';
import styles from './page.module.css';

export default function PostListingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    rent: '',
    area: '',
    type: 'Penthouse',
    address: '',
    beds: 2,
    baths: 2,
    description: '',
    amenities: [] as string[],
    leaseTerm: '12 Months',
    deposit: '',
    rules: [] as string[]
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToggleAmenity = (amenity: string) => {
    setFormData(prev => {
      const amenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities };
    });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Tin đăng đã được gửi thành công! Quản trị viên sẽ duyệt sớm.');
        router.push('/'); 
      } else {
        toast.error('Gửi tin thất bại. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error submitting listing:', error);
      toast.error('Đã xảy ra lỗi. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
             <h1 className={styles.title}>
               Đăng Tin Cho Thuê Căn Hộ Mới
             </h1>
             <p className={styles.subtitle}>
               {currentStep === 1 
                 ? "Tạo một tin đăng nổi bật để thu hút khách thuê cao cấp." 
                 : currentStep === 2
                 ? "Nâng cao tin đăng của bạn với hình ảnh chuyên nghiệp và video quay cảnh quan."
                 : currentStep === 3
                 ? "Mô tả các đặc điểm độc đáo và vị trí bất động sản của bạn."
                 : "Hoàn tất chi tiết tin đăng và thiết lập các quy định cơ bản."}
             </p>
          </div>

          <Stepper currentStep={currentStep} />

          <div className={styles.contentGrid}>
            <div className={styles.formContainer}>
              {currentStep === 1 && <Step1BasicInfo formData={formData} onChange={handleChange} />}
              {currentStep === 2 && <Step2Media />}
              {currentStep === 3 && <Step3Description formData={formData} onChange={handleChange} />}
              {currentStep === 4 && <Step4Amenities formData={formData} onChange={handleChange} onToggleAmenity={handleToggleAmenity} />}
            </div>
            
            <div className={styles.previewContainer}>
              <LivePreview data={formData} />
            </div>
          </div>

          <div className={styles.actions}>
            <button 
              onClick={prevStep}
              disabled={isSubmitting || currentStep === 1}
              className={styles.prevButton}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
              Quay lại
            </button>

            <button 
              onClick={currentStep === 4 ? handleSubmit : nextStep}
              disabled={isSubmitting}
              className={`${styles.nextButton} ${isSubmitting ? styles.nextButtonLoading : ''}`}
            >
              {isSubmitting ? 'Đang gửi...' : (currentStep === 4 ? 'Gửi để xét duyệt' : 'Tiếp theo')}
              {!isSubmitting && currentStep < 4 && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              )}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
