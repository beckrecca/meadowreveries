'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/app/ui/header/nav'
import CartButton from '@/app/ui/header/cartbutton';
import { useState } from 'react';

export default function Header() {
	const [toggle, setToggle] = useState("hidden");

	function menuToggle() {
		if (toggle == "hidden") {
			setToggle("block");
		}
		else {
			setToggle("hidden");
		}
	}

	return (
		<nav className="flex items-center justify-between flex-wrap bg-paper p-6">
	      	<div className="flex items-center flex-shrink-0 mr-6">
	        	<Image 
	        		className="fill-current mr-6" src="/meadow_reveries_sheep.png" 
	        		alt="Cartoon depiction of a leaping sheep."
	        		height="36"
	        		width="46"
	        	/>
	        	<a className="font-semibold text-xl tracking-wide uppercase text-black" href="/">Meadow Reveries</a>
	      	</div>
	      	<div className="lg:hidden block">
	        	<button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-fern hover:border-fern"
	        	onClick={menuToggle}
	        	>
	          		<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
	        	</button>
	      	</div>
	      	<div className={'w-full ' + toggle + ' lg:block flex-grow lg:flex lg:items-center lg:w-auto'}>
	        	<div className="lg:flex-grow lg:text-right">
		          	<Nav />
		          	<CartButton />
		        </div>
			</div>
	    </nav>
	)
}