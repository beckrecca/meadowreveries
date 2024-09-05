import Image from 'next/image';

export default function StepImage ( {image, alt} ) {
	return (
		<>
			<Image
		        src={"/tutorials/"+image}
		        alt={alt}
		        height={351}
		        width={396}
		        className="rounded border border-seed/30"
		    />
	    </>
	);
}