import Container from '@/app/ui/container';
import KitContents from '@/app/ui/learn/tutorialcomponent/kitcontents';
import TutorialHeader from '@/app/ui/learn/tutorialcomponent/tutorialheader';
import TutorialSteps from '@/app/ui/learn/tutorialcomponent/tutorialsteps';
import {notFound} from 'next/navigation';
import { fetchTutorials,
         fetchTutorialStepsByTutorialId,
       } 
       from '@/app/lib/data';
import type { Metadata } from 'next';

export async function generateMetadata({params: {tutorialpage}}: { params: { tutorialpage: string } }) {
  const tutorials = await fetchTutorials();
  const tutorial = tutorials.find(t => t.alias.toString() === tutorialpage)
  let tutorialTitle = "Tutorial | Meadow Reveries";
  if (tutorial !== undefined && tutorial !== null) {
    tutorialTitle = "Tutorial: " + tutorial.name + " | Meadow Reveries";
  }
  return {
    title: tutorialTitle,
  }
}

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
  const steps = await fetchTutorialStepsByTutorialId(tutorial.id);

  return (
    <Container>
      <div>
        <TutorialHeader tutorial={tutorial} />
        {(tutorial.base != "" && tutorial.base != null) ? <KitContents tutorial={tutorial} /> : "" }
      </div>
      <TutorialSteps
        steps={steps}
        youtube={tutorial.youtube}
        video={tutorial.video_id}
        name={tutorial.name}
        length={steps.length}
        base={tutorial.base}
      />
    </Container>
  )
}