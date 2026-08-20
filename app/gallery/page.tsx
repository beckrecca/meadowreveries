import Container from '@/app/ui/container';
import CustomList from '@/app/ui/shop/customlist';
import { fetchProductsWithNoCategory }  from '@/app/lib/data';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse Custom Work | Meadow Reveries',
  description: 'Example handmade commissions',
}

export default async function Page() {
  const examples = await fetchProductsWithNoCategory();
  return (
    <Container>
      <main>
        <div>
          <h2>General Gallery</h2>
          <CustomList examples={examples} />
        </div>
      </main>
    </Container>
    );
}