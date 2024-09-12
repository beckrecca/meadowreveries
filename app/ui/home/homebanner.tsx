'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomeBanner() {
	const arrayOfBanners: string[][] = [
		["/homepage_farmers.png",
		"Needle felted borbs pose with their fall harvest. On the left is a summer squash plant. From top right clockwise, a cardinal pushes a wheel barrow laden with squash and pumpkin, a robin wears a straw hat, a chickadee holds a garden tool, a bluebird bears a trowel and watering can. Three needle felted pumpkins sit in the foreground. ",
		"Check out what we've picked",
		"/shop"
		],
		["/homepage_pabu.png",
		"A needle-felted red panda sits facing 3/4 towards the right on top of a plastic branch.",
		"Commissions Open",
		"/shop/custom"
		],
		["/homepage_diy_coming_soon.png",
		"Assorted needle-felted critters, some wearing spectacles, gather around a notebook where HOW TO BORB is written, surrounded by various needle felting supplies including needles, felting wool, scissors, a wooden dowel, and partially obscured Meadow Reveries business cards. Clockwise from left, there's a bespectacled black-capped chickadee, Bouldy from the Hades game, an Eastern grey squirrel, a bespectacled American robin, and another blackc-capped chickadee.",
		"Felting Kits Coming Fall 2024",
		"#footer"
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
	        <div className="absolute bottom-16 left-8">
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