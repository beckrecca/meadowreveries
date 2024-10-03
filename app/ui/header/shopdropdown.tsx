'use client';

import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

const links = [
    {name: 'Handmade', href:'/shop/handmade'},
    {name: 'Felting Kits', href:'/shop/diy'},
    {name: 'Custom Orders', href:'/shop/custom'},
    {name: 'Seasonal', href:'/shop/new'},
    {name: 'Sale', href: '/shop/sale'},
    {name: 'Shop All', href:'/shop'}
];

export default function ShopDropdown( {pathname} ) {
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
		<div className="lg:inline-block relative m-2">
			<button 
				className={clsx(
					'p-2 font-bold bg-white border border-milkweed rounded hover:bg-ladycardinal',
					{
						'underline': pathname.startsWith("/shop"),
					}
				)}
				onClick={menuToggle}
			>
			Shop
			</button>
			<div 
				className={"bg-white rounded w-[164px] absolute z-10 my-1 p-2 border border-ladycardinal shadow " + toggle}
				onMouseLeave={menuToggle}
				>
				{links.map((link) => {
	                return (
	                    <>
	                        <Link 
	                            key={link.name}
	                            href={link.href}
	                            className={clsx(
									'block text-black hover:text-black hover:bg-paper',
									{
										'bg-goldenrod': link.name === "Sale",
									}
								)}
	                        >
	                        {link.name}
	                        </Link>
	                    </>
	                );
	            })}
			</div>
		</div>
	)
}