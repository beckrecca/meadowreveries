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
			className="relative border border-paper rounded shadow"
			onMouseEnter={handleMouseEnter("/shop/"+product.image2)}
			onMouseLeave={handleMouseLeave(product.image)}
			>
			<Link href={"/shop/" + product.producttype + "/" + product.id}>
				<Image
				  src={src}
				  alt={product.alt}
				  height={224}
				  width={224}
				  className="object-cover rounded"
				/>
				<div className="absolute inset-0 text-center max-w-[224px]">
				    <h3 className="bg-white/75 p-2 text-black font-bold normal-case">{product.name}</h3>
				</div>
				<div className="absolute inset-x-0 bottom-0 text-center text-black hover:text-black bg-white/75">
					${product.price}
				</div>
			</Link>
	    </div>
	);
}