import StaticHomeBanner from '@/app/ui/home/statichomebanner';
import Subscribeform from '@/app/ui/subscribeform';
// import DiyPreview from '@/app/ui/home/diypreview';
// import CustomPreview from '@/app/ui/home/custompreview';
// import SalePreview from '@/app/ui/home/salepreview';
// import PetPreview from '@/app/ui/home/petpreview';
// import EventPreview from '@/app/ui/home/eventpreview';

export default function Home() {
  return (
    <div>
      <main className="pb-4">
        <StaticHomeBanner 
          image='/homepage_milkweed_meadows.png' 
          alt='Banner image showing a mowed path in tall meadow grasses with pink milkweed flowers in full bloom.' 
          />
        <div className="my-1">
          <div className="mx-auto p-4">
            <h2 className="text-center normal-case m-2">Summer Hiatus</h2>
            <p className="text-center">Check back Fall 2025 or subscribe below for shop updates.</p>
          </div>
        </div>
        <Subscribeform />
      </main>
    </div>
  );
}
