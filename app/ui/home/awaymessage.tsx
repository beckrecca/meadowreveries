import ExternalLink from '@/app/ui/externallink';

export default function AwayMessage() {
	return (
		<div className='text-center bg-ladycardinal p-4'>
          <h2 className="text-center normal-case">Online Shop is taking a break</h2>
          <p>Keep an eye on <ExternalLink url="https://www.instagram.com/meadowreveries" text="Instagram" /> or <ExternalLink url="https://meadowreveries.tumblr.com" text="Tumblr" /> for my latest work.</p>
        </div>
	)
}