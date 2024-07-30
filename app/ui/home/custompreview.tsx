import { fetchExampleCustomPreview }  from '@/app/lib/data';
import CustomList from '@/app/ui/shop/customlist';
import Link from 'next/link';

export default async function CustomPreview() {
  const examples = await fetchExampleCustomPreview();
  return (
    <div className="mx-auto p-4">
      <h2 className="text-center normal-case m-2">Want a Custom Order?</h2>
      <p className="bg-ladycardinal p-2 text-lg rounded">To place an order for a custom piece, email <strong>orders@meadowreveries.com</strong>. <Link href="/shop/custom">Browse the example gallery</Link>.</p>
      <CustomList examples={examples} />
    </div>
    );
}