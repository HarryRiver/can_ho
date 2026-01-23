import ProfileHeader from '@/components/UserProfile/ProfileHeader';
import ProfileStats from '@/components/UserProfile/ProfileStats';
import ProfileInfo from '@/components/UserProfile/ProfileInfo';

export const metadata = {
  title: 'Hồ sơ cá nhân | Luxury Rentals',
  description: 'Quản lý thông tin cá nhân và tài khoản của bạn',
};

export default function UserProfilePage() {
  return (
    <>
      <ProfileHeader />
      <ProfileStats />
      <ProfileInfo />
    </>
  );
}
