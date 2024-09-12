import Image from 'next/image';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';
import { fetchDiyProducts }  from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';

export default async function DiyPreview() {
	const products = await fetchDiyProducts();
	return (
		<div className="my-8">
	      <div className="mx-auto p-4">
	        <h2 className="text-center normal-case m-2">Felting Kits</h2>
	        <ProductList products={products}/>
	      </div>
	      <div className="text-center m-2">
	        <HomePreviewButton url="/learn" text="Learn More" /> 
	      </div>
	    </div>
	);
}