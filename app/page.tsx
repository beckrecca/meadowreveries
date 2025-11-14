import StaticHomeBanner from '@/app/ui/home/statichomebanner';
import Subscribeform from '@/app/ui/subscribeform';
import HolidayPreview from '@/app/ui/home/holidaypreview';

export default function Home() {
  return (
    <div>
      <main className="pb-4">
        <StaticHomeBanner 
          image='/homepage_holiday-1800x600.png' 
          alt='Banner image of little borb ornaments hanging on a tree with the text Borbaments are BACK' 
          />
        <HolidayPreview />
        <Subscribeform />
      </main>
    </div>
  );
}
