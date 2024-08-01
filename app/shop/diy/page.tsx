import Container from '@/app/ui/container';
import ShopNav from '@/app/ui/shop/shopnav';
import Subscribeform from '@/app/ui/subscribeform';
import DiyComingSoon from '@/app/ui/shop/diy/diycomingsoon.tsx';

export default function Page() {
  return (
      <Container>
        <main>
          <ShopNav />
          <h2>Felting Kits</h2>
          <DiyComingSoon />
          <Subscribeform />
        </main>
      </Container>
    );
}