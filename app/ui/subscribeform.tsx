import ExternalLink from '@/app/ui/externallink';

export default function Subscribeform() {
	return (
		<div className="bg-paper w-[336px] p-2 mt-4 mx-auto rounded">
          <div className="bg-goldenrod p-2 rounded">
            <h2 className="my-2 text-center text-2xl"><strong>We're still learning to fly</strong></h2>
          </div>
			<p><strong>Subscribe to our mailing list below</strong> and we'll email you once our borb crafting kits and tutorials take flight.</p>
            <div className="ml-embedded" data-form="5XFz0D"></div>
      <div className="text-sm text-center"><ExternalLink url="https://subscribepage.io/meadowreveries" text="Subscribe at this link"/> if the form doesn't load.</div>
		</div>
	);
}