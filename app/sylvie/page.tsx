import Container from '@/app/ui/container';
import CustomList from '@/app/ui/shop/customlist';
import { fetchSylviePortraits }  from '@/app/lib/data';
import Link from 'next/link';

export default async function Page() {
  const examples = await fetchSylviePortraits();
  return (
    <Container>
      <main>
        <h2>Remembering Sylvie</h2>
        <h3>201?-2024</h3>
        <p>Sylvie was an 11 pound yorkie poodle mix who inspired wool paintings after she passed.</p>
        <p>You can <Link href="/shop/handmade/pet-portrait">order a portrait of your own pet's face</Link> or <Link href="/commissions">request a commission</Link> for something special.</p>
        <CustomList examples={examples} />
      </main>
    </Container>
    );
}