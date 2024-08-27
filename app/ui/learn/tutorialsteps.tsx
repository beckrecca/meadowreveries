'use client';

import Image from 'next/image';
import ExternalLink from '@/app/ui/externallink';
import TutorialNav from '@/app/ui/learn/tutorialnav'
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function Steps({steps, youtube, length, base}) {
	const [currentStep, setCurrentStep] = useState(1);
	let nextStep, prevStep = 0;

	const handlePrev = (e) => {
		e.stopPropagation();
		let prevStep = currentStep - 1;
		if (prevStep <= 0) {
			setCurrentStep(1);
		}
		else {
			setCurrentStep(prevStep);
		}
	}

	const handleNext = (e) => {
		e.stopPropagation();
		let nextStep = currentStep + 1;
		if (nextStep >= length) {
			setCurrentStep(length);
		}
		else {
			setCurrentStep(nextStep);
		}
		console.log(nextStep);
		console.log(nextStep == length);
	}

	return (
		<div>
		{steps.map((step) => {
		return (
				<div key={step.stepenum} 
					className={clsx(
                                'my-2',
                                {
                                    'block': (step.stepenum == currentStep) || (step.stepenum == nextStep) || (step.stepenum == prevStep),
                                    'hidden': step.stepenum != currentStep,
                                }
                            )}
					>
				  <TutorialNav
				  	handlePrev={handlePrev}
				  	handleNext={handleNext}
				  	stepenum={step.stepenum}
				  	length={length}
				  />
				  <h2 className="text-center p-4"> {(base != "" && base != null) ? 
			          "Step "
			          : "Number " }
			          {step.stepenum}: {step.stepheader}
			      </h2>
			      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
			        <div className="whitespace-pre-line max-w-prose">
			          <ExternalLink url={youtube + "&t=" + step.startseconds} text="Youtube" />
			          <p>{step.steptext}</p>
			        </div>
			        <div className="m-auto">
			          <Image
			            src={"/tutorials/"+step.image}
			            alt={step.alt}
			            height={351}
			            width={396}
			            className="rounded"
			            />
			        </div>
			      </div>
			      <TutorialNav
				  	handlePrev={handlePrev}
				  	handleNext={handleNext}
				  	stepenum={step.stepenum}
				  	length={length}
				  />
			    </div>
			);
		})}
		</div>
	);
}