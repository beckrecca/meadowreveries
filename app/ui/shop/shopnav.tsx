import ShopNavButton from '@/app/ui/shop/shopnavbutton';

export default function ShopNav() {
	return (
		<div className="flex flex-row mb-4">
          <ShopNavButton url="/shop/handmade" text="Handmade" />
          <ShopNavButton url="/shop/diy" text="Felting Kits" />
          <ShopNavButton url="/shop/custom" text="Custom Orders" />
          <ShopNavButton url="/shop/" text="View All" />
        </div>
	);

}