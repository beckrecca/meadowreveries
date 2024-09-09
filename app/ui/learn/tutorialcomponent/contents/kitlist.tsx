import Link from 'next/link';
import ExternalLink from '@/app/ui/externallink';

export default function KitList( {tutorial }) {
	return (
		<div className="my-auto text-sm sm:text-base lg:text-lg">
	        <ul className="list-image-[url(/icons/checked.png)] list-inside leading-loose sm:leading-relaxed">
	          <li key="base">Base: {tutorial.base} {(tutorial.type == "basic") ? "(Check your kit's instructions!)" : "" }</li>
	          <li key="felting-needle">Felting needle &nbsp;
	          	<span className="bg-goldenrod text-xs sm:text-sm p-1 rounded">
	          		 Warning: <Link href="/learn/needle" className="text-black">Sharp</Link>!
	          	</span>
	          </li>
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
	);
}