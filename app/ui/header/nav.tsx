'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
	{name: 'Shop', href:'/shop'},
	{name: 'Learn', href:'/learn'},
	{name: 'About', href:'/about'},
];

export default function Nav() {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				return (
					<>
						<Link 
							key={link.name}
							href={link.href}
							className={clsx(
								'block mt-4 lg:inline-block lg:mt-0 text-black mr-4',
								{
									'underline': pathname === link.href,
								}
							)}
						>
						{link.name}
						</Link>
					</>
				);
			})}
		</>
	);
}