'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function TutorialHeader({tutorial}) {
	const [beginnerDisplay, setBeginnerDisplay] = useState(false);

	function handleToggle() {
		console.log(beginnerDisplay);
		if (beginnerDisplay) {
			setBeginnerDisplay(false);
		}
		else {
			setBeginnerDisplay(true);
		}
	}

	return (
		<div className="mb-6">
			<h2 className="text-center normal-case mb-2">{ (tutorial.type == "product") ? 
			  "Felting Kit Tutorial: " 
			  : "Basic Tutorial: " }
			  {tutorial.name}</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				 <div className="col-span-1 md:col-span-2 my-auto">
				 	<Image
					  src={"/tutorials/"+tutorial.image}
					  alt={"Decorative screen capture of " + tutorial.name + " tutorial video."}
					  height={100}
					  width={100}
					  className="rounded float-left mr-4 mt-1"
					  />
					<div className="md:overflow-hidden max-w-prose">
					 	{tutorial.description}
				 	</div>
				 </div>
				 <div className="col-span-1 m-auto text-center">
				 	<button
				 		className="p-3 font-bold bg-milkweed/20 border border-milkweed rounded hover:bg-ladycardinal/20"
				 		onClick={handleToggle}
				 	>Just getting started?</button>
				 	{ beginnerDisplay ?
				 		<div className="border border-milkweed p-4 m-2 rounded">
 					 		<p>Check out these tutorials for beginners:</p>
 						 	<ul>
 						 		<li><Link href="handling-wool">How to handle felting wool</Link></li>
 						 		<li><Link href="needle">How to (safely) use a felting needle</Link></li>
 						 		<li><Link href="pad">How to use a felting surface</Link></li>
 						 	</ul>
 					 	</div>
 					 : ""}
				 </div>
			 </div>
		</div>
	);
}