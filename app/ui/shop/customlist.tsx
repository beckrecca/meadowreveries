import Image from 'next/image';
import GalleryModal from '@/app/ui/shop/gallerymodal'

export default function ExampleList( {examples} ) {
	// convert Object of Examples to array
	const gallery = Object.entries(examples);
	const imageArray = [];
	const altArray = [];
	const priceArray = [];
	const nameArray = [];
	for (let [key, value] of Object.entries(gallery)) {
		const inner = value;
		for (let [key, value] of Object.entries(inner)) {
			if (key == "1") {
				let val = value as object;
				console.log(typeof val.file);
				imageArray.push(val.file.toString());
				altArray.push(val.alt.toString());
				nameArray.push(val.name.toString());
				priceArray.push(val.price.toString());
			}
		}
	}
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
	        {examples.map((example) => {
	          return (
	            <GalleryModal 
	            	key={example.productid}
	            	example={example} 
	            	imageArray = {imageArray} 
	            	altArray = {altArray}
	            	nameArray = {nameArray}
	            	priceArray = {priceArray}
	            />
	          );
	        })}
	    </div>
	);
}