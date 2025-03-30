import ProductPageSubscribe from '@/app/ui/shop/productpage/productpagesubscribe';

export default function Addtocart({ item }) {
	const itemURL = "/shop/" + item.producttype + '/' + item.id;
  let price = item.price;
  if ((item.promoprice != null && item.promoprice != "" && item.promoprice != "null") && item.promoenabled) {
    price = item.promoprice;
  }

	if (item.available == true) { // if this item is available
      if (item.custom1name == "" || item.custom1name == null) { // if there's no custom metadata
        return (
          <button 
            className="snipcart-add-item rounded text-black bg-milkweed hover:text-black hover:bg-ladycardinal mx-auto my-2 p-3 font-bold w-48"
            data-item-id={item.id}
            data-item-url={itemURL}
            data-item-price={price}
            data-item-description={item.description}
            data-item-image={item.image}
            data-item-name={item.name}
            data-item-weight={item.weightingrams}
            data-item-has-taxes-included="true"
            >
            Add to cart
          </button>
        );
      }
      else if (item.custom1type == "readonly") { // if there's readonly metadata
        return (
          <button 
            className="snipcart-add-item rounded text-black bg-milkweed hover:text-black hover:bg-ladycardinal mx-auto my-2 p-3 font-bold w-48"
            data-item-id={item.id}
            data-item-url={itemURL}
            data-item-price={price}
            data-item-description={item.description}
            data-item-image={item.image}
            data-item-name={item.name}
            data-item-custom1-name={item.custom1name}
            data-item-custom1-type={item.custom1type}
            data-item-custom1-value={item.custom1value}
            data-item-weight={item.weightingrams}
            data-item-has-taxes-included="true"
            >
            Add to cart
          </button>
        );
      }
      else if (item.custom1options != "" && item.custom1options != null && item.custom1options != "null") { // if there are custom metadata options
        return (
          <button 
            className="snipcart-add-item rounded text-black bg-milkweed hover:text-black hover:bg-ladycardinal mx-auto my-2 p-3 font-bold w-48"
            data-item-id={item.id}
            data-item-url={itemURL}
            data-item-price={price}
            data-item-description={item.description}
            data-item-image={item.image}
            data-item-name={item.name}
            data-item-custom1-name={item.custom1name}
            data-item-custom1-options={item.custom1options}
            data-item-weight={item.weightingrams}
            data-item-has-taxes-included="true"
            >
            Add to cart
          </button>
        )
      }
    }
    else {
      return (
        <ProductPageSubscribe />
      );
    }
}