export default function StepHeader( {step, base} ) {
	return (
		<>
			<h2 className="text-center p-4 normal-case"> {(base != "" && base != null) ? 
		          "Step "
		          : "Tip " }
		          {step.stepenum}: {step.stepheader}
		    </h2>
		</>
	);
}