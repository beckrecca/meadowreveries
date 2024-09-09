import Link from 'next/link';
import Addtocart from '@/app/ui/shop/productpage/addtocart';
import KitDetails from '@/app/ui/shop/diy/kitdetails';
import { fetchKitFibersByProductId } from '@/app/lib/data';

export default function ProductDetails( {product} ) {
	return (
		<div className="overflow-hidden">
          <h2>{product.name}</h2>
          <ul className="text-lg">
            <li>${product.price} (USD)</li>
          </ul>
          <Addtocart item={product}/>
          <div className="sm:max-w-[336px] md:max-w-prose">
            <h3>About</h3>
            <p className="whitespace-pre-line">
              {product.description}
            </p>
            <h3>Dimensions</h3>
            <p>
              {product.dimensions}
            </p>
            {
              (product.producttype == 'diy') ?
              <KitDetails productid={product.id} />
              : ""
            }
          </div>
        </div>
	);
}