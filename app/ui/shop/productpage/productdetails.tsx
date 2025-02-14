import Link from 'next/link';
import Addtocart from '@/app/ui/shop/productpage/addtocart';
import KitDetails from '@/app/ui/shop/diy/kitdetails';
import Price from '@/app/ui/shop/price';

export default function ProductDetails( {product, fibers} ) {
	return (
		<div className="overflow-hidden">
      <h2>{product.name}</h2>
      <ul className="text-lg">
        <li><Price product={product} /> (USD)</li>
      </ul>
      <Addtocart item={product}/>
      <div className="max-w-[384px]">
        <h3>About</h3>
        <p className="whitespace-pre-line">
          {product.description}
        </p>
        {
          (product.id == 'pet-portrait') ?
          <p>
            <a href='https://tally.so/r/3NJkGO' target='_blank'>Upload your pet's photo with this form</a>.
          </p>
          : ""
        }
        {
          (product.id == 'pet-figurine') ?
          <p>
            <a href='https://tally.so/r/3xlMMJ' target='_blank'>Upload your pet's photo with this form</a>.
          </p>
          : ""
        }
        <h3>Dimensions</h3>
        <p>
          {product.dimensions}
        </p>
        {
          (product.producttype == 'diy') ?
          <KitDetails fibers={fibers}/>
          : ""
        }
      </div>
    </div>
	);
}