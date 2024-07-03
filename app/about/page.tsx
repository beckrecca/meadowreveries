import Image from 'next/image';
import Container from '@/app/ui/container';
import Subscribeform from '@/app/ui/subscribeform';

export default function Page() {
  return (
    <Container>
      <h2>Contact Us</h2>
      <p>Email us at <span className="font-bold">hello@meadowreveries.com</span> or 
      follow us on <a href="https://www.instagram.com/meadowreveries" target="_blank">Instagram</a>.</p>
      <h2>Inspiration</h2>
        <Image 
          className = "md:float-right mx-4 rounded"
          src="/about/about_artist.jpg" 
          alt="Rebecca Doris stands in the meadows with a sunset in the background, facing the camera and smiling laughing." 
          width="336"
          height="300"
        />
      <p>
        In rural-suburban Pioneer Valley, Massachusetts, former hayfields offer sustenance and 
        shelter to wildlife and pollinators, and respite to neighboring residents as a public
        conservation area. 
        Surrounded by pine-dominant woods, the Meadows share borders with a vernal pool and wetland areas. 

        Birds, rabbits, deer, coyote, black bears, foxes, possums, and even a river otter tread this
        habitat. In summer, it grows tall and attracts many bees,
        butterflies, moths, and dragonflies.
      </p>
      <p>
        It's Rebecca's happy place.
      </p>
      <p>
        Our name <strong>Meadow Reveries</strong> draws inspiration from local poet 
        Emily Dickinson's 
        poem <a href="https://poets.org/poem/make-prairie-1755" target="_blank">To make a prairie</a>:
      </p>
      <blockquote className="m-4 italic">
        To make a prairie it takes a clover and one bee, <br />
        One clover, and a bee. <br />
        And revery. <br />
        The revery alone will do, <br />
        If bees are few.
      </blockquote>
      <p>
        Our ramblings in the Meadows influence our fiber art, especially the bird population.
        May our needle-felted daydreams transport you to a happy place, too.
      </p>
      <Subscribeform />
    </Container>
    );
}