import Image from 'next/image';
import Container from '@/app/ui/container';
import ExternalLink from '@/app/ui/externallink';
import Subscribeform from '@/app/ui/subscribeform';

export default function Page() {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="border border-solid border-fern rounded p-2 max-w-[504px]">
            <h2>Inspiration</h2>
            <Image 
            className="rounded"
            src="/about/about_artist.png" 
            alt="Rebecca Doris stands in the meadows with a sunset in the background, facing the camera and smiling laughing." 
            width="504"
            height="378"
            />
            <p>The name <strong>Meadow Reveries</strong> comes from the Meadows of Pioneer Valley combined with local poet Emily Dickinson's poem <ExternalLink url="https://poets.org/poem/make-prairie-1755" text="To make a prairie" />. The Meadows are artist Rebecca's happy place for bird watching and day dreaming. 
            </p>
        </div>

        <div className="border border-solid border-fern rounded p-2 max-w-[504px]">
          <h2>Connect</h2>
          <Image 
          className="rounded"
          src="/about/about_autumn_sunset.png" 
          alt="Rebecca Doris stands in the meadows with a sunset in the background, facing the camera and smiling laughing." 
          width="510"
          height="383"
          />
          <p>Email us at <span className="font-bold">hello@meadowreveries.com</span> or 
          follow us on <ExternalLink url="https://www.instagram.com/meadowreveries" text="Instagram" />.</p>
        </div>
        
        <div className="border border-solid border-fern rounded p-2 max-w-[504px]">
          <h2>Fiber Sources</h2>
          <Image 
            className="rounded"
            src="/about/about_daisy_view.png" 
            alt="A hand holds a daisy in the foreground of a photo of meadows in late spring on a blue sky day." 
            width="510"
            height="383"
            />
          <p>Sourced from sustainable vendors and happy sheep.</p>
          <ul>
            <li><ExternalLink url="https://greyfoxfelting.com/" text="Grey Fox Felting" /></li>
            <li><ExternalLink url="https://feltedsky.com/" text="Felted Sky" /></li>
            <li><ExternalLink url="https://paradisefibers.com/" text="Paradise Fibers" /></li>
            <li><ExternalLink url="https://twistoffatespinnery.biz/" text="Twist of Fate Spinnery" /></li>
            <li><ExternalLink url="https://www.instagram.com/wool.for.the.dame/" text="Wool for the Dame" /></li>
          </ul>
        </div>
      </div>
      <Image 
          className="m-auto"
          src="/about/about_hero_bee.png" 
          alt="A honey bee with thick pollen jackets collects pollen from goldenrod in full bloom." 
          width="1020"
          height="260"
          />
    </Container>
    );
}