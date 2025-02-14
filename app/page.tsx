import Image from 'next/image';
import HomeBanner from '@/app/ui/home/homebanner';
import Subscribeform from '@/app/ui/subscribeform';
import DiyPreview from '@/app/ui/home/diypreview';
import CustomPreview from '@/app/ui/home/custompreview';
import PetPreview from '@/app/ui/home/petpreview';

export default function Home() {
  return (
    <div>
      <main className="pb-4">
        <HomeBanner />
        <DiyPreview />
        <PetPreview />
        <CustomPreview />
        <Subscribeform />
      </main>
    </div>
  );
}
