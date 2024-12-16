import Container from '@/app/ui/container';
import { fetchSaleProducts }  from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';
import ShopNav from '@/app/ui/shop/shopnav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop Sale | Meadow Reveries',
  description: 'Handmade needle-felted goods on sale',
}

export default async function Page() {
  const products = await fetchSaleProducts();
  let heading = "What's on sale";
  let sale = false;
  if (products.length > 0) {
    sale = true;
    heading = products[0].promoname;
  }
  return (
    <Container>
      <main>
        <ShopNav />
        <h2>{heading}</h2>
        {sale ? "" : 
          <div>
          <p><a href="https://subscribepage.io/meadowreveries" target="_blank">Subscribe to our mailing list</a> to be updated as soon as the next sale starts!</p>
          </div>
         }
        <ProductList products={products}/>
      </main>
    </Container>
    );
}