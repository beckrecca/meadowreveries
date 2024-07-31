import { fetchExampleProducts } from '@/app/lib/data';
import CustomList from '@/app/ui/shop/customlist';

export default async function BrowseCustom() {
        const examples = await fetchExampleProducts();
        return (
                <div>
                  <h2>Custom Piece Gallery</h2>
                  <p>These pieces are spoken for, but you can check out some other work we've done below.</p>
                  <p>To place an order for a custom piece, email <strong>orders@meadowreveries.com</strong>.</p>
                  <CustomList examples={examples} />
                </div>
        );
}