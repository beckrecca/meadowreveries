import Container from '@/app/ui/container';
import {notFound} from 'next/navigation';
import { fetchCategories,
         fetchProductsByCategoryName }  from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';
import ShopNav from '@/app/ui/shop/shopnav';
import type { Metadata } from 'next';

export async function generateMetadata({params: {category}}: { params: { category: string } }) {
  const categories = await fetchCategories();
  const cat = categories.find(c => c.name.toString() === category)
  let productTitle = "Shop | Meadow Reveries";
  if (cat !== undefined && cat !== null) {
    productTitle = "Shop " + cat.name + " | Meadow Reveries";
  }
  return {
    title: productTitle,
  }
}

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((c) => ({
    category: c.name.toString(),
  }))
}

export default async function Category({params: {category}}: { params: { category: string } }) { {
  const categories = await fetchCategories();
  const cat = categories.find(c => c.name.toString() === category)
  if (!cat) {
    notFound()
  }
  const products = await fetchProductsByCategoryName(cat.name);
  return (
    <Container>
      <main>
        <ShopNav />
        <h2>{cat.name}</h2>
        <ProductList products={products}/>
      </main>
    </Container>
    );
  }
}