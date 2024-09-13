'use client';

import Link from 'next/link';
import FiberDetails from '@/app/ui/shop/diy/fiberdetails';
import { useState } from 'react';

export default function KitDetails( {fibers} ) {
  const [readMore, setReadMore] = useState(false);
  const [toggle, setToggle] = useState("block");
  const [opacity, setOpacity] = useState("opacity-20");
  const [firstFade, setFirstFade] = useState("opacity-80");
  const [secondFade, setSecondFade] = useState("opacity-60");
  const [thirdFade, setThirdFade] = useState("opacity-40");

  function handleReadMore() {
    setReadMore(true);
    setOpacity("opacity-100");
    setFirstFade("opacity-100");
    setSecondFade("opacity-100");
    setThirdFade("opacity-100");
    setToggle("hidden");
  }

	return (
    <div>
  		<div className="relative">
        <h3>Contents</h3>
        <ul className="list-disc list-inside">
          <li className={firstFade}>QR code link to online instructions</li>
          <li className={secondFade}>2.4" x 4.6" x 1" foam block felting pad</li>
          <li className={secondFade}>Felting needle &nbsp;
            <span className="bg-goldenrod text-xs sm:text-sm p-1 rounded">
               Warning: <Link href="/learn/needle" className="text-black">Sharp</Link>!
            </span></li>
          <li className={thirdFade}>3/8 ounces of felting wool fiber: colors listed below</li>
          <li className={thirdFade}><strong>Included</strong>: glass bead eyes (Opt out in cart to save $1)</li>
          <li className={opacity}><strong>Optional</strong>: Add on wire feets for $1 in cart</li>
        </ul>
        <div className="absolute bottom-1 left-1/4 text-center">
          <button 
            className={"p-3 font-bold bg-white border border-milkweed rounded " + toggle}
            onClick={handleReadMore}
            >
            Read More
          </button>
        </div>
      </div>
          {readMore ? 
            <>
              <FiberDetails fibers={fibers} />
            </>
          : "" }
        <div className="bg-paper rounded py-2 mt-4">
          <h3>Warning</h3>
          <p><Link href="/learn/needle">Felting needles</Link> are <strong>sharp</strong>. 
        Please use caution. Felting kits are not recommended for young children or those with limited manual dexterity.</p>
        </div>
    </div>
	);
}