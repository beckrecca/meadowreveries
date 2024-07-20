import ThumbnailLink from '@/app/ui/thumbnaillink'

export default function ProductList( {products} ) {
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
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