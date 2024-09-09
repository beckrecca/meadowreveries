import Link from 'next/link';
import FiberDetails from '@/app/ui/shop/diy/fiberdetails';
import { fetchKitFibersByProductId } from '@/app/lib/data';

export default async function KitDetails( {productid} ) {
	const fibers = await fetchKitFibersByProductId(productid);
	return (
		<>
            <h3>Contents</h3>
            <ul className="list-disc list-inside">
              <li>Foam block felting pad</li>
              <li>Felting needle &nbsp;
                <span className="bg-goldenrod text-xs sm:text-sm p-1 rounded">
                   Warning: <Link href="/learn/needle" className="text-black">Sharp</Link>!
                </span></li>
              <li>3/8 ounces of felting wool fiber: colors listed below</li>
              <li>Included: glass bead eyes (Opt out in cart to save $.50!)</li>
            </ul>
            <FiberDetails fibers={fibers} />
            <hr className="my-4"/>
            <h3>Warning</h3>
            <p><Link href="/learn/needle">Felting needles</Link> are <strong>sharp</strong>. 
            Please use caution. Felting kits are not recommended for young children or those with limited manual dexterity.</p>
        </>
	);
}