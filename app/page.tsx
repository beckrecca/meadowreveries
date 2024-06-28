import Card from '@/app/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[url('bg-main.png')] sm:bg-left-bottom md:bg-center lg:bg-top bg-cover bg-no-repeat min-h-screen p-6">
      <main>
        <Card
          cardBackground = "paper"
          headerBackground = "milkweed"
          headerText = "Be an early bird"
          img = "/card_CTA_subscribe.png"
          alt = "A needle-felted, round female Northern Cardinal sits on some rocks in front of a wild flower garden."
        >
            <h3 className="my-2 text-center"><strong>We're still growing!</strong></h3>
            <div className="m-6 text-center">
              <Link href="https://subscribepage.io/meadowreveries" target="_blank" className="text-xl bg-milkweed text-black border border-seed hover:text-black hover:border-aster hover:bg-ladycardinal p-4 rounded">Subscribe</Link>
            </div>
            <p><a href="https://subscribepage.io/meadowreveries" className="text-aster" target="_blank">Subscribe to our mailing list</a>. We'll email you once our borb crafting kits and handmade pieces, <strong>daydreams made in felt</strong>, take flight.</p>
        </Card>
      </main>
    </div>
  );
}
