import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from '@/app/ui/externallink'

export default function Footer() {
	return (
		<>
		<footer className="bg-paper p-6 text-sm" id="footer">
			<div className="flex justify-center items-center">
				<Image 
					src="/meadow_reveries_flowers.png" 
					alt="Decorative cartoon depiction of wildflowers."
					width="287"
					height="132"
				/>
			</div>
			<div className="flex justify-center items-center p-4"> 
				<Link className="mr-4" href="https://www.instagram.com/meadowreveries" target="_blank">
					<Image
						src="/icons/instagram.png"
						alt="Follow us on Instagram"
						width="20"
						height="20"
					/>
				</Link>
				<span className="mr-4">Copyright <Link href="https://www.beckrecca.me" target="_blank">Rebecca Doris</Link> 2024</span>
				<Link className="mr-4" href="/tos">Terms of Service</Link>
				<Link href="/tos/privacy">Privacy Policy</Link>
			</div>
			<div className="flex justify-center items-center">
				<span>🍪 This website doesn't use cookies because I scream every time I have to dismiss another cookie banner, but shoppers may encounter them via <Link href="https://snipcart.com/terms-of-service">Snipcart</Link>. Icons from <ExternalLink url="https://www.flaticon.com/" text="Flaticon" />.</span> 
			</div>
		</footer>
		</>
	)
}