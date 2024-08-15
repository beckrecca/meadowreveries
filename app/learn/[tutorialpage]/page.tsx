import Container from '@/app/ui/container';
import KitContents from '@/app/ui/learn/kitcontents';
import TutorialHeader from '@/app/ui/learn/tutorialheader';
import TutorialSteps from '@/app/ui/learn/tutorialsteps';
import {notFound} from 'next/navigation';
import { fetchTutorials } from '@/app/lib/data';

export async function generateStaticParams() {
  const tutorials = await fetchTutorials();
  return tutorials.map((t) => ({
    tutorialpage: t.alias.toString(),
  }))
}

export default async function TutorialPage({params: {tutorialpage}}: { params: { tutorialpage: string } }) {
  const tutorials = await fetchTutorials();
  const tutorial = tutorials.find(t => t.alias.toString() === tutorialpage)
  if (!tutorial) {
    notFound()
  }

  return (
    <Container>
      <div>
        <TutorialHeader tutorial={tutorial} />
        <KitContents tutorial={tutorial} />
      </div>
      <TutorialSteps tutorial={tutorial} />
    </Container>
  )
}