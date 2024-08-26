import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from '@/app/ui/externallink';

export default function Page() {
  return (
    <div>
      <main>
        <div className="relative">
            <Image 
              src="/learn/learn_banner.png"
              alt="Assorted needle-felted critters study the book _Little Needle Felt Animals_ by Gretel Parker. Clockwise from left, there's a bespectacled black-capped chickadee borb, a male Eastern bluebird borb wearing pipe cleaner glasses sitting on a stack of books, a male Northern cardinal borb also wearing pipe cleaner glasses, a blue little mouse sitting next to some leaning books, and a black little mouse. The stack of books in the background is: _Exploring Raspberry Pi_ by Derek Molloy, _Python Programming: An Introduction to Computer Science 2nd Edition_by Zelle, _Becoming Steve Jobs_ by Brent Schlender and Rick Tetzeli, and  _JavaScript: The Good Parts_ by Crockwell. The leaning books from left to right are _Birding for a Better World_ by Feminist Bird Club, _Don't Make Art, Just Make Something_ by Miranda Aisling, _Essential Writings_ by Thich Nhat Hanh, _The Art of Communication_ by Thich Nhat Hanh, and _Nature's Best Hope_ by Douglass Tallamy."
              height={1280}
              width={720}
              className="w-full lg:max-w-[1280px] md:max-h-screen lg:mx-auto"
            />
          <div className="absolute inset-0 text-center">
            <h2 className="bg-ladycardinal/75 p-4 text-xl text-black font-bold normal-case">Coming Fall 2024: Learn How to Needle Felt</h2>
          </div>
        </div>
        <div className="p-6 flex flex-wrap">
          <div className="pr-4 md:basis-4/5">
            <h2 className="text-center">What is Needle Felting anyway?</h2>
            <p>
              Needle felting is the craft of sculpting or painting wool using a special barbed needle. 
              Felting needles feature tiny, microscopic barbs that catch the fibers and cause the fibers to tangle together with each poke. 
              The more you poke a felting needle into wool, the more matted and denser it becomes. 
              It's like the opposite of combing your hair. 
            </p>
            <p>
              Wool fiber is soft, flexible, and layerable. 
              As a crafting material, felting wool fiber is both forgiving and obedient. 
              It's perfect for beginners, relaxing and meditative.
            </p>
            <p>
              Borb crafting kits will become available in the <Link href="/shop">Shop</Link> starting Fall 2024!
            </p>
          </div>
          <div className="md:basis-1/5 mx-auto">
            <Image
              src="/learn/learn_basics_example.png"
              alt="Above a wool felting mat, a left hand holds a borb base shape in white wool, and a right hand holds a completed needle-felted chickadee borb sculpter. In the background, partially obscured needle-felted rabbit, bluebird and squirrel watch."
              height={336}
              width={336}
              className="rounded"
            />
            <p className="text-sm text-center p-1 m-0"><em>Friend?</em></p>
          </div>
        </div>
        <div className="bg-[url('bg-main.png')] bg-center bg-no-repeat min-h-fit py-8">
          <div className="text-center bg-paper/80 max-w-fit m-auto rounded p-2">
            <h2>Free, Short Tutorials Coming Soon</h2>
            <ul>
            <li>How to make a borb base shape</li>
            <li>How to use a felting needle (safely)</li>
            <li>How to use the felting mat</li>
            <li>How to take a piece of wool</li>
            <li>How to create eyes from fiber</li>
            <li><a href="#footer">Much more</a></li>
            </ul>
          </div>
        </div>
        <div className="mb-4 py-6">
          <h2 className="text-center">Subscribe for Updates</h2>
          <div className="ml-embedded" data-form="5XFz0D"></div>
          <div className="text-sm text-center"><ExternalLink url="https://subscribepage.io/meadowreveries" text="Subscribe at this link"/> if the form doesn't load.</div>
        </div>
      </main>
    </div>
  );
}
