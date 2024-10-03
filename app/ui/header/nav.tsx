'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import ShopDropdown from '@/app/ui/header/shopdropdown';

const links = [
	{name: 'Learn', href:'/learn'},
	{name: 'About', href:'/about'},
];

export default function Nav() {
	const pathname = usePathname();

	return (
		<div className="lg:inline-block">
			<ShopDropdown pathname = {pathname} />
			<div className="lg:inline-block ml-4">
			{links.map((link) => {
				return (
						<Link 
							key={link.name}
							href={link.href}
							className={clsx(
								'block mt-4 lg:inline-block lg:mt-0 text-black mr-4',
								{
									'underline': pathname.startsWith(link.href),
								}
							)}
						>
						{link.name}
						</Link>
				);
			})}
			</div>
		</div>
	);
}