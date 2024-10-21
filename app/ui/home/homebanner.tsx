'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeBanner() {
	const arrayOfBanners: string[][] = [
		["/homepage_spooky.png",
		"A spooky scene with a glowing crystal ball, a purple candelabra, a floor purple with cobwebs and a dingy grey felt background. On the right a borb witch faces 3/4 to the left, on the left a round black bat with green eyes faces 1/4 to the right, and in the middle back a pumpkin borb faces towards the camera. In the upper left overlay text reads Spooky Scary Sale.",
		"Prices slashed",
		"/shop/sale"
		],
		["/homepage_farmers.png",
		"Needle felted borbs pose with their fall harvest. On the left is a summer squash plant. From top right clockwise, a cardinal pushes a wheel barrow laden with squash and pumpkin, a robin wears a straw hat, a chickadee holds a garden tool, a bluebird bears a trowel and watering can. Three needle felted pumpkins sit in the foreground. Text in the upper left corner reads It's Harvest Time. ",
		"Check out what we've grown",
		"/shop/new"
		],
		["/homepage_diyrelease.png",
		"Two needle felted black capped chickadees sit inside a mailer box facing the camera. Protruding from the box is a felting needle in a tube, an upright foam block felting pad, and grey felting wool strewn over the box side. Text in the upper left reads Fetling kits ready!",
		"Make your own chickadee or robin borb",
		"/shop/diy/diy-bcch"
		],
		["/homepage_mobile.png",
		"Collage of several shots of a Halloween themed baby mobile. From the left clockwise: Close up of a Halloween baby mobile’s hanging items with a smiling ghost and pumpkins; Close up of a Halloween baby mobile’s hanging items with pumpkins, a black cat, a bat, a witch’s hat, a ghost, and a crescent moon; Full view of a Halloween baby mobile strung from an embroidery hoop. The mobile items include an orange star and yellow crescent moon, green and orange balls, pumpkins, a ghost, a witch hat, a black cat, and a bat; Close up of a Halloween baby mobile’s hanging items with  pumpkins, a bat, a witch’s hat, a crescent moon, and orange and green balls. Text in the top left reads Commissions Open.",
		"Request a Commission",
		"/commissions"
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
	        <div className="absolute inset-x-0 bottom-0 text-center max-w-full bg-white/70 p-1 sm:p-4">
			    <Link href={link} className="text-base sm:text-xl md:text-2xl underline rounded leading-10 text-black no-underline">{subtext}</Link>
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