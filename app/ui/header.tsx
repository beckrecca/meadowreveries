'use client';

import Link from 'next/link';
import Nav from '@/app/ui/nav'
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
	        	<img className="fill-current mr-6" src="/meadow_reveries_sheep.png" alt="Cartoon depiction of a leaping sheep."/>
	        	<Link className="font-semibold text-xl tracking-wide uppercase text-black" href="/">Meadow Reveries</Link>
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
		          	<Link href="https://subscribepage.io/meadowreveries" className="block mt-4 lg:inline-block lg:mt-0 p-2 rounded text-black bg-milkweed border border-seed hover:text-black hover:bg-ladycardinal hover:border-aster max-w-fit" target="_blank">
		            Subscribe 
		          	</Link>
		        </div>
			</div>
	    </nav>
	)
}