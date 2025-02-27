import Container from '@/app/ui/container';
import { fetchDiyProducts }  from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';
import ShopNav from '@/app/ui/shop/shopnav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop Crafting Kits | Meadow Reveries',
  description: 'Needle-felting crafting kits - make your own borb',
}

export default async function Page() {
  const products = await fetchDiyProducts();
  return (
      <Container>
        <main>
          <ShopNav />
          <h2>Felting Kits</h2>
          <ProductList products={products}/>
        </main>
      </Container>
    );
}