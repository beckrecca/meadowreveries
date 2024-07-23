import Image from 'next/image';
import GalleryModal from '@/app/ui/shop/gallerymodal'

export default function ExampleList( {examples} ) {
	let imageArray: any[] = [];
  	let altArray: any[] = [];
  	let nameArray: any[] = [];
  	let priceArray: any[] = [];

  	examples.map((example) => {
  		imageArray.push(example.file);
  		altArray.push(example.alt);
  		nameArray.push(example.name);
  		priceArray.push(example.price);
  	});

	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
	        {examples.map((example) => {
	          return (
	            <GalleryModal 
	            	key={example.file}
	            	example={example} 
	            	imageArray={imageArray}
	            	altArray={altArray}
	            	nameArray={nameArray}
	            	priceArray={priceArray}
	            />
	          );
	        })}
	    </div>
	);
}