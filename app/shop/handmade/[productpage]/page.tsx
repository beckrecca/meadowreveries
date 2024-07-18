import Container from '@/app/ui/container';
import products from '@/app/products.json'
import {notFound} from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  return products.map((p) => ({
    productpage: p.id.toString(),
  }))
}

export default function ProductPage({params: {productpage}}: { params: { productpage: string } }) {
  const item = products.find(p => p.id.toString() === productpage)
  if (!item) {
    notFound()
  }
  const imgsrc = "/shop/" + item.id + "01.png";
  const itemurl = "/shop/handmade/" + item.id;

  return (
    <Container>
      <div className="md:float-left mr-6 md:mb-10">
        <Image
          src={imgsrc}
          alt="Text description of image"
          height="336"
          width="336"
          className="rounded"
        />
      </div>
      <div>
        <h2>{item.name}</h2>
        <ul className="text-lg">
          <li>${item.price} (USD)</li>
        </ul>
        <button 
          className="snipcart-add-item bg-milkweed text-black hover:bg-goldenrod mx-auto my-2 p-4 rounded font-bold w-48"
          data-item-id={item.id}
          data-item-url={itemurl}
          data-item-price={item.price}
          data-item-description={item.description}
          data-item-image={imgsrc}
          data-item-name={item.name}
          >
          Add to cart
        </button>
        <div className="max-w-96 md:max-w-prose">
          <p>
            {item.description}
          </p>
          <p className="text-sm">
            As a handmade piece, the product you receive may differ slightly in color,
            shape, or size from the product pictured. No refunds or returns, all sales are final.
          </p>
        </div>
      </div>

    </Container>
  )
}