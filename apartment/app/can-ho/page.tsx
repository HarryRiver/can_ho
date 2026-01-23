import ApartmentListing from '@/components/ApartmentListing/ApartmentListing';

export const metadata = {
  title: 'Danh sách căn hộ | Apartment Rental',
  description: 'Khám phá danh sách căn hộ cao cấp và sang trọng tại Apartment Rental.',
};

export default function ApartmentPage() {
  return (
    <main>
      <ApartmentListing />
    </main>
  );
}
