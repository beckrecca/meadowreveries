import Link from 'next/link';

export default function HomePreviewButton( {url, text}) {
	return (
		<Link className="p-3 rounded text-black bg-milkweed hover:text-black hover:bg-ladycardinal" href={url}>{text}</Link>
	);

}