'use client';

import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

const links = [	
    {name: 'Shop All', href:'/shop'},
    {name: 'Felting Kits', href:'/shop/diy'},
    {name: 'Handmade', href:'/shop/handmade'},
    {name: 'New & Seasonal', href:'/shop/new'},
    {name: 'SALE', href: '/shop/sale'},
    {name: 'Commissions', href:'/commissions'},
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
		<div className="sm:hidden lg:inline-block relative m-2">
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
										'bg-goldenrod': link.name === "SALE",
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