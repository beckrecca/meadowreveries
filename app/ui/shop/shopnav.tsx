'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
    {name: 'New', href:'/shop/new'},
    {name: 'Handmade', href:'/shop/handmade'},
    {name: 'Felting Kits', href:'/shop/diy'},
    {name: 'Custom Orders', href:'/shop/custom'},
    {name: 'View All', href:'/shop'}
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
                                'underline py-2 pr-2 rounded-full mr-4 text-center inline-flex items-center',
                                {
                                    'text-black': pathname !== link.href,
                                    'text-fern bg-white': pathname === link.href,
                                    'bg-goldenrod rounded pl-2': link.name === 'New',
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