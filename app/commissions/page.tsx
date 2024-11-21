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
          <Commission />
        </div>
      </main>
    </Container>
    );
}