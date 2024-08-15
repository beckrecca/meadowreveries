import Image from 'next/image';
import { fetchTutorialStepsByTutorialId } from '@/app/lib/data';
import ExternalLink from '@/app/ui/externallink';

export default async function TutorialSteps({tutorial}) {
	const steps = await fetchTutorialStepsByTutorialId(tutorial.id);

	return (
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
	);
}