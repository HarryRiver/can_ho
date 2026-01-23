'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Stepper from '@/components/PostListing/Stepper';
import LivePreview from '@/components/PostListing/LivePreview';
import Step1BasicInfo from '@/components/PostListing/Step1BasicInfo';
import Step2Media from '@/components/PostListing/Step2Media';
import Step3Description from '@/components/PostListing/Step3Description';
import Step4Amenities from '@/components/PostListing/Step4Amenities';

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

  const handleChange = (e: any) => {
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
        alert('Listing submitted successfully! An admin will review it shortly.');
        router.push('/'); // Redirect to home or a success page
      } else {
        alert('Failed to submit listing. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting listing:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '100px 0 60px' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
             <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
               Post New Apartment Listing
             </h1>
             <p style={{ color: '#64748b' }}>
               {currentStep === 1 
                 ? "Create a standout listing to attract high-end tenants." 
                 : currentStep === 2
                 ? "Enhance your listing with professional photography and video tours."
                 : currentStep === 3
                 ? "Describe your property's unique features and location."
                 : "Finalize your listing details and set the ground rules."}
             </p>
          </div>

          <Stepper currentStep={currentStep} />

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '50px', alignItems: 'start' }}>
            <div style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #f1f5f9' }}>
              {currentStep === 1 && <Step1BasicInfo formData={formData} onChange={handleChange} />}
              {currentStep === 2 && <Step2Media />}
              {currentStep === 3 && <Step3Description formData={formData} onChange={handleChange} />}
              {currentStep === 4 && <Step4Amenities formData={formData} onChange={handleChange} onToggleAmenity={handleToggleAmenity} />}
            </div>
            
            <div style={{ position: 'sticky', top: '100px' }}>
              <LivePreview data={formData} />
            </div>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
            <button 
              onClick={prevStep}
              disabled={isSubmitting}
              style={{ 
              padding: '16px 30px', 
              background: 'transparent', 
              border: 'none', 
              color: currentStep === 1 ? '#cbd5e1' : '#64748b', 
              fontWeight: 700,
              fontSize: '1rem',
              cursor: currentStep === 1 || isSubmitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
              Previous
            </button>

            <button 
              onClick={currentStep === 4 ? handleSubmit : nextStep}
              disabled={isSubmitting}
              style={{ 
              padding: '16px 40px', 
              background: isSubmitting ? '#94a3b8' : '#1e3a8a', 
              color: 'white', 
              border: 'none', 
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              boxShadow: '0 10px 20px rgba(30, 58, 138, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              {isSubmitting ? 'Submitting...' : (currentStep === 4 ? 'Submit for Review' : 'Next Step')}
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
