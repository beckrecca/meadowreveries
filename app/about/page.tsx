import Container from '@/app/ui/container'

export default function Page() {
  return (
    <Container>
        <img 
          className = "md:float-right mx-4 rounded"
          src="/about/about_artist.jpg" 
          alt="Rebecca Doris stands in the meadows with a sunset in the background, facing the camera and smiling laughing." 
        />
      <p>
        In rural-suburban Pioneer Valley, Massachusetts, former hayfields offer sustenance and 
        shelter to wildlife and pollinators, and respite to neighboring residents as a public
        conservation area. 
        Surrounded by 
        pine-dominant woods, the Meadows share borders with a vernal pool and wetland areas. 

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
        We aspire to feed your daydreams with our needle-felted celebrations of the Meadows,
        with special attention to its bird population. <em>Borbs</em> - very round birds,
        even <a href="https://www.audubon.org/news/whats-difference-between-borb-and-floof" target="_blank">studied by the Audubon society</a> - are a perfect point of entry to the relaxing
        art of needle-felting. We'll grow and offer more as you dream, too.
      </p>
    </Container>
    );
}