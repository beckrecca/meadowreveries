import Link from 'next/link';

export default function ShopNavButton( {url, text}) {
	return (
		<Link className="bg-paper text-black border border-seed p-2 rounded-full mr-2" href={url}>{text}</Link> 
	);

}