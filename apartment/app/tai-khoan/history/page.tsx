import TransactionHistory from '@/components/UserProfile/TransactionHistory';

export const metadata = {
  title: 'Lịch sử giao dịch | Luxury Rentals',
  description: 'Xem lại lịch sử thanh toán và thuê căn hộ của bạn',
};

export default function HistoryPage() {
  return <TransactionHistory />;
}
