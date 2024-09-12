import Image from 'next/image';
import HomeBanner from '@/app/ui/home/homebanner';
import Subscribeform from '@/app/ui/subscribeform';
import HandmadePreview from '@/app/ui/home/handmadepreview';
import DiyPreview from '@/app/ui/home/diypreview';
import CustomPreview from '@/app/ui/home/custompreview';

export default function Home() {
  return (
    <div>
      <main className="pb-4">
        <HomeBanner />
        <HandmadePreview />
        <DiyPreview />
        <CustomPreview />
        <Subscribeform />
      </main>
    </div>
  );
}
