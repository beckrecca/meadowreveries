'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductImage( {product, images} ) {
	const gallery = images.slice(1);

	const [src, setSrc] = useState(product.image);
	const [alt, setAlt] = useState(product.alt);

	function handleMouseClick(imagesrc, imagealt) {
		return () => {
			setSrc(imagesrc);
			setAlt(imagealt);
		};
	}

	function handleMouseLeave(imagesrc, imagealt) {
		return () => {
			setSrc(imagesrc);
			setAlt(imagealt);
		};
	}

	return (
		<div onMouseLeave={handleMouseLeave(product.image, product.alt)}>
			<Image
	          src={src}
	          alt={alt}
	          height="448"
	          width="448"
	          className="rounded" 
	        />
	        <div className="flex overflow-auto max-w-[448px] h-[128px]">
        	{gallery.map((image) => {
				return (
					<>
						<Image 
							src={"/shop/" + image.file} 
							alt={image.alt} 
							height="128"
							width="128"
							className="rounded hover:border-4 border-paper"
							onClick={handleMouseClick("/shop/" + image.file, image.alt)}
						/>
					</>
			    );
			})}
			</div>
        </div>
	);
}