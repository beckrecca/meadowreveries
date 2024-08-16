export default function StepButton({text, onClickFunction}) {
	return (
		<button 
      		onClick={onClickFunction} 
      		className="p-4 font-bold bg-milkweed/20 border border-milkweed rounded hover:bg-ladycardinal/20">
      		{text}
      	</button>
	);
}