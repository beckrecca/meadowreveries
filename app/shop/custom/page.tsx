import Container from '@/app/ui/container';
import CustomList from '@/app/ui/shop/customlist';
import { fetchExampleProducts }  from '@/app/lib/data';
import ShopNav from '@/app/ui/shop/shopnav';
import Link from 'next/link';

export default async function Page() {
  const examples = await fetchExampleProducts();
  return (
    <Container>
      <main>
        <ShopNav />
        <h2>Custom Piece Gallery</h2>
        <p>These pieces are spoken for, but you can check out some other work we've done below.</p>
        <p>To place an order for a custom piece, complete our <Link href="/commissions">commissions form</Link>.</p>
        <CustomList examples={examples} />
      </main>
    </Container>
    );
}