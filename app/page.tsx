import Image from 'next/image';
import HomeBanner from '@/app/ui/home/homebanner';
import Subscribeform from '@/app/ui/subscribeform';
import WinterPreview from '@/app/ui/home/winterpreview';
import CustomPreview from '@/app/ui/home/custompreview';

export default function Home() {
  return (
    <div>
      <main className="pb-4">
        <div className='bg-goldenrod p-4 m-auto text-center'>
          <strong>Holiday shipping notice:</strong> USPS recommends shipping by December 18, 2024 for delivery before Christmas Day. <br/><span className='text-sm'>Orders placed after December 16 are not guaranteed to arrive in time for the holiday.</span>
        </div>
        <HomeBanner />
        <WinterPreview />
        <CustomPreview />
        <Subscribeform />
      </main>
    </div>
  );
}
