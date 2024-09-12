import { fetchDiyProducts }  from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';

export default async function BrowseDiy() {
        const products = await fetchDiyProducts();
        return (
                <div className="my-4">
                  <h2>Felting Kits</h2>
                  <ProductList products={products}/>
                </div>
        );
}