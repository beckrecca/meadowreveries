import Image from 'next/image';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';
import { fetchHolidayProducts }  from '@/app/lib/data';
import HomeList from '@/app/ui/home/homelist';

export default async function HolidayPreview() {
	const products = await fetchHolidayProducts();
	return (
		<div className="my-1">
	      <div className="mx-auto p-4">
	        <h2 className="text-center normal-case m-2">Merry Borbmas</h2>
	        <HomeList products={products}/>
	      </div>
	      <div className="text-center mt-2 mb-8">
	        <HomePreviewButton url="/shop/holiday" text="Shop Holiday" /> 
	      </div>
	    </div>
	);
}