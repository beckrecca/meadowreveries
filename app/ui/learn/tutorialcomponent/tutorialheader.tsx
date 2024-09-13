'use client';

import Image from 'next/image';
import Link from 'next/link';
import TutorialDescription from '@/app/ui/learn/tutorialcomponent/contents/tutorialdescription';
import ExternalLink from '@/app/ui/externallink';
import { useState } from 'react';

export default function TutorialHeader({tutorial}) {
	const [beginnerDisplay, setBeginnerDisplay] = useState(false);

	function handleToggle() {
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
		    <div className="bg-paper p-4 rounded max-w-fit mx-auto mb-6">
		        <TutorialDescription tutorial={tutorial} />
		        <strong>Note</strong>: Tutorial videos are sped up and edited for easy watching. Take your time and enjoy!
		    </div>
			<div>
				 <div className="m-auto text-center">
				 	<button
				 		className="p-3 font-bold bg-milkweed/20 border border-milkweed rounded hover:bg-ladycardinal/20"
				 		onClick={handleToggle}
				 	>Just getting started?</button>
				 	{ beginnerDisplay ?
				 		<div className="border border-milkweed p-4 mx-auto my-2 rounded shadow max-w-fit">
 					 		<p>Check out these tutorials for beginners!</p>
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