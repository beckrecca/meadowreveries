import Container from '@/app/ui/container';
import { fetchSaleProducts }  from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';
import ShopNav from '@/app/ui/shop/shopnav';

export default async function Page() {
  const products = await fetchSaleProducts();
  let heading = "What's on sale";
  if (products.length > 0) {
    heading = products[0].promoname;
  }
  return (
    <Container>
      <main>
        <ShopNav />
        <h2>{heading}</h2>
        <ProductList products={products}/>
      </main>
    </Container>
    );
}