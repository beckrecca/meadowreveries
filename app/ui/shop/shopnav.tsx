'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
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
                                'text-black border border-seed p-2 rounded-full mr-2 text-center inline-flex items-center hover:text-black hover:bg-milkweed',
                                {
                                    'bg-paper': pathname !== link.href,
                                    'bg-ladycardinal': pathname === link.href,
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