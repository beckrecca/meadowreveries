import Container from '@/app/ui/container';
import CustomList from '@/app/ui/shop/customlist';
import { fetchExampleProducts }  from '@/app/lib/data';
import ShopNav from '@/app/ui/shop/shopnav';

export default async function Page() {
  const examples = await fetchExampleProducts();
  return (
    <Container>
      <main>
        <ShopNav />
        <h2>Custom Piece Gallery</h2>
        <p>To place an order for a custom piece, email <strong>orders@meadowreveries.com</strong>. These orders might take a little longer to complete.</p>
        <CustomList examples={examples} />
      </main>
    </Container>
    );
}