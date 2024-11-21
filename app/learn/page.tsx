import LearnBanner from '@/app/ui/learn/learnbanner';
import TutorialList from '@/app/ui/learn/tutoriallist';
import LearnText from '@/app/ui/learn/learntext';
import LearnCTA from '@/app/ui/learn/learncta';
import { fetchBasicTutorials} from '@/app/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn | Meadow Reveries',
  description: 'Learn about needle felting',
}

export default async function Page() {
  const tutorials = await fetchBasicTutorials();
  return (
    <div>
      <main>
        <h2 className="p-2 text-black font-bold normal-case text-center bg-ladycardinal/60">Learn How to Needle Felt</h2>
        <LearnBanner />
        <TutorialList tutorials={tutorials} />
        <LearnText />
        <LearnCTA />
      </main>
    </div>
  );
}
