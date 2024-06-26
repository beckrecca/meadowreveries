import Link from 'next/link';

export default function Footer() {
	return (
		<>
		<footer className="bg-paper p-6">
			<div className="flex justify-center items-center">
				<img src="/assets/img/meadow_reveries_flowers.png"/>
			</div>
			<p>Copyright <Link href="https://www.beckrecca.me" target="_blank">Rebecca Doris</Link> 2024. <Link href="/tos">Read our Terms of Service</Link>.</p>
			<p>🍪 This website doesn't use cookies because I scream every time I have to dismiss another cookie banner, but you may encounter them via <Link href="https://snipcart.com/terms-of-service">Snipcart</Link> if you buy something. </p>
		</footer>
		</>
	)
}