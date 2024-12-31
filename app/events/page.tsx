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
             Friday, April 25 - Sunday, April 27, 2025 <ExternalLink url="https://www.neffa.org/festival-marketplace/" text="New England Fiber Festival Marketplace" />&nbsp;
             <br/>Best Western Royal Plaza Hotel & Trade Center
            </li>
          </ul>
        </div>
      </main>
    </Container>
    );
}