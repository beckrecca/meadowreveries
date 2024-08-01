import Image from 'next/image';
import Link from 'next/link';

export default function DiyComingSoon() {
	return (
		<div className="relative mb-[96px] sm:mb-6">
	        <Image 
	          src="/shop/diy/diy_coming_soon.png"
	          alt="Assorted needle-felted critters gather around a notebook where they're documenting instructions on HOW TO BORB. Clockwise from bottom left, a partially obscured grey horned sheep with a black head reads the instructions; an American robin borb wearing pipe cleaner spectacles sits on a bowl of wool roving in black, white, grey and buff colors; in the background a female mallard sits in a pond in front of a tree (all needle-felted items); an Eastern grey squirrel sits on a small felting pad with two felting needles; another bespectacled American robin borb stands on the edge of the notebook exposing his little feets; a black-capped chickadee borb wearing wired spectacles regards the partially obscured felted borb base in bottom right. In center, next to the bowl of felting wool, Bouldy the dryer ball smiles and another black-capped chickadee regards the borb base."
	          height={1280}
	          width={720}
	          className="w-full lg:max-w-[1280px] md:max-h-screen lg:mx-auto rounded"
	        />
	        <div className="absolute inset-0">
	          <h3 className="bg-paper/85 p-4 rounded text-center">
	          Coming Soon
	          </h3>
	        </div>
	        <div className="absolute inset-x-0 sm:bottom-0 w-full">
	        <p className="bg-paper sm:bg-paper/85 text-center m-0 p-4 rounded">We're working hard, so learning is <Link href="/learn">easy for you</Link>.</p>
	        </div>
	    </div>
	);
}