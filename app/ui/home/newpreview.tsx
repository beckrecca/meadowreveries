import { fetchNewProducts } from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';

export default async function NewPreview() {
  const products = await fetchNewProducts();
  return (
    <div className="my-8">
      <div className="mx-auto p-4">
        <h2 className="text-center normal-case m-2">What's New</h2>
        <ProductList products={products}/>
      </div>
      <div className="text-center m-2">
        <HomePreviewButton url="/shop/" text="Show me more" /> 
      </div>
    </div>
    );
}