import Container from '@/app/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import ProductImage from '@/app/ui/shop/productpage/productimage'
import ProductDetails from '@/app/ui/shop/productpage/productdetails'
import { fetchDiyProducts,
        fetchImagesByProductID,
        fetchKitFibersByProductId
      } 
        from '@/app/lib/data';
import type { Metadata } from 'next';

export async function generateMetadata({params: {productpage}}: { params: { productpage: string } }) {
  const products = await fetchDiyProducts();
  const product = products.find(p => p.id.toString() === productpage)
  return {
    title: "Shop " + product.name + " | Meadow Reveries",
  }
}

export async function generateStaticParams() {
  const products = await fetchDiyProducts();
  return products.map((p) => ({
    productpage: p.id.toString(),
  }))
}

export default async function ProductPage({params: {productpage}}: { params: { productpage: string } }) {
  const products = await fetchDiyProducts();
  const product = products.find(p => p.id.toString() === productpage)
  if (!product) {
    notFound()
  }
  const images = await fetchImagesByProductID(product.id);
  const fibers = await fetchKitFibersByProductId(product.id);

  return (
    <Container>
      <Link href="/shop/diy" className="text-sm text-right flex flex-row mb-1">
        <Image
          src="/icons/previous.png"
          alt="Navigate to previous page"
          height={24}
          width={24}
          />
        &nbsp; back to Shop
      </Link>
      <div>
        <div className="md:float-left mr-6">
          <ProductImage product={product} images={images}/>
        </div>
        <ProductDetails product={product} fibers={fibers} />
      </div>
      <div className="clear-both">
        <p className="text-sm pt-4"><strong>Note</strong>: This purchase does not include display props like bases, dried flowers, or scarves.</p>
      </div>
    </Container>
  )
}