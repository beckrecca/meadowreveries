import Image from 'next/image';
import FiberContents from '@/app/ui/learn/tutorialcomponent/contents/fibercontents';
import TutorialDescription from '@/app/ui/learn/tutorialcomponent/contents/tutorialdescription';
import KitList from '@/app/ui/learn/tutorialcomponent/contents/kitlist';
import { fetchKitFibersByProductId } from '@/app/lib/data';

export default async function KitContents({tutorial}) {
	const fibers = await fetchKitFibersByProductId(tutorial.productid);

	return (
		<div className="bg-paper p-4 mb-6 rounded">
			<h3 className="text-center normal-case"> {(tutorial.type == "product") ? 
	          "Kit Contents"
	          : "What's Needed" }
	        </h3>
	        <TutorialDescription tutorial={tutorial} />
			<div className="grid grid-cols-1 sm:grid-cols-2 mb-[48px] pr-4">
				<KitList tutorial={tutorial} />
		        <div>
			        {(tutorial.type == "product") ? <h4 className="font-bold text-center mb-2">Fibers</h4> : "" }
			        <FiberContents fibers={fibers} />
		        </div>
	        </div>
        </div>
	);
}