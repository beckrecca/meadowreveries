import Container from '@/app/ui/container';
import { fetchNewProducts } from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';
import ShopNav from '@/app/ui/shop/shopnav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop Winter Holiday | Meadow Reveries',
  description: 'Handmade winter holiday goodies',
}

export default async function Page() {
  const products = await fetchNewProducts();
  return (
    <Container>
      <main>
        <ShopNav />
        <h2>Winter Holiday Goodies</h2>
        <ProductList products={products}/>
      </main>
    </Container>
    );
}