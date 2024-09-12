'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeBanner() {
	const arrayOfBanners: string[][] = [
		["/homepage_farmers.png",
		"Needle felted borbs pose with their fall harvest. On the left is a summer squash plant. From top right clockwise, a cardinal pushes a wheel barrow laden with squash and pumpkin, a robin wears a straw hat, a chickadee holds a garden tool, a bluebird bears a trowel and watering can. Three needle felted pumpkins sit in the foreground. Text in the upper left corner reads It's Harvest Time. ",
		"Check out what we've picked",
		"/shop/new"
		],
		["/homepage_diyrelease.png",
		"Two needle felted black capped chickadees sit inside a mailer box facing the camera. Protruding from the box is a felting needle in a tube, an upright foam block felting pad, and grey felting wool strewn over the box side. Text in the upper left reads Fetling kits ready!",
		"Make your own chickadee",
		"/shop/diy/diy-bcch"
		],
		["/homepage_mobile.png",
		"Collage of several shots of a Halloween themed baby mobile. From the left clockwise: Close up of a Halloween baby mobile’s hanging items with a smiling ghost and pumpkins; Close up of a Halloween baby mobile’s hanging items with pumpkins, a black cat, a bat, a witch’s hat, a ghost, and a crescent moon; Full view of a Halloween baby mobile strung from an embroidery hoop. The mobile items include an orange star and yellow crescent moon, green and orange balls, pumpkins, a ghost, a witch hat, a black cat, and a bat; Close up of a Halloween baby mobile’s hanging items with  pumpkins, a bat, a witch’s hat, a crescent moon, and orange and green balls. Text in the top left reads Commissions Open.",
		"Browse example custom work",
		"/shop/custom"
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
			<button className="absolute left-0 bg-fern p-2 rounded hover:bg-black z-10" onClick={moveCarousel}>
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
	          className="w-full lg:max-w-[1280px] lg:mx-auto"
	        />
	        <div className="absolute bottom-16 left-1/4">
			    <Link href={link} className="bg-white/85 text-lg sm:text-2xl p-2 py-4 underline rounded leading-10 inflex-flex items-center text-black">{subtext}</Link>
			</div>
	    	<button className="absolute right-0 bg-fern p-2 rounded hover:bg-black" onClick={reverseCarousel}>
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