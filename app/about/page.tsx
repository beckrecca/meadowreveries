import Image from 'next/image';
import Container from '@/app/ui/container';
import ExternalLink from '@/app/ui/externallink';

export default function Page() {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        <div className="rounded p-2 max-w-[504px]">
            <h2>Artist</h2>
            <Image 
            className="rounded"
            src="/about/about_artist.png" 
            alt="Rebecca Doris stands in the meadows with a sunset in the background, facing the camera and smiling laughing." 
            width="504"
            height="378"
            />
            <p>
              <ExternalLink url="https://www.beckrecca.me/" text="Rebecca"/> has been needle felting cute little critters since 2016. She has a BA in Linguistics, a master's in Digital Media Design, and over three pounds of wool fiber. She's the sole proprietor, artist, developer, marketer, product manager for Meadow Reveries.
            </p>
        </div>
        <div className="rounded p-2 max-w-[504px]">
            <h2>Inspiration</h2>
            <Image 
            className="rounded"
            src="/about/about_autumn_sunset.png" 
            alt="The Meadows under sunset in mid-autumn." 
            width="510"
            height="383"
            />
            <p>The name <strong>Meadow Reveries</strong> comes from the Meadows of Cold Springs combined with local poet Emily Dickinson's poem <ExternalLink url="https://poets.org/poem/make-prairie-1755" text="To make a prairie" />. The Meadows are artist Rebecca's happy place for bird watching and day dreaming. 
            </p>
        </div>
        <div className="rounded p-2 max-w-[504px]">
          <h2>Connect</h2>
          <Image 
          className="rounded"
          src="/about/about_tea_party.png" 
          alt="Assorted needle felting critters have a tea party on a picnic blanket. From left to right, a female Northern Cardinal borb, a mini black-capped chickadee sits in a teapot, a male Northern Cardinal, and a mini Eastern bluebird. Needle-felted heart-shaped raspberry jam cookes lie on the picnic plates." 
          width="510"
          height="383"
          />
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
        
        <div className="rounded p-2 max-w-[504px]">
          <h2>Fiber Sources</h2>
          <Image 
            className="rounded"
            src="/about/about_amro_meadows.png" 
            alt="A mostly out of frame hand in the center holds a needle-felted American Robin aloft in front of a field of meadows in mid summer." 
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
    </Container>
    );
}