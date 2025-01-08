import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from '@/app/ui/externallink'

export default function Footer() {
	return (
		<>
		<footer className="bg-paper p-6 text-sm" id="footer">
			<div className="flex justify-center items-center mb-2">
				<Image 
					src="/meadow_reveries_flowers.png" 
					alt="Decorative cartoon depiction of wildflowers."
					width="287"
					height="132"
				/>
			</div>
			<div className="flex justify-center items-center">
				<Link className="mr-4" href="https://www.instagram.com/meadowreveries" target="_blank">
					<Image
						src="/icons/instagram.png"
						alt="Instagram"
						width="20"
						height="20"
					/>
				</Link>
				<Link className="mr-4" href="https://www.tumblr.com/meadowreveries" target="_blank">
					<Image
						src="/icons/tumblr.png"
						alt="Tumblr"
						width="20"
						height="20"
					/>
				</Link>
				<Link className="mr-4" href="https://toot.io/@meadowreveries" target="_blank">
					<Image
						src="/icons/mastodon.png"
						alt="Mastodon"
						width="20"
						height="20"
					/>
				</Link>
				<Link className="mr-4" href="https://www.youtube.com/@MeadowReveries" target="_blank">
					<Image
						src="/icons/youtube.png"
						alt="youtube"
						width="20"
						height="20"
					/>
				</Link>
				<Link className="mr-4" href="https://www.tiktok.com/@meadow.reveries" target="_blank">
					<Image
						src="/icons/tiktok.png"
						alt="tiktok"
						width="20"
						height="20"
					/>
				</Link>
			</div>
			<div className="flex justify-center items-center p-4"> 
				<span className="mr-4">Copyright <Link href="https://www.beckrecca.me" target="_blank">Rebecca Doris</Link> 2024</span>
				<Link className="mr-4" href="/tos">Terms of Service</Link>
				<Link className="mr-4" href="/tos/privacy">Privacy Policy</Link>
				<Link className="mr-4" href="/tos/cookies">Cookie Policy</Link>
				<Link href="/events">Events</Link>
			</div>
		</footer>
		</>
	)
}