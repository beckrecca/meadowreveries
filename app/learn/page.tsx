import Container from '@/app/ui/container';
import Card from '@/app/ui/card';
import Subscribecard from '@/app/ui/subscribecard';

export default function Page() {
  return (
    <Container>
      <main>
        <h2 className="text-center text-aster text-2xl">Coming Soon</h2>
        <div className="flex flex-wrap sm:mx-auto">
          <Card
            cardBackground = "paper"
            headerBackground = "ladycardinal"
            headerText = "Needle Felting Basics"
            img = "/learn/learn_basics_example.png"
            alt = "Above a wool felting mat, a left hand holds a borb base shape in white wool, and a right hand holds a completed needle-felted chickadee borb sculpter. In the background, partially obscured needle-felted rabbit, bluebird and squirrel watch."
          >
            <p>
              <strong>Summer 2024:</strong> 
            </p>
            <p>
              Basic tutorial content available for all: What is needle felting anyway? How does it work? How do you shape wool with a needle?
            </p>
          </Card>
          <Card
            cardBackground = "paper"
            headerBackground = "ladycardinal"
            headerText = "Tutorials for kits"
            img = "/learn/learn_tutorials_example.png"
            alt = "An incomplete needle-felted American robin has a white spot of wool attached to its face's eye place with a felting needle."
          >
            <p>
              <strong>Summer 2024:</strong> 
            </p>
            <p> 
              Purchase a borb crafting kit from our <a href="/shop">Shop</a>, and we'll email you an exclusive link with all the instructions you need, and include a QR code in your kit too.
            </p>
          </Card>
        </div>
        <Subscribecard />
      </main>
    </Container>
  );
}
