export default function price({product}) {
	return (
		<>
			{
	          ((product.promoprice != null && product.promoprice != "" && product.promoprice != "null") && product.promoenabled) ?
	          <>
	          	<span className="line-through text-black/50">${product.price}</span>&nbsp;
	          	<span className="font-bold">${product.promoprice}</span>
	          </>
	          : 
	          <>
	          	${product.price}
	          </>
	        }
		</>
	);
}