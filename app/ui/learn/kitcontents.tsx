import Image from 'next/image';
import ExternalLink from '@/app/ui/externallink';
import { fetchKitFibersByProductId } from '@/app/lib/data';

export default async function KitContents({tutorial}) {
	const fibers = await fetchKitFibersByProductId(tutorial.productid);

	return (
		<div className="bg-paper p-4 mb-6 rounded">
			<h3 className="text-center normal-case"> {(tutorial.type == "product") ? 
	          "Kit Contents"
	          : "What's Needed" }
	        </h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 mb-[48px] pr-4">
				<div className="my-auto text-sm sm:text-base lg:text-lg">
			        <ul className="list-image-[url(/icons/checked.png)] list-inside leading-loose sm:leading-relaxed">
			          <li key="base">Base: {tutorial.base} {(tutorial.type == "basic") ? "(Check your kit's instructions!)" : "" }</li>
			          <li key="felting-needle">Felting needle <span className="bg-goldenrod text-xs sm:text-sm p-1 rounded">Warning: Sharp!</span></li>
			          <li key="felting-pad">Felting pad</li>
			          <li key="youtube">Optional: <ExternalLink url={tutorial.youtube} text="Demo Video" /> </li>
			          {(tutorial.type == "product") ?
			          	<>
				          <li key="eyes">Optional add-on: Glass bead eyes</li>
				          <li key="feets">Optional add-on: Wire for borb feets</li>
				        </>
			          : "" }
			        </ul>
		        </div>
		        <div>
			        {(tutorial.type == "product") ? <h4 className="font-bold text-center mb-2">Fibers</h4> : "" }
			        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 gap-y-4 sm:gap-2 m-auto">
			          {fibers.map((fiber) => {
			            return (
			                <div key={fiber.id} className="relative">
			                  <Image
			                    src={"/tutorials/fibers/"+fiber.image}
			                    alt={fiber.alt}
			                    height={212}
			                    width={212}
			                    className="rounded"
			                    />
			                    <div className="absolute inset-0 max-w-[212px]">
						    		<h5 className="bg-white/75 p-2 text-black text-sm sm:text-base font-bold capitalize">{fiber.fiber}</h5>
								</div>
			                </div>
			              );
			          })}
			        </div>
		        </div>
	        </div>
        </div>
	);
}