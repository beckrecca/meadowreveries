import Image from 'next/image';
import HomeBanner from '@/app/ui/home/homebanner';
import Subscribeform from '@/app/ui/subscribeform';
import HandmadePreview from '@/app/ui/home/handmadepreview';
import CustomPreview from '@/app/ui/home/custompreview';

export default function Home() {
  return (
    // <div className="bg-[url('bg-main.png')] sm:bg-left-bottom md:bg-center lg:bg-top bg-cover bg-no-repeat min-h-screen p-6">
    <div>
      <main className="pb-4">
        <HomeBanner />
        <HandmadePreview />
        <CustomPreview />
        <Subscribeform/>
      </main>
    </div>
  );
}
