'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ThumbnailLink({product}) {
	const [src, setSrc] = useState(product.image);

	function handleMouseEnter(imagesrc) {
		return () => {
			setSrc(imagesrc);
		};
	}

	function handleMouseLeave(imagesrc) {
		return () => {
			setSrc(imagesrc);
		};
	}
	return (
		<div key={product.id} 
			className="relative"
			onMouseEnter={handleMouseEnter("/shop/"+product.image2)}
			onMouseLeave={handleMouseLeave(product.image)}
			>
			<Link href={"/shop/handmade/" + product.id}>
				<Image
				  src={src}
				  alt={product.alt}
				  height={336}
				  width={336}
				  className="object-cover rounded"
				/>
				<div className="absolute inset-0 sm:text-left md:text-center">
				    <h3 className="bg-white/75 p-2 text-black text-xl font-bold normal-case">{product.name}</h3>
				</div>
			</Link>
	    </div>
	);
}