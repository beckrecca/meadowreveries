import Image from 'next/image';

export default function TutorialDescription( { tutorial } ) {
	return (
		<div className="m-auto my-2">
        	<Image
           		src={"/tutorials/"+tutorial.image}
                alt={tutorial.alt}
                height={100}
                width={100}
                className="rounded float-left mr-4"
                />
            <div className="overflow-hidden max-w-prose">
            	{tutorial.description}
            </div>
            <div className="clear-both" />
        </div>
	);
}