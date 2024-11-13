import { fetchHandmadeProductsPreview }  from '@/app/lib/data';
import HomeList from '@/app/ui/home/homelist';
import HomePreviewButton from '@/app/ui/home/homepreviewbutton';

export default async function HandmadePreview() {
  const products = await fetchHandmadeProductsPreview();
  return (
    <div className="my-8">
      <div className="mx-auto p-4">
        <h2 className="text-center normal-case m-2">Browse Handmade Pieces</h2>
        <HomeList products={products}/>
      </div>
      <div className="text-center m-2">
        <HomePreviewButton url="/shop/handmade" text="Show me more" /> 
      </div>
    </div>
    );
}