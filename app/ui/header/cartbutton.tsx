import Image from 'next/image';
import CartCount from '@/app/ui/header/cartcount';

export default function CartButton() {
	return (
		<button href="#" className="snipcart-checkout block mt-4 lg:inline-block lg:mt-0 p-2 rounded text-black bg-milkweed border border-seed hover:text-black hover:bg-ladycardinal hover:border-aster font-bold max-w-fit">
	        <Image 
	        className="float-left pt-1"
			src="/icons/shopping-cart.png" 
			alt="Shopping Cart"
			height="16"
			width="16"
			/> 
			&nbsp; Cart
			&nbsp;(<span className="snipcart-items-count"></span>)
	  	</button>
	);
}