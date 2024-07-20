import Container from '@/app/ui/container';
import { fetchListedHandmadeProducts }  from '@/app/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import ProductList from '@/app/ui/productlist';

export default async function Page() {
  const products = await fetchListedHandmadeProducts();
  return (
    <Container>
      <h2>Handmade products</h2>
      <ProductList products={products}/>
    </Container>
    );
}