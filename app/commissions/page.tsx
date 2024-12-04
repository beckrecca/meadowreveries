import Container from '@/app/ui/container';
import Commission from '@/app/ui/shop/custom/commission';
import ShopNav from '@/app/ui/shop/shopnav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commissions | Meadow Reveries',
  description: 'Complete this form to request a custom commission',
}

export default async function Page() {
  return (
    <Container>
      <main>
        <ShopNav/>
        <div className="sm:ml-[224px]">
          <div className="bg-goldenrod p-2 mb-2">
            <p><strong>Holiday shipping notice:</strong> Request commissions by December 8, 2024 if the product is needed in time for Christmas Day, December 25, 2024.</p> 
            <p>Most commissions take a week to complete and USPS recommends shipping by December 18 for on-time Christmas deliveries.</p>
          </div>
          <Commission />
        </div>
      </main>
    </Container>
    );
}