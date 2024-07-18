export default function Addtocart({ item }) {
	const itemURL = "/shop/handmade/" + item.id

	if (item.available == true) { // if this item is available
      if (item.custom1Name == "") { // if there's no custom metadata
        return (
          <button 
            className="snipcart-add-item bg-milkweed text-black hover:bg-goldenrod mx-auto my-2 p-4 rounded font-bold w-48"
            data-item-id={item.id}
            data-item-url={itemURL}
            data-item-price={item.price}
            data-item-description={item.description}
            data-item-image={item.image}
            data-item-name={item.name}
            >
            Add to cart
          </button>
        )
      }
      else if (item.custom1Type == "readonly") { // if there's readonly metadata
        return (
          <button 
            className="snipcart-add-item bg-milkweed text-black hover:bg-goldenrod mx-auto my-2 p-4 rounded font-bold w-48"
            data-item-id={item.id}
            data-item-url={itemURL}
            data-item-price={item.price}
            data-item-description={item.description}
            data-item-image={item.image}
            data-item-name={item.name}
            data-item-custom1-name={item.custom1Name}
            data-item-custom1-type={item.custom1Type}
            data-item-custom1-value={item.custom1Value}
            >
            Add to cart
          </button>
        )
      }
      else if (item.custom1Options != "") { // if there are custom metadata options
        return (
          <button 
            className="snipcart-add-item bg-milkweed text-black hover:bg-goldenrod mx-auto my-2 p-4 rounded font-bold w-48"
            data-item-id={item.id}
            data-item-url={itemURL}
            data-item-price={item.price}
            data-item-description={item.description}
            data-item-image={item.image}
            data-item-name={item.name}
            data-item-custom1-name={item.custom1Name}
            data-item-custom1-options={item.custom1Options}
            >
            Add to cart
          </button>
        )
      }
    }
    else {
      return (
        <div className="text-aster font-bold p-4">Coming Soon.</div>
      )
    }
}