import Container from '@/app/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import ProductImage from '@/app/ui/shop/productpage/productimage'
import ProductDetails from '@/app/ui/shop/productpage/productdetails'
import { fetchHandmadeProducts,
        fetchImagesByProductID} 
        from '@/app/lib/data';
import type { Metadata } from 'next';

export async function generateMetadata({params: {productpage}}: { params: { productpage: string } }) {
  const products = await fetchHandmadeProducts();
  const product = products.find(p => p.id.toString() === productpage)
  let productTitle = "Shop | Meadow Reveries";
  if (product !== undefined && product !== null) {
    productTitle = "Shop " + product.name + " | Meadow Reveries";
  }
  return {
    title: productTitle,
  }
}

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
        <ProductDetails product={product} fibers={null}/>
      </div>
      <div className="clear-both">
        <p className="text-sm pt-4"><strong>Note</strong>: This purchase does not include display props like bases, dried flowers, etc.</p>
      </div>
    </Container>
  )
}