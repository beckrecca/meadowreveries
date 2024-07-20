import Container from '@/app/ui/container';
import Addtocart from '@/app/ui/addtocart';
import {notFound} from 'next/navigation';
import Image from 'next/image';
import { fetchHandmadeProducts } from '@/app/lib/data';

export async function generateStaticParams() {
  const products = await fetchHandmadeProducts();
  return products.map((p) => ({
    productpage: p.id.toString(),
  }))
}

export default async function ProductPage({params: {productpage}}: { params: { productpage: string } }) {
  const products = await fetchHandmadeProducts();
  const product = products.find(p => p.id.toString() === productpage)
  if (!product) {
    notFound()
  }

  return (
    <Container>
      <div className="md:float-left mr-6 md:mb-10">
        <Image
          src={product.image}
          alt={product.alt}
          height="336"
          width="336"
          className="rounded"
        />
      </div>
      <div>
        <h2>{product.name}</h2>
        <ul className="text-lg">
          <li>${product.price} (USD)</li>
        </ul>
        <Addtocart item={product}/>
        <div className="max-w-96 md:max-w-prose">
          <p>
            {product.description}
          </p>
          <p>
            {product.dimensions}
          </p>
        </div>
      </div>

    </Container>
  )
}