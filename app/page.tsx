import StaticHomeBanner from '@/app/ui/home/statichomebanner';
import Subscribeform from '@/app/ui/subscribeform';
import DiyPreview from '@/app/ui/home/diypreview';
import CustomPreview from '@/app/ui/home/custompreview';
import SpringPreview from '@/app/ui/home/springpreview';
import PetPreview from '@/app/ui/home/petpreview';
import EventPreview from '@/app/ui/home/eventpreview';

export default function Home() {
  return (
    <div>
      <main className="pb-4">
        <StaticHomeBanner 
          image='/homepage_dreaming_of_spring-min.png' 
          alt='Banner image displaying a needle-felted Eastern cottontail rabbit nestled in the grass, clovers and azure bluet flowers. Text reads Dreaming of Spring.' 
          />
        <SpringPreview />
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
