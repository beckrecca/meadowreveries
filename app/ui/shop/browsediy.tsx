import { fetchDiyProducts }  from '@/app/lib/data';
import ProductList from '@/app/ui/shop/productlist';
import ExternalLink from '@/app/ui/externallink';

export default async function BrowseDiy() {
        const products = await fetchDiyProducts();
        return (
                <div className="my-4">
                  <h2>Felting Kits</h2>
                  <div>
                        More kits coming throughout Fall 2024. &nbsp;
                        <ExternalLink url="https://subscribepage.io/meadowreveriesproductupdates" text="Sign up for shop updates." />
                  </div>
                  <ProductList products={products}/>
                </div>
        );
}