import Container from '@/app/ui/container';
import KitContents from '@/app/ui/learn/kitcontents';
import TutorialHeader from '@/app/ui/learn/tutorialheader';
import TutorialSteps from '@/app/ui/learn/tutorialsteps';
import {notFound} from 'next/navigation';
import { fetchTutorials,
         fetchTutorialStepsByTutorialId,
       } 
       from '@/app/lib/data';

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
        length={steps.length}
        base={tutorial.base}
      />
    </Container>
  )
}