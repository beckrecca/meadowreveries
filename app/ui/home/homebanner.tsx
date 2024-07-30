'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomeBanner() {
	const arrayOfBanners: string[][] = [
		["/homepage_nocaf_sheep.png",
		"On the left, a needle felted Northern Cardinal sits on warm-colored stones in front of a bed of wildflowers. On the right, a hand holds a needle-felted sheep up in front of a background of green meadows. The sheep is light grey with a black tail and black head, facing away from the camera to show its adorable rump.",
		"Meadow Reveries has fledged!",
		"Shop Select Handmade Pieces",
		"/shop"
		],
		["/home_banner_chickadee.png",
		"On the left, a needle-felted black-capped chickadee sits on a half inch section of a branch, facing 3/4 towards the left. A dried spray of goldenrod lays in the background. Its belly is white with buff sides, its face white, its goatee black, its beak black, its cap black, its wings grey. On the right, two different species of bees do their pollinating work on some goldenrod in full bloom.",
		"Crafting tutorials and kits coming soon",
		"Subscribe To Our Mailing List",
		"#footer"
		]
	]
	const nocahsBanner = "/homepage_nocaf_sheep.png";
	const nocahsAlt = "On the left, a needle felted Northern Cardinal sits on warm-colored stones in front of a bed of wildflowers. On the right, a hand holds a needle-felted sheep up in front of a background of green meadows. The sheep is light grey with a black tail and black head, facing away from the camera to show its adorable rump.";
	const nochasText = "Select handmade items now available";

	const bcchBanner = "/home_banner_chickadee.png";
	const bcchAlt = "On the left, a needle-felted black-capped chickadee sits on a half inch section of a branch, facing 3/4 towards the left. A dried spray of goldenrod lays in the background. Its belly is white with buff sides, its face white, its goatee black, its beak black, its cap black, its wings grey. On the right, two different species of bees do their pollinating work on some goldenrod in full bloom.";
	const bcchText = "Tutorials & crafting kits landing in September!";

	const [index, setIndex] = useState(0);
	const [banner, setBanner] = useState(arrayOfBanners[index][0]);
	const [alt, setAlt] = useState(arrayOfBanners[index][1]);
	const [text, setText] = useState(arrayOfBanners[index][2]);
	const [subtext, setSubtext] = useState(arrayOfBanners[index][3]);
	const [link, setLink] = useState(arrayOfBanners[index][4]);

	function handleClick() {
		setIndex(index + 1);
		if (index >= arrayOfBanners.length - 1) {
			setIndex(0);
		}
		setBanner(arrayOfBanners[index][0]);
		setAlt(arrayOfBanners[index][1]);
		setText(arrayOfBanners[index][2]);
		setSubtext(arrayOfBanners[index][3]);
		setLink(arrayOfBanners[index][4]);
	}

	return (
		<div className="flex items-center justify-between relative">
			<button className="absolute left-0 bg-fern p-2 rounded hover:bg-black" onClick={handleClick}>
				<Image
				src="/icons/previous_light.png"
				alt="Navigate to previous image"
				height={32}
				width={32}
				/>
			</button>
	        <Image 
	          src={banner}
	          alt={alt}
	          height={1280}
	          width={720}
	          className="w-full lg:max-w-[1280px] lg:mx-auto max-h-screen"
	        />
	        <div className="absolute inset-0 text-center">
			    <h2 className="bg-goldenrod p-2 text-black font-bold normal-case mb-6">{text}</h2>
			    <div><Link href={link} className="bg-white/85 text-lg p-4 md:p-6 underline rounded">{subtext}</Link></div>
			</div>
	    	<button className="absolute right-0 bg-fern p-2 rounded hover:bg-black" onClick={handleClick}>
				<Image
				src="/icons/next_light.png"
				alt="Navigate to next image"
				height={32}
				width={32}
				/>
			</button>
	    </div>
	        // <Image 
	        //   src="/home_banner_chickadee.png"
	        //   alt="On the left, a needle-felted black-capped chickadee sits on a half inch section of a branch, facing 3/4 towards the left. A dried spray of goldenrod lays in the background. Its belly is white with buff sides, its face white, its goatee black, its beak black, its cap black, its wings grey. On the right, two different species of bees do their pollinating work on some goldenrod in full bloom."
	        //   height={1280}
	        //   width={720}
	        //   className="w-full lg:max-w-[1280px] lg:mx-auto"
	        // />
	);
}