import Container from '@/app/ui/container';
import { fetchListedHandmadeProducts }  from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';

export default async function Page() {
  const products = await fetchListedHandmadeProducts();
  return (
    <Container>
      <h2>Handmade products</h2>
      <ProductList products={products}/>
    </Container>
    );
}