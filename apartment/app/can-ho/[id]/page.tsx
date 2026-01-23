import ApartmentGallery from '@/components/ApartmentDetail/ApartmentGallery';
import ApartmentInfo from '@/components/ApartmentDetail/ApartmentInfo';
import ContactAgentCard from '@/components/ApartmentDetail/ContactAgentCard';
import Link from 'next/link';
import { apartments } from '@/data/apartments';
import { notFound } from 'next/navigation';

export default async function ApartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const apartment = apartments.find(a => a.id === parseInt(resolvedParams.id));

  if (!apartment) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '100px 0' }}>
      <div className="container">
        {/* Breadcrumbs */}
        <nav style={{ marginBottom: '30px', fontSize: '0.9rem', color: '#64748b' }}>
          <Link href="/" style={{ color: 'inherit' }}>Home</Link>
          <span style={{ margin: '0 10px' }}>›</span>
          <Link href="/can-ho">Apartments</Link>
          <span style={{ margin: '0 10px' }}>›</span>
          <span style={{ color: '#0f172a', fontWeight: 'bold' }}>{apartment.title}</span>
        </nav>

        <ApartmentGallery mainImage={apartment.image} />

        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '50px' }}>
          <ApartmentInfo apartment={apartment} />
          <ContactAgentCard />
        </div>
      </div>
    </main>
  );
}
