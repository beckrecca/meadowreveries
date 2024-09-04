import Link from 'next/link';

export default function TutorialReference( {alias, referraltext} ) {
	return (
		<div>
			{(alias != null) ?
			<><strong>Learn More:</strong> </>
			: ""}
			<Link href={"/learn/" + alias} target="_blank">{referraltext}</Link>
		</div>
	);
}