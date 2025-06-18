import Image from 'next/image';
import ExternalLink from '@/app/ui/externallink';

export default function Subscribeform() {
	return (
		<div className="bg-paper w-[336px] p-2 mx-auto rounded border border-paper shadow">
          <div className="bg-goldenrod p-2 rounded">
            <h2 className="my-2 text-center text-2xl"><strong>Borbs for your inbox</strong></h2>
          </div>
          <Image 
	          src="/subscribe_fledge.png"
	          alt="A silhouette of a needle-felted black-capped chickadee borb flies mid-air across a beautiful summer morning blue sky with wispy clouds."
	          height={336}
	          width={336}
	          className="rounded-b"
	        	/>
			<p><strong>Subscribe to our mailing list below</strong> for updates on new products, promotions and more.</p>
            <div className="ml-embedded" data-form="5XFz0D"></div>
      <div className="text-xs text-center"><ExternalLink url="https://subscribepage.io/meadowreveries" text="Subscribe at this link"/> if the form doesn't load.</div>
		</div>
	);
}