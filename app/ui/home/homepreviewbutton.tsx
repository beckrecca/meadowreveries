import Link from 'next/link';

export default function HomePreviewButton( {url, text}) {
	return (
		<Link className="bg-black text-white p-4 rounded-full hover:text-white hover:bg-fern" href={url}>{text}</Link>
	);

}