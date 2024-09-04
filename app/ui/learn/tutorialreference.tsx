import Link from 'next/link';

export default function TutorialReference( {alias, referraltext} ) {
	return (
		<div>
			<Link href={"/learn/" + alias} target="_blank">{referraltext}</Link>
		</div>
	);
}