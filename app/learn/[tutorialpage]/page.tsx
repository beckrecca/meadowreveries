import Container from '@/app/ui/container';
import Image from 'next/image';
import ExternalLink from '@/app/ui/externallink'
import {notFound} from 'next/navigation';
import { fetchTutorials,
         fetchTutorialStepsByTutorialId,
         fetchKitFibersByProductId,
 } from '@/app/lib/data';

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
  const fibers = await fetchKitFibersByProductId(tutorial.productid);

  return (
    <Container>
      <div>
        <h2 className="text-center">{ (tutorial.type == "product") ? 
          "Felting Kit Tutorial: " 
          : "Basic Tutorial: " }
          {tutorial.name}</h2>
        <Image
          src={"/tutorials/"+tutorial.image}
          alt={"Decorative screen capture of " + tutorial.name + " tutorial video."}
          height={100}
          width={100}
          className="rounded"
          />
        {(tutorial.type == "product") ? 
          <h3>Kit Contents</h3>
          : <h3>What's Needed</h3> }
        <ul>
          <li key="base">Base: {tutorial.base} {(tutorial.type == "basic") ? "(Check your kit's instructions!)" : "" }</li>
          <li key="felting-needle">Felting needle</li>
          <li key="felting-mat">Felting mat</li>
        </ul>
        <ul>
          {fibers.map((fiber) => {
            return (
                <li key={fiber.id} className="capitalize">{fiber.fiber}
                  <Image
                    src={"/tutorials/fibers/"+fiber.image}
                    alt={fiber.alt}
                    height={100}
                    width={100}
                    className="rounded"
                    />
                </li>
              );
          })}
        </ul>
      </div>
      <div>
        {steps.map((step) => {
          return (
            <div key={step.id}>
              <h3 className="text-center">Step {step.stepenum}: {step.stepheader}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="whitespace-pre-line max-w-prose">
                  <ExternalLink url={tutorial.youtube + "&t=" + step.startseconds} text="Youtube" />
                  <p>{step.steptext}</p>
                </div>
                <div>
                  <Image
                    src={"/tutorials/"+step.image}
                    alt={step.alt}
                    height={351}
                    width={396}
                    className="rounded"
                    />
                </div>
              </div>
            </div>
            );
        })}
      </div>
    </Container>
  )
}