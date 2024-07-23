import Image from 'next/image';
import GalleryModal from '@/app/ui/shop/gallerymodal'

export const responseToArray = (response: object) => {
  const imageArray = [];
  const altArray = [];
  const nameArray = [];
  const priceArray = [];

  response.map((item) => {
  	imageArray.push(item.file);
  	altArray.push(item.alt);
  	nameArray.push(item.name);
  	priceArray.push(item.price);
  });

  return [imageArray, altArray, nameArray, priceArray];
};

export default function ExampleList( {examples} ) {
	const examplesAsArray = responseToArray(examples);
	const images = examplesAsArray[0];
	const alts = examplesAsArray[1];
	const names = examplesAsArray[2];
	const prices = examplesAsArray[3];

	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
	        {examples.map((example) => {
	          return (
	            <GalleryModal 
	            	key={example.file}
	            	example={example} 
	            	imageArray={images}
	            	altArray={alts}
	            	nameArray={names}
	            	priceArray={prices}
	            />
	          );
	        })}
	    </div>
	);
}