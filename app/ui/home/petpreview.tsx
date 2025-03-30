import Image from 'next/image';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';
import { fetchProductsByCategoryName }  from '@/app/lib/data';
import HomeList from '@/app/ui/home/homelist';

export default async function PetPreview() {
	const products = await fetchProductsByCategoryName("pets");
	return (
		<div className="my-1">
	      <div className="mx-auto p-4">
	        <h2 className="text-center normal-case m-2">Pets are Family</h2>
	        <HomeList products={products}/>
	      </div>
	      <div className="text-center m-2">
	        <HomePreviewButton url="/shop/pets" text="Shop Pets" /> 
	      </div>
	    </div>
	);
}