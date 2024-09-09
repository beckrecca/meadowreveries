import ExternalLink from '@/app/ui/externallink';
export default function ProductPageSubscribe() {
	return (
		<div>
          <button disabled className="rounded text-black bg-paper hover:text-black mx-auto my-2 p-3 font-bold w-48">
            Item Unavailable
          </button>
			<div className="text-center max-w-[384px] my-4">
				<ExternalLink url="https://subscribepage.io/meadowreveriesproductupdates" text="Sign up for shop updates!" />
				<div className="ml-embedded" data-form="5XFz0D"></div>
			</div>
		</div>
	);
}