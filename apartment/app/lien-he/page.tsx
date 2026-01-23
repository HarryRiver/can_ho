import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ContactSection from '@/components/ContactSection/ContactSection';

export const metadata = {
  title: 'Liên hệ | Apartment Rental',
  description: 'Liên hệ với Apartment Rental để nhận tư vấn về các giải pháp căn hộ cao cấp hàng đầu Việt Nam.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
