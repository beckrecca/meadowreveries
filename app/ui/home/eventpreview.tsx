import ExternalLink from '@/app/ui/externallink';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';

export default function EventPreview() {
	return (
		<div className='text-center mb-8'>
          <h2 className="text-center normal-case m-2">Events 2025</h2>
          <ul>  
            <li className='p-4'>
              Saturday, April 5, 2025 <ExternalLink url="https://www.barcfriends.com/" text="9th Annual Belchertown Animal Relief Committee Craft Fair" />&nbsp;
              <br/>Jabish Brook Middle School
                  62 N. Washington St., Belchertown 10am-3pm
            </li>
            <li className='p-4'>
             Friday, April 25 - Sunday, April 27, 2025 <ExternalLink url="https://www.neffa.org/festival-marketplace/" text="New England Folk Festival Marketplace" />&nbsp;
             <br/>Best Western Royal Plaza Hotel & Trade Center
            </li>
          </ul>
          <div className="text-center m-2">
	        <HomePreviewButton url="/events" text="More Events" /> 
	      </div>
        </div>

	)
}