import Image from 'next/image';
import Container from '@/app/ui/container';
import ExternalLink from '@/app/ui/externallink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect | Meadow Reveries',
  description: 'Subscribe and follow Meadow Reveries',
}

export default function Page() {
  return (
    <Container>
      <div className="mx-auto text-center">
        <h2>Join the Party</h2>
        <Image 
        className="rounded border border-paper shadow mx-auto"
        src="/about/about_tea_party.png" 
        alt="Assorted needle felting critters have a tea party on a picnic blanket. From left to right, a female Northern Cardinal borb, a mini black-capped chickadee sits in a teapot, a male Northern Cardinal, and a mini Eastern bluebird. Needle-felted heart-shaped raspberry jam cookes lie on the picnic plates." 
        width="510"
        height="383"
        />
        <div className="m-auto bg-paper max-w-[510px] my-2 shadow">
          <h3>Subscribe to our mailing list</h3>
          <div className="ml-embedded" data-form="5XFz0D"></div>
        </div>
        <p>Email us at <span className="font-bold">hello@meadowreveries.com</span> or 
        follow us on social media: </p>
        <ul>
          <li><ExternalLink url="https://www.instagram.com/meadowreveries" text="Instagram" /></li> 
          <li><ExternalLink url="https://toot.io/@meadowreveries" text="Mastodon" /></li>
          <li><ExternalLink url="https://www.tiktok.com/@meadow.reveries" text="TikTok" /></li>
          <li><ExternalLink url="https://www.tumblr.com/meadowreveries" text="Tumblr" /></li>
          <li><ExternalLink url="https://www.youtube.com/@MeadowReveries" text="Youtube" /></li>
        </ul>
      </div>
    </Container>
    );
}