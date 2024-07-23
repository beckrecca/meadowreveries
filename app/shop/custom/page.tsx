import Container from '@/app/ui/container';
import CustomList from '@/app/ui/shop/customlist';
import { fetchExampleProducts }  from '@/app/lib/data';
import Link from 'next/link';

export default async function Page() {
  const examples = await fetchExampleProducts();
  return (
    <Container>
      <h2>Example Gallery</h2>
      <CustomList examples={examples} />
    </Container>
    );
}