import Link from 'next/link';
import Container from '@/app/ui/container';
import ShopNav from '@/app/ui/shop/shopnav';
import BrowseHandmade from '@/app/ui/shop/browsehandmade';
import BrowseDiy from '@/app/ui/shop/browsediy';
import BrowseCustom from '@/app/ui/shop/browsecustom';

export default function Page() {
  return (
    <Container>
      <main>
        <ShopNav/>
        <BrowseHandmade />
        <BrowseDiy />
        <BrowseCustom />
      </main>
    </Container>
  );
}
