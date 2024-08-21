export default function StepButton({text, onClickFunction}) {
	return (
		<button 
      		onClick={onClickFunction} 
      		className="p-3 rounded text-black bg-milkweed hover:text-black hover:bg-ladycardinal font-bold">
      		{text}
      	</button>
	);
}