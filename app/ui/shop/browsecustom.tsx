import { fetchExampleProducts } from '@/app/lib/data';
import CustomList from '@/app/ui/shop/customlist';
import Link from 'next/link';

export default async function BrowseCustom() {
        const examples = await fetchExampleProducts();
        return (
                <div className="mb-[96px] sm:mb-6">
                  <h2>Custom Piece Gallery</h2>
                  <p>These pieces are spoken for, but you can check out some other work we've done below.</p>
                  <p>To place an order for a custom piece, complete our <Link href="/commissions">commissions form</Link>.</p>
                  <CustomList examples={examples} />
                </div>
        );
}