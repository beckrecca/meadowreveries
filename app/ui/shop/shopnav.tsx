'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
    {name: 'View All', href:'/shop'},
    {name: 'Handmade', href:'/shop/handmade'},
    {name: 'Felting Kits', href:'/shop/diy'},
    {name: 'Sale', href:'/shop/sale'},
    {name: 'Commissions', href:'/commissions'},
    {name: 'Browse Custom Work', href:'/shop/custom'},
];

export default function ShopNav() {
    const pathname = usePathname();

    return (
        <div className="float-left h-full">
            <div className="flex flex-row mb-4 w-fit overflow-x-scroll sm:flex-col sm:w-[224px]">
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
    );
}