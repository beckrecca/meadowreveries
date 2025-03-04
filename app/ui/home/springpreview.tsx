import Image from 'next/image';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';
import { fetchSpringProducts }  from '@/app/lib/data';
import HomeList from '@/app/ui/home/homelist';

export default async function SpringPreview() {
	const products = await fetchSpringProducts();
	return (
		<div className="my-1">
	      <div className="mx-auto p-4">
	        <h2 className="text-center normal-case m-2">Spring is Coming</h2>
	        <HomeList products={products}/>
	      </div>
	      <div className="text-center m-2">
	        <HomePreviewButton url="/shop/handmade" text="Shop Spring" /> 
	      </div>
	    </div>
	);
}