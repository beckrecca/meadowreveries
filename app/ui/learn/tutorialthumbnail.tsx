import Image from 'next/image';
import Link from 'next/link';

export default function TutorialThumbnail({tutorial}) {
	return (
		<div className="mx-auto max-w-[448px] p-2 my-2 border border-milkweed rounded shadow" key={tutorial.id}>
			<div className="my-auto">
			 	<Image
				  src={"/tutorials/"+tutorial.image}
				  alt={"Decorative screen capture of " + tutorial.name + " tutorial video."}
				  height={100}
				  width={100}
				  className="rounded float-left mr-4 my-auto"
				  />
				<div className="overflow-hidden">
					<Link href={"/learn/" + tutorial.alias}><h4>{tutorial.name}</h4></Link>
				 	<p className="max-w-prose">
				 		{tutorial.description}
				 	</p>
			 	</div>
			 	<div className="clear-both" />
		 	</div>
		 </div>
	);
}