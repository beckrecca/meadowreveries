'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
    {name: 'View All', href:'/shop'},
    {name: 'Handmade', href:'/shop/handmade'},
    {name: 'Felting Kits', href:'/shop/diy'},
    {name: 'New & Seasonal', href:'/shop/new'},
    {name: 'Sale', href:'/shop/sale'},
    {name: 'Commissions', href:'/commissions'},
    {name: 'Browse Custom Work', href:'/shop/custom'},
];

export default function ShopNav() {
    const pathname = usePathname();

    return (
        <div className="flex flex-row mb-4">
            {links.map((link) => {
                return (
                    <>
                        <Link 
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'underline py-2 pr-2 rounded mr-4 text-center inline-flex items-center text-sm sm:text-base',
                                {
                                    'text-black': pathname !== link.href,
                                    'text-fern bg-white': pathname === link.href,
                                    'bg-goldenrod pl-2': link.name === "Sale",
                                }
                            )}
                        >
                        {link.name}
                        </Link>
                    </>
                );
            })}
        </div>
    );
}