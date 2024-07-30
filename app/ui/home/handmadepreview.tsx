import { fetchHandmadeProductsPreview }  from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';

export default async function HandmadePreview() {
  const products = await fetchHandmadeProductsPreview();
  return (
    <div className="mx-auto p-4">
      <h2 className="text-center normal-case m-2">Browse Handmade Pieces</h2>
      <ProductList products={products}/>
    </div>
    );
}