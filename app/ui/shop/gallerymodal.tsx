// Adapted from https://medium.com/swlh/creating-a-simple-lightbox-from-scratch-in-react-caea84f90960 by Alexandra Radevich

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function GalleryModal({example, imageArray, altArray, nameArray, priceArray}) {
	const [lightboxDisplay, setLightBoxDisplay] = useState(false);
	const [imageToShow, setImageToShow] = useState<any[]>([]);
	const [altToUse, setAltToUse] = useState<any[]>([]);
	const [nameToDisplay, setNameToDisplay] = useState<any[]>([]);
	const [priceToDisplay, setPriceToDisplay] = useState<any[]>([]);

	function showLightBox(image, alt, name, price) {
		return () => {
			setImageToShow(image);
			setAltToUse(alt);
			setNameToDisplay(name);
			setPriceToDisplay(price);
			setLightBoxDisplay(true);
		};
	}

	function hideLightBox() {
		return () => {
			setLightBoxDisplay(false);
		};
	}

	function clickThroughImages(image, alt, name, price) {
		setImageToShow(image);
		setAltToUse(alt);
		setNameToDisplay(name);
		setPriceToDisplay(price);
	}

	const showNext = (e) => {
		e.stopPropagation();
		let currentIndex = imageArray.indexOf(imageToShow);
		if (currentIndex >= imageArray.length - 1) {
			setLightBoxDisplay(false);
		}
		else {
			let nextImage = imageArray[currentIndex + 1];
			let nextAlt = altArray[currentIndex + 1];
			let nextName = nameArray[currentIndex + 1];
			let nextPrice = priceArray[currentIndex + 1];
			clickThroughImages(nextImage, nextAlt, nextName, nextPrice);
		}
	}

	const showPrev = (e) => {
		e.stopPropagation();
		let currentIndex = imageArray.indexOf(imageToShow);
		if (currentIndex <= 0) {
			setLightBoxDisplay(false);
		}
		else {
			let prevImage = imageArray[currentIndex - 1];
			let prevAlt = altArray[currentIndex - 1];
			let prevName = nameArray[currentIndex - 1];
			let prevPrice = priceArray[currentIndex - 1];
			clickThroughImages(prevImage, prevAlt, prevName, prevPrice);
		}
	}

	return (
		<div>
			<div key={example.portraitid} className="relative">
	          <Image
	            src={"/shop/" + example.file}
	            alt={example.alt}
	            height={224}
	            width={224}
	            className="rounded hover:border-4 border-paper"
	            onClick={showLightBox(example.file, example.alt, example.name, example.price)}
	          />
	        </div>
	        { lightboxDisplay ?
			  <div id="lightbox" className="z-10 fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-between" onClick={hideLightBox()}>
				<button className="bg-milkweed p-2 md:p-4 rounded hover:bg-ladycardinal" onClick={showPrev}>
					<Image
					src="/icons/previous.png"
					alt="Navigate to previous image"
					height={48}
					width={48}
					/>
				</button>
				<div className="rounded">
					<Image
					src={"/shop/" + imageToShow}
					alt={altToUse.toString()}
					height={336}
					width={336}
					/>
					<div className="rounded bg-white p-2 max-w-[336px]">
						<h3>
							{nameToDisplay.toString()}
						</h3>
						<p>
							A piece similar in effort and materials might cost <span className="font-bold">${priceToDisplay.toString()} (USD)</span>.
						</p>
					</div>
				</div>
				<button className="bg-milkweed p-2 md:p-4 rounded hover:bg-ladycardinal" onClick={showNext}>
					<Image
					src="/icons/next.png"
					alt="Navigate to next image"
					height={48}
					width={48}
					/>
				</button>
			  </div>
			: '' }
		</div>
	);
}