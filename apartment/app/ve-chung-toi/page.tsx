import AboutHero from '@/components/AboutHero/AboutHero';
import AboutStats from '@/components/AboutStats/AboutStats';
import MissionVision from '@/components/MissionVision/MissionVision';
import CoreValues from '@/components/CoreValues/CoreValues';
import TeamSection from '@/components/TeamSection/TeamSection';
import AboutCTA from '@/components/AboutCTA/AboutCTA';

export const metadata = {
  title: 'Về chúng tôi | Apartment Rental',
  description: 'Tìm hiểu về sứ mệnh, tầm nhìn và giá trị cốt lõi của Apartment Rental - đơn vị cung cấp giải pháp căn hộ hàng hiệu hàng đầu Việt Nam.',
};

export default function AboutUs() {
  return (
    <main>
      <AboutHero />
      <AboutStats />
      <MissionVision />
      <CoreValues />
      <TeamSection />
      <AboutCTA />
    </main>
  );
}
