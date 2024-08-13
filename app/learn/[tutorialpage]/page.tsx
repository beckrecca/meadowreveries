import Container from '@/app/ui/container';
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
      <h2>Tutorial Page Header: {tutorial.name}</h2>
    </Container>
  )
}