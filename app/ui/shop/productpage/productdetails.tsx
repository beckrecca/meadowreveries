import Addtocart from '@/app/ui/shop/productpage/addtocart';

export default function ProductDetails( {product} ) {
	return (
		<div>
          <h2>{product.name}</h2>
          <ul className="text-lg">
            <li>${product.price} (USD)</li>
          </ul>
          <Addtocart item={product}/>
          <div className="sm:max-w-[336px] md:max-w-prose">
            <h3>About</h3>
            <p className="whitespace-pre-line">
              {product.description}
              <br/>
            </p>
            <h3>Dimensions</h3>
            <p>
              {product.dimensions}
            </p>
          </div>
        </div>
	);
}