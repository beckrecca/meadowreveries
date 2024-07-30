import Container from '@/app/ui/container';
import Card from '@/app/ui/card';
import Subscribecard from '@/app/ui/subscribecard';

export default function Page() {
  return (
    <Container>
      <main>
        <h2 className="text-center text-aster text-2xl">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card
            cardBackground = "paper"
            headerBackground = "fern"
            headerColor  = "white"
            headerText = "Original Pieces"
            img = "/shop/shop_card_original.png"
            alt = "2D needle felted depiction of two geese watching a meteor pass in the night sky above."
          >
            <p>
              <strong>August 2024</strong> 
            </p>
            <p>
              Fantasies sculpted or painted with wool -- custom orders accepted.
            </p>
          </Card>
          <Card
            cardBackground = "paper"
            headerBackground = "fern"
            headerColor  = "white"
            headerText = "Pet Portraits"
            img = "/shop/shop_card_pet_portraits.png"
            alt = "2D needle felted depiction of the smiley face of Sylvie the yorkie poodle mix."
          >
            <p>
              <strong>August 2024</strong> 
            </p>
            <p> 
              Your darling cat or dog's face lovingly rendered in wool. A keepsake for you or a gift for a friend.
            </p>
          </Card>
          <Card
            cardBackground = "paper"
            headerBackground = "fern"
            headerColor = "white"
            headerText = "Full Borbs"
            img = "/shop/shop_card_handmade_borb.png"
            alt = "Pair of needle-felted Palestine sunbirds sculpted in borb style, displayed on a keffiyeh."
          >
            <p>
              <strong>August 2024</strong> 
            </p>
            <p> 
              Not the crafty type, but love borbs? We'll have finished borbs fancying a flight to your door.
            </p>
          </Card>
          <Card
            cardBackground = "paper"
            headerBackground = "fern"
            headerColor = "white"
            headerText = "Borb Kits"
            img = "/shop/shop_card_crafting_kit.png"
            alt = "Rolls of beautiful roving wool in shades of grey, black, yellow and rusty orange."
          >
            <p>
              <strong>September 2024</strong> 
            </p>
            <p>
              Everything you need to craft your dream borb, with
              a QR code to an exclusive <a href="/learn">tutorial</a>.
            </p>
          </Card>
        </div>
      </main>
    </Container>
  );
}
