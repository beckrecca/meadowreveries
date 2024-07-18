import Container from '@/app/ui/container';
import Addtocart from '@/app/ui/addtocart';
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

  return (
    <Container>
      <div className="md:float-left mr-6 md:mb-10">
        <Image
          src={item.image}
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
        <Addtocart item={item}/>
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