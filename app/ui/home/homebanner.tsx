'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeBanner() {
	const arrayOfBanners: string[][] = [
		["/homepage_year_of_the_snek.png",
		"Five needle-felted snakes sit on a red cloth in front of two orange. The snakes are light green with pink cheeks and wearing mandarin oranges on their heads.",
		"Celebrate Lunar New Year",
		"/shop/handmade/lunar-snek"
		],
		["/homepage_pet_portraits_vday.png",
		"Banner image with framed examples of pet portraits: A heart-shaped frame featuring a needle-felted portrait of the face of a white goldendoodle with its name Mamps written, a circular frame showing a needle-felted portrait of the faces of two dobermans with pink hearts on either sides of them, and finally a heart-shaped frame featuring a close up of the needle-felted face of Sylvie the greatest dog who's ever lived, a grey yorkie poodle mix. The text reads Portraits of your greatest love, and a purple and pink heart embellishment rests at the top of the image. ",
		"Portraits you can pet",
		"/shop/handmade/pet-portrait"
		],
		["/homepage_diy.png",
		"Two needle felted black capped chickadees sit inside a mailer box facing the camera. Protruding from the box is a felting needle in a tube, an upright foam block felting pad, and grey felting wool strewn over the box side. Text in the upper left reads Fetling kits ready!",
		"Make your own borb",
		"/shop/diy"
		],
	]

	const [index, setIndex] = useState(0);
	const [banner, setBanner] = useState(arrayOfBanners[index][0]);
	const [alt, setAlt] = useState(arrayOfBanners[index][1]);
	const [subtext, setSubtext] = useState(arrayOfBanners[index][2]);
	const [link, setLink] = useState(arrayOfBanners[index][3]);

	function moveCarousel() {
		let i = index + 1;
		if (i > arrayOfBanners.length - 1) {
			setIndex(0);
		}
		else {
			setIndex(i);
		}
		setBanner(arrayOfBanners[index][0]);
		setAlt(arrayOfBanners[index][1]);
		setSubtext(arrayOfBanners[index][2]);
		setLink(arrayOfBanners[index][3]);
	}

	function reverseCarousel() {
		let i = index - 1;
		if (i < 0) {
			setIndex(arrayOfBanners.length - 1);
		}
		else {
			setIndex(i);
		}
		setBanner(arrayOfBanners[index][0]);
		setAlt(arrayOfBanners[index][1]);
		setSubtext(arrayOfBanners[index][2]);
		setLink(arrayOfBanners[index][3]);
	}

	useEffect(() => {
		const interval = setInterval(moveCarousel, 5000);
		return () => clearInterval(interval);
	});

	return (
		<div className="flex items-center justify-between relative">
			<button className="absolute left-0 bg-black/25 p-2 rounded hover:bg-black z-10" onClick={moveCarousel}>
				<Image
				src="/icons/previous_light.png"
				alt="Navigate to previous image"
				height={24}
				width={24}
				/>
			</button>
	        <Image 
	          src={banner}
	          alt={alt}
	          height={1280}
	          width={720}
	          className="w-full lg:max-w-[1280px] lg:mx-auto border border-paper rounded-b shadow"
	        />
	        <div className="absolute inset-x-0 bottom-0 text-center max-w-full bg-ladycardinal/70 p-1 sm:p-4">
			    <Link href={link} className="text-base sm:text-xl md:text-2xl underline rounded leading-10 text-black hover:text-black hover:underline no-underline">{subtext}</Link>
			</div>
	    	<button className="absolute right-0 bg-black/25 p-2 rounded hover:bg-black" onClick={reverseCarousel}>
				<Image
				src="/icons/next_light.png"
				alt="Navigate to next image"
				height={24}
				width={24}
				/>
			</button>
	    </div>
	);
}