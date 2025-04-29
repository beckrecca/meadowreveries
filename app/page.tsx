import StaticHomeBanner from '@/app/ui/home/statichomebanner';
import Subscribeform from '@/app/ui/subscribeform';
import DiyPreview from '@/app/ui/home/diypreview';
import CustomPreview from '@/app/ui/home/custompreview';
import SalePreview from '@/app/ui/home/salepreview';
import PetPreview from '@/app/ui/home/petpreview';
import EventPreview from '@/app/ui/home/eventpreview';

export default function Home() {
  return (
    <div>
      <main className="pb-4">
        <StaticHomeBanner 
          image='/homepage_milkweed_meadows.png' 
          alt='Banner image showing a mowed path in tall meadow grasses with pink milkweed flowers in full bloom.' 
          />
        <SalePreview />
        <PetPreview />
        <DiyPreview />
        <CustomPreview />
        <StaticHomeBanner 
          image='/homepage_events_banner.png' 
          alt="The Brattleboro Holiday Market on Main in December 2024. Shoppers browse various vendors in the Sam's Outdoor Outfitters space. Text reads Upcoming Events." 
          />
        <EventPreview />
        <Subscribeform />
      </main>
    </div>
  );
}
