import { fetchSaleProductsPreview } from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';

export default async function SalePreview() {
  const products = await fetchSaleProductsPreview();
  let heading = "What's on sale";
  if (products.length > 0) {
    heading = products[0].promoname;
  }
  return (
    <div className="pb-4">
      <div className="mx-auto p-4">
        <h2 className="text-center normal-case m-2">{heading}</h2>
        <ProductList products={products}/>
      </div>
      <div className="text-center m-2">
        <HomePreviewButton url="/shop/sale" text="Show me more" /> 
      </div>
    </div>
    );
}