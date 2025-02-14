import Image from 'next/image';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';
import { fetchPetProducts }  from '@/app/lib/data';
import HomeList from '@/app/ui/home/homelist';

export default async function DiyPreview() {
	const products = await fetchPetProducts();
	return (
		<div className="my-8">
	      <div className="mx-auto p-4">
	        <h2 className="text-center normal-case m-2">Pets Are Family</h2>
	        <HomeList products={products}/>
	      </div>
	      <div className="text-center m-2">
	        <HomePreviewButton url="/shop/pets" text="I love them" /> 
	      </div>
	    </div>
	);
}