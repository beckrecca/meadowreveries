import ExternalLink from '@/app/ui/externallink';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';

export default function EventPreview() {
	return (
		<div className='text-center mb-8'>
          <h2 className="text-center normal-case m-2">Events 2025</h2>
          <ul>
            <li className='p-4'>
              Saturday, March 8, 2025 <ExternalLink url="https://greenfieldfarmersmarket.com/" text="Greenfield Winter Farmer's Market" />&nbsp;
              <br/>Greenfield Public Library 10am-1pm
            </li>
            <li className='p-4'>
             Friday, April 25 - Sunday, April 27, 2025 <ExternalLink url="https://www.neffa.org/festival-marketplace/" text="New England Fiber Festival Marketplace" />&nbsp;
             <br/>Best Western Royal Plaza Hotel & Trade Center
            </li>
          </ul>
          <div className="text-center m-2">
	        <HomePreviewButton url="/events" text="More Events" /> 
	      </div>
        </div>

	)
}