import StepButton from '@/app/ui/learn/stepbutton';

export default function TutorialNav( {handlePrev, handleNext, stepenum, length} ) {
	return (
		<div className="flex items-center justify-between my-2">
			{(stepenum == 1) ? 
				<button disabled></button>
			: 
				<StepButton onClickFunction={handlePrev} text="Previous Step" />
			}
			{(stepenum == length) ?
				<button disabled className="p-4 font-bold bg-milkweed rounded">
					You finished!
				</button>
			:
				<StepButton onClickFunction={handleNext} text="Next Step" />
			}
		</div>
	);
}