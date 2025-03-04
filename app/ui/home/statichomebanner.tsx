import Image from 'next/image';

export default function StaticHomeBanner( {image, alt} ) {
	return (
		<Image 
	      src={image}
	      alt={alt}
	      height={1800}
	      width={600}
	      className="w-full lg:max-w-[1800px] lg:mx-auto"
	      unoptimized
	    />
	 )
}