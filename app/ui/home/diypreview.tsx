import Image from 'next/image';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';
import { fetchDiyProducts }  from '@/app/lib/data';
import HomeList from '@/app/ui/home/homelist';

export default async function DiyPreview() {
	const products = await fetchDiyProducts();
	return (
		<div className="my-2">
	      <div className="mx-auto p-4">
	        <h2 className="text-center normal-case m-2">Learn to Needle Felt</h2>
	        <HomeList products={products}/>
	      </div>
	      <div className="text-center m-2">
	        <HomePreviewButton url="/learn" text="Learn More" /> 
	      </div>
	    </div>
	);
}