'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
    {name: 'View All', href:'/shop'},
    {name: 'Felting Kits', href:'/shop/diy'},
    {name: 'Handmade', href:'/shop/handmade'},
    {name: 'Sale', href:'/shop/sale'},
    {name: 'Commissions', href:'/commissions'},
    {name: 'Browse Custom Work', href:'/shop/custom'},
];

export default function ShopNav() {
    const pathname = usePathname();

    return (
        <div className="float-left h-full">
            <div className="flex flex-row mb-4 overflow-x-scroll sm:flex-col w-screen sm:w-[224px] pr-2 bg-white">
                {links.map((link) => {
                    return (
                        <>
                            <Link 
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    'py-2 px-4 sm:p-2 rounded inline-flex items-center text-sm sm:text-base hover:text-black',
                                    {
                                        'text-black': pathname !== link.href,
                                        'text-black underline': pathname === link.href,
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