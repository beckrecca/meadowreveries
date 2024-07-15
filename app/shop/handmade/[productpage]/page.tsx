import Container from '@/app/ui/container';
import products from '@/app/products.json'
import {notFound} from "next/navigation";

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
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </Container>
  )
}