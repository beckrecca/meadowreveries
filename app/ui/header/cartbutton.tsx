import Image from 'next/image';

export default function CartButton() {
	return (
		<button className="snipcart-checkout block mt-4 lg:inline-block lg:mt-0 p-2 rounded text-black bg-milkweed hover:text-black hover:bg-ladycardinal font-bold max-w-fit">
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