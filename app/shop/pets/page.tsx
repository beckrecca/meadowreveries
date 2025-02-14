import Container from '@/app/ui/container';
import { fetchPetProducts } from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';
import ShopNav from '@/app/ui/shop/shopnav';

export default async function Page() {
  const products = await fetchPetProducts();
  return (
    <Container>
      <main>
        <ShopNav />
        <h2>Pets are Family</h2>
        <ProductList products={products}/>
      </main>
    </Container>
    );
}