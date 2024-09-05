'use client';

import Image from 'next/image';
import TutorialNav from '@/app/ui/learn/tutorialcomponent/steps/tutorialnav';
import TutorialReference from '@/app/ui/learn/tutorialcomponent/steps/tutorialreference'
import TutorialVideo from '@/app/ui/learn/tutorialcomponent/steps/tutorialvideo';
import StepHeader from '@/app/ui/learn/tutorialcomponent/steps/stepheader';
import TutorialText from '@/app/ui/learn/tutorialcomponent/steps/tutorialtext';
import StepImage from '@/app/ui/learn/tutorialcomponent/steps/stepimage';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function Steps({steps, youtube, video, name, length, base}) {
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
				  <StepHeader step={step} base={base} />
			      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 bg-paper rounded">
			        <div className="whitespace-pre-line">
			          <TutorialVideo 
			          	video={video}
			          	name={name}
			          	startseconds={step.startseconds}
			          	endseconds={step.endseconds}
			          	youtube={youtube}
			          />
			          <TutorialText step={step}/>
			          <TutorialReference 
			          	alias={step.referredalias} 
			          	referraltext={step.referraltext} />
			        </div>
			        <div className="mx-auto">
			          <StepImage image={step.image} alt={step.alt} />
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