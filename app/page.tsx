import StaticHomeBanner from '@/app/ui/home/statichomebanner';
import Subscribeform from '@/app/ui/subscribeform';
import AwayMessage from '@/app/ui/home/awaymessage';

export default function Home() {
  return (
    <div>
      <main className="pb-4">
        <AwayMessage />
        <StaticHomeBanner 
          image='/homepage_milkweed_meadows.png' 
          alt='Banner image showing a mowed path in tall meadow grasses with pink milkweed flowers in full bloom.' 
          />
        <Subscribeform />
      </main>
    </div>
  );
}
