import ApartmentGallery from '@/components/ApartmentDetail/ApartmentGallery';
import ApartmentInfo from '@/components/ApartmentDetail/ApartmentInfo';
import ContactAgentCard from '@/components/ApartmentDetail/ContactAgentCard';
import Link from 'next/link';
import { apartments } from '@/data/apartments';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export default async function ApartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const apartment = apartments.find(a => a.id === parseInt(resolvedParams.id));

  if (!apartment) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className="container">
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>Trang chủ</Link>
          <span className={styles.breadcrumbSeparator}>›</span>
          <Link href="/can-ho" className={styles.breadcrumbLink}>Căn hộ</Link>
          <span className={styles.breadcrumbSeparator}>›</span>
          <span className={styles.breadcrumbCurrent}>{apartment.title}</span>
        </nav>

        <ApartmentGallery mainImage={apartment.image} />

        <div className={styles.contentGrid}>
          <ApartmentInfo apartment={apartment} />
          <ContactAgentCard />
        </div>
      </div>
    </main>
  );
}
