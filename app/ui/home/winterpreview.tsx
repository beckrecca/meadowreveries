import { fetchNewProductsPreview } from '@/app/lib/data';
import HomeList from '@/app/ui/home/homelist';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';

export default async function WinterPreview() {
  const products = await fetchNewProductsPreview();

  return (
    <div className="pb-4">
      <div className="mx-auto p-4">
        <h2 className="text-center normal-case m-2">Winter Holiday</h2>
        <HomeList products={products}/>
      </div>
      <div className="text-center m-2">
        <HomePreviewButton url="/shop/sale" text="Shop All" /> 
      </div>
    </div>
    );
}