import StepButton from '@/app/ui/learn/tutorialcomponent/steps/stepbutton';

export default function TutorialNav( {handlePrev, handleNext, stepenum, length} ) {
	return (
		<div className="flex items-center justify-between my-2">
			{(stepenum == 1) ? 
				<button disabled></button>
			: 
				<button 
					className="p-4 font-bold text-seed hover:text-fern"
					onClick={handlePrev}
				>
					Previous Step
				</button>
			}
			<div className="font-bold">
				{stepenum}/{length}
			</div>
			{(stepenum == length) ?
				<button disabled className="p-3 font-bold bg-milkweed rounded">
					You finished!
				</button>
			:
				<StepButton onClickFunction={handleNext} text="Next Step" />
			}
		</div>
	);
}