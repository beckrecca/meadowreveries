import Image from 'next/image';

export default function LearnBanner() {
	return (
		<div>
            <Image 
              src="/learn/learn_banner.png"
              alt="Assorted needle-felted critters study the book _Little Needle Felt Animals_ by Gretel Parker. Clockwise from left, there's a bespectacled black-capped chickadee borb, a male Eastern bluebird borb wearing pipe cleaner glasses sitting on a stack of books, a male Northern cardinal borb also wearing pipe cleaner glasses, a blue little mouse sitting next to some leaning books, and a black little mouse. The stack of books in the background is: _Exploring Raspberry Pi_ by Derek Molloy, _Python Programming: An Introduction to Computer Science 2nd Edition_by Zelle, _Becoming Steve Jobs_ by Brent Schlender and Rick Tetzeli, and  _JavaScript: The Good Parts_ by Crockwell. The leaning books from left to right are _Birding for a Better World_ by Feminist Bird Club, _Don't Make Art, Just Make Something_ by Miranda Aisling, _Essential Writings_ by Thich Nhat Hanh, _The Art of Communication_ by Thich Nhat Hanh, and _Nature's Best Hope_ by Douglass Tallamy."
              height={1280}
              width={720}
              className="w-full lg:max-w-[1280px] md:max-h-screen lg:mx-auto"
            />
        </div>
	);
}