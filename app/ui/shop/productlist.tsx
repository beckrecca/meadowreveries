import ThumbnailLink from '@/app/ui/shop/thumbnaillink'

export default function ProductList( {products} ) {
	return (
		<div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
			{products.map((product) => {
			  return (
			    <div key={product.id} className="relative">
			      <ThumbnailLink product={product} />
			    </div>
			  );
			})}
		</div>
	);
}