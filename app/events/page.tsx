import Container from '@/app/ui/container';
import ExternalLink from '@/app/ui/externallink';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | Meadow Reveries',
  description: 'Shop Meadow Reveries in person at these events',
}

export default async function Page() {
  return (
    <Container>
      <main>
        <div className='text-center'>
          <h1>Events 2025</h1>
          <p>
            <ExternalLink url="https://subscribepage.io/meadowreveries" text="Subscribe to our mailing list" /> for updates on events.
          </p>
          <ul>
            <li className='p-4'>
              Saturday, January 11, 2025  <ExternalLink url="https://greenfieldfarmersmarket.com/" text="Greenfield Winter Farmer's Market" />&nbsp;
              <br/>Greenfield Public Library 10am-1pm
            </li>
            <li className='p-4'>
              Saturday, March 8, 2025 <ExternalLink url="https://greenfieldfarmersmarket.com/" text="Greenfield Winter Farmer's Market" />&nbsp;
              <br/>Greenfield Public Library 10am-1pm
            </li>
            <li className='p-4'>
              Saturday, April 5, 2025 <ExternalLink url="https://www.barcfriends.com/" text="9th Annual Belchertown Animal Relief Committee Craft Fair" />&nbsp;
              <br/>Jabish Brook Middle School
                  62 N. Washington St., Belchertown 10am-3pm
            </li>
            <li className='p-4'>
             Friday, April 25 - Sunday, April 27, 2025 <ExternalLink url="https://www.neffa.org/festival-marketplace/" text="New England Folk Festival Marketplace" />&nbsp;
             <br/>Best Western Royal Plaza Hotel & Trade Center
            </li>
            <li className='p-4'>
             Saturday, May 17 2025 <ExternalLink url="https://www.instagram.com/turners_falls_high_school/p/DGn0uiRu9OL/" text="Turners Falls High School Vendor Market" />&nbsp;
             <br/>222 Turnpike Rd, Turners Falls MA
            </li>
            <li className='p-4'>
             Sunday, June 8, 2025 <ExternalLink url="https://belchertownfarmersmarket.weebly.com/" text="Belchertown Farmers Market" />&nbsp;
             <br/>Belchertown Town Common, 10am-2pm
            </li>
          </ul>
        </div>
      </main>
    </Container>
    );
}