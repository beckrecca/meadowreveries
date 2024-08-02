import Container from '@/app/ui/container';
import Addtocart from '@/app/ui//shop/addtocart';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import ProductImage from '@/app/ui/shop/productimage'
import { fetchHandmadeProducts,
        fetchImagesByProductID} 
        from '@/app/lib/data';

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
  const images = await fetchImagesByProductID(product.id);

  return (
    <Container>
      <Link href="/shop/handmade" className="text-sm text-right flex flex-row mb-1">
        <Image
          src="/icons/previous.png"
          alt="Navigate to previous image"
          height={24}
          width={24}
          />
        &nbsp; back to Shop
      </Link>
      <div>
        <div className="md:float-left mr-6">
          <ProductImage product={product} images={images}/>
        </div>
        <div>
          <h2>{product.name}</h2>
          <ul className="text-lg">
            <li>${product.price} (USD)</li>
          </ul>
          <Addtocart item={product}/>
          <div className="sm:max-w-[336px] md:max-w-prose">
            <h3>About</h3>
            <p className="whitespace-pre-line">
              {product.description}
              <br/>
            </p>
            <h3>Dimensions</h3>
            <p>
              {product.dimensions}
            </p>
            <p className="text-sm"><strong>Note</strong>: This purchase does not include display props like bases, dried flowers, or scarves.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}