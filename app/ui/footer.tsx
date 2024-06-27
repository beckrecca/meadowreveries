import Link from 'next/link';

export default function Footer() {
	return (
		<>
		<footer className="bg-paper p-6 text-sm">
			<div className="flex justify-center items-center">
				<img src="/meadow_reveries_flowers.png" alt="Decorative cartoon depiction of wildflowers."/>
			</div>
			<div className="flex justify-center items-center p-4">
				<span className="mr-4">Copyright <Link href="https://www.beckrecca.me" target="_blank">Rebecca Doris</Link> 2024</span>
				<Link className="mr-4" href="/tos">Terms of Service</Link>
				<Link href="/tos/privacy">Privacy Policy</Link>
			</div>
			<div className="flex justify-center items-center">
				<span>🍪 This website doesn't use cookies because I scream every time I have to dismiss another cookie banner, but you may encounter them via <Link href="https://snipcart.com/terms-of-service">Snipcart</Link> if you buy an item from the shop.</span> 
			</div>
		</footer>
		</>
	)
}