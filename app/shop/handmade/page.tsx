import Container from '@/app/ui/container';
import { fetchListedHandmadeProducts }  from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';
import ShopNav from '@/app/ui/shop/shopnav';

export default async function Page() {
  const products = await fetchListedHandmadeProducts();
  return (
    <Container>
      <main>
        <ShopNav />
        <h2>Handmade Pieces</h2>
        <ProductList products={products}/>
      </main>
    </Container>
    );
}