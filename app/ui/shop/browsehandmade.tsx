import { fetchListedHandmadeProducts } from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';

export default async function BrowseHandmade() {
        const products = await fetchListedHandmadeProducts();
        return (
                <div className="mb-[96px] sm:mb-6">
                        <h2>Handmade Pieces</h2>
                        <p>Ready made, ready for you to take home.</p>
                        <ProductList products={products}/>
                </div>
        );
}