export default function Addtocart({ item }) {
	const itemURL = "/shop/" + item.producttype + '/' + item.id;

	if (item.available == true) { // if this item is available
      if (item.custom1name == "") { // if there's no custom metadata
        return (
          <button 
            className="snipcart-add-item bg-milkweed text-black border border-seed hover:bg-goldenrod mx-auto my-2 p-4 rounded font-bold w-48"
            data-item-id={item.id}
            data-item-url={itemURL}
            data-item-price={item.price}
            data-item-description={item.description}
            data-item-image={item.image}
            data-item-name={item.name}
            data-item-weight={item.weightingrams}
            >
            Add to cart
          </button>
        );
      }
      else if (item.custom1type == "readonly") { // if there's readonly metadata
        return (
          <button 
            className="snipcart-add-item bg-milkweed text-black border border-seed hover:bg-goldenrod mx-auto my-2 p-4 rounded font-bold w-48"
            data-item-id={item.id}
            data-item-url={itemURL}
            data-item-price={item.price}
            data-item-description={item.description}
            data-item-image={item.image}
            data-item-name={item.name}
            data-item-custom1-name={item.custom1name}
            data-item-custom1-type={item.custom1type}
            data-item-custom1-value={item.custom1value}
            data-item-weight={item.weightingrams}
            >
            Add to cart
          </button>
        );
      }
      else if (item.custom1options != "" && item.custom1options != null && item.custom1options != "null") { // if there are custom metadata options
        return (
          <button 
            className="snipcart-add-item bg-milkweed text-black border border-seed hover:bg-goldenrod mx-auto my-2 p-4 rounded font-bold w-48"
            data-item-id={item.id}
            data-item-url={itemURL}
            data-item-price={item.price}
            data-item-description={item.description}
            data-item-image={item.image}
            data-item-name={item.name}
            data-item-custom1-name={item.custom1name}
            data-item-custom1-options={item.custom1options}
            data-item-weight={item.weightingrams}
            >
            Add to cart
          </button>
        )
      }
    }
    else {
      return (
        <div className="text-aster font-bold p-4">This item is unavailable.</div>
      );
    }
}