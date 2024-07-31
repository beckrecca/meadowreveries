import Container from '@/app/ui/container';
import ShopNav from '@/app/ui/shop/shopnav';
import Subscribeform from '@/app/ui/subscribeform';

export default function Page() {
  return (
      <Container>
        <main>
          <ShopNav />
          <h2>Needle Felting Kits</h2>
          <p>We're working on it, so sign up for updates.</p>
          <Subscribeform />
        </main>
      </Container>
    );
}