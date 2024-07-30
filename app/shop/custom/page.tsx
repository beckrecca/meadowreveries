import Container from '@/app/ui/container';
import CustomList from '@/app/ui/shop/customlist';
import { fetchExampleProducts }  from '@/app/lib/data';

export default async function Page() {
  const examples = await fetchExampleProducts();
  return (
    <Container>
      <h2>Example Custom Piece Gallery</h2>
      <p>To place an order for a custom piece, email <strong>orders@meadowreveries.com</strong>. These orders might take a little longer to complete.</p>
      <CustomList examples={examples} />
    </Container>
    );
}