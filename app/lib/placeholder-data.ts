export { products, images };

const products = [
  {
    name: "Custom Pet Portrait",
    id: "pet-portrait",
    price: 96,
    description: "Your beloved pet's face rendered in wool within an 8 inch embroidery frame.",
    productType: "handmade",
    image: "/shop/pet-portrait01.png",
    alt: "Close up of a wool painting of the faces of two rottweiler dogs, Vanya and Sheba. Vanya on the left is looking up with head tilted, hopeful. Sheba on the right is smiling with bright eyes and tongue out. There are pink hearts floating among them.",
    dimensions: "Approximate weight 2-2.5 ounces, in an 8 inch embroidery circular embroidery frame. Thickness varies on the detail and depth of the work, starting at approximately 1.5mm.",
    custom1Name: "Next Steps",
    custom1Options: "",
    custom1Type: "readonly",
    custom1Value: "Email orders@meadowreveries.com with a clear photo of your pet's face looking towards the camera.",
    available: true,
    unlisted: false
  },
  {
    name: "Handmade Black-chapped Chickadee",
    id: "handmade-bcch",
    price: 48,
    description: "Borb-shaped black-capped chickadee sculpted in wool with glass bead eyes and wire feets.",
    productType: "handmade",
    image: "/shop/handmade-bcch01.png",
    alt: "A needle-felted black-capped chickadee sits on a half inch section of a branch, facing 3/4 towards the left. A dried spray of goldenrod lays in the background. Its belly is white with buff sides, its face white, its goatee black, its beak black, its cap black, its wings grey.",
    dimensions: "Approximate weight 1/8-1/4 ounces, diameter varies from 1.5 to 2 inches, height varies from 2-3 inches.",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: true,
    unlisted: false
  },
  {
    name: "Handmade American Robin",
    id: "handmade-amro",
    price: 48,
    description: "Borb-shaped American robin sculpted in wool with glass bead eyes and wire feets.",
    productType: "handmade",
    image: "/shop/handmade-amro01.png",
    alt: "A needle-felted American Robin sits on a half inch section of a branch faces 1/4 left towards the camera. A dried spray of New England aster lies behind it. Its head is black, its eyes circled with white, its breast rusty orange, its wings grey.",
    dimensions: "Approximate weight 1/8-1/4 ounces, diameter varies from 1.5 to 2 inches, height varies from 2-3 inches.",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: true,
    unlisted: false
  },
  {
    name: "Handmade Northern Cardinal",
    id: "handmade-noca",
    price: 48,
    description: "Borb-shaped Northern cardinal sculpted in wool with glass bead eyes and wire feets. Available in male or female.",
    productType: "handmade",
    image: "/shop/handmade-noca01.png",
    alt: "A pair of male and female Northern cardinals, scultped in needle felt, sit on half inch circle sections of branches, facing directly towards the camera. The female is a buff cream color with wine-stained wings, wine-stained eyebrows, a grey goatee and orange beak. The male is a cardinal red color with a black goatee and orange beak. Their crests are short and round.",
    dimensions: "Approximate weight 1/8-1/4 ounces, diameter varies from 1.5 to 2 inches, height varies from 2-3 inches.",
    custom1Name: "sex",
    custom1Options: "male|female",
    custom1Type: "",
    custom1Value: "",
    available: true,
    unlisted: false
  },
  {
    name: "Handmade Palestine Sunbird",
    id: "handmade-pasu",
    price: 48,
    description: "Borb-shaped Palestine Sunbird sculpted in wool with glass bead eyes and wire feets. Available in male or female. A portion of proceeds will benefit the Palestine Children's Relief Fund.",
    productType: "handmade",
    image: "/shop/handmade-pasu01.png",
    alt: "A pair of needle-felted Palestine sunbirds sit on the keffiyeh. The male faces directly towards the camera, his body ombre shades of bright and deep blues and dark, his proboscis beak black. The female faces 1/4 towards the left, her proboscis beak dark, her body buff colored and her belly a lighter buff color.",
    dimensions: "Approximate weight 1/8-1/4 ounces, diameter varies from 1.5 to 2 inches, height varies from 2-3 inches.",
    custom1Name: "sex",
    custom1Options: "male|female",
    custom1Type: "",
    custom1Value: "",
    available: true,
    unlisted: false
  },
  {
    name: "Handmade Eastern Bluebird",
    id: "handmade-eabl",
    price: 48,
    description: "Borb-shaped Eastern bluebird sculpted in wool with glass bead eyes and wire feets.",
    productType: "handmade",
    image: "/shop/handmade-eabl01.png",
    alt: "A needle-felted Eastern bluebird sits on a half inch section of a branch facing towards the right in profile. Its breast is bright orange with a white underside, its head, wings and tail royal blue.",
    dimensions: "Approximate weight 1/8-1/4 ounces, diameter varies from 1.5 to 2 inches, height varies from 2-3 inches.",
    custom1Name: "sex",
    custom1Options: "male|female",
    custom1Type: "",
    custom1Value: "",
    available: false,
    unlisted: false
  },
  {
    name: "Meteor Geese",
    id: "meteor-geese",
    price: 112,
    description: "Wool painting of viral #meteorgeese, which are actually two ducks watching a meteor as captured on a Twitch livestream from One Portuguese Farm in May 2024.",
    productType: "handmade",
    image: "/shop/meteor-geese01.png",
    alt: "Wool painting of two ducks watching a meteor in the night sky, the light reflected in their awe-filled eyes. The painting is cool-toned with mostly dark blues, and details in purple, pink, and light blue. The wool painting sits in an 8 inch embroidery frame.",
    dimensions: "Approximate weight 2.4 ounces, in an 8 inch circular embroidery frame. Thickness varies from about 1.5-6 mm.",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: true,
    unlisted: false
  },
  {
    name: "Handmade Mini-Borb",
    id: "mini-borb",
    price: 24,
    description: "Tiny borbs sculpted in wool, available in various species.",
    productType: "handmade",
    image: "/shop/mini-borb01.png",
    alt: "Four miniature needle-felted birds sit on two half-inch cross sections of a branch, sitting in alternating species: Eastern blue bird and black-capped chickadee. Two birds fit on each branch cut out. There is a spray of goldenrod in the background.",
    dimensions: "Approximate weight 1/32 ounces or 880 milligrams, diameter approximately 3/4 inch or penny-sized, height approximately 1 inch.",
    custom1Name: "species",
    custom1Options: "Black-capped chickadee|Eastern bluebird|Northern Cardinal|American Robin",
    custom1Type: "",
    custom1Value: "",
    available: true,
    unlisted: false
  },
  {
    name: "Graduating Rat",
    id: "graduating-rat",
    price: 56,
    description: "A grey rat that you can hold in your palm, wearing a graduation cap.",
    productType: "handmade",
    image: "/shop/graduating-rat01.png",
    alt: "A grey rat with black eyes, pink nose, pink ears, pink paws and pink tail wearing a black graduation cap faces 1/4 left forward. It's in standing pose flat on its hind paws.",
    dimensions: "Weight 1/8 ounce, diameter 1.75 inches, height 2.75 inches, hindpaws to tail 5 inches.",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: true,
    unlisted: true
  },
  {
    name: "Horned Sheep",
    id: "horned-sheep",
    price: 56,
    description: "A grey sheep with a black head, face, horns, legs and tail.",
    productType: "handmade",
    image: "/shop/horned-sheep01.png",
    alt: "A needle-felted horned sheep with black head, horns and legs and light grey fleece stands its forelegs on a half inch thick cut section of branch, facing almost directly towards the camera.",
    dimensions: "Weight 1/8 ounces, width 1.5 inches, height 2 inches, head to tail 3.25 inches.",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: true,
    unlisted: false
  },
  {
    name: "Eastern Cottontail",
    id: "eastern-cottontail",
    price: 72,
    description: "A resident of the Meadows, the Eastern cottontail rabbit",
    productType: "handmade",
    image: "/shop/eastern-cottontail01.png",
    alt: "A needle-felted Eastern cottontail rabbit faces 3/4 towards the left. Its ears are splayed widely. Its cheeks are round, its nose small, and its large dark eyes bulbous.",
    dimensions: "Weight 1/8 ounces, haunch width 1.75 inches, head height nearly 2 inches, head to cottontail 3 inches.",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: true,
    unlisted: false
  },
  {
    name: "Grey Squirrel",
    id: "grey-squirrel",
    price: 96,
    description: "Made with extra soft alpaca fiber, this Eastern grey squirrel lived on the artist's desk for years and thus is especially dear.",
    productType: "handmade",
    image: "/shop/grey-squirrel01.png",
    alt: "A mostly brown-colored Eastern grey squirrel faces towards the camera. Its nose is reddish brown, its belly, neck and under-nose area are cream colored, its ears and paws are a lighter reddish brown. The rest of its body is a greyish brown. Its eyes are black beads.",
    dimensions: "Weight 1/8 ounces, tail height 2.5 inches, head to tail 2 inches.",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: true,
    unlisted: false
  },
  {
    name: "Crafting Kit: Black-capped Chickadee",
    id: "diy-bcch",
    price: 12,
    description: "Not available yet",
    productType: "diy",
    image: "/shop/coming-soon.png",
    alt: "A needle-felted female Eastern bluebird struggles to fit into the entrance hole of a small birdhouse. The image is faded with the text: Coming Soon! We're working on the right fit.",
    dimensions: "Box dimensions TBD",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: false,
    unlisted: false
  },
  {
    name: "Crafting Kit: American Robin",
    id: "diy-amro",
    price: 12,
    description: "Not available yet",
    productType: "diy",
    image: "/shop/coming-soon.png",
    alt: "A needle-felted female Eastern bluebird struggles to fit into the entrance hole of a small birdhouse. The image is faded with the text: Coming Soon! We're working on the right fit.",
    dimensions: "Box dimensions TBD",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: false,
    unlisted: false
  },
  {
    name: "Crafting Kit: Northern Cardinal",
    id: "diy-noca",
    price: 12,
    description: "Not available yet",
    productType: "diy",
    image: "/shop/coming-soon.png",
    alt: "A needle-felted female Eastern bluebird struggles to fit into the entrance hole of a small birdhouse. The image is faded with the text: Coming Soon! We're working on the right fit.",
    dimensions: "Box dimensions TBD",
    custom1Name: "sex",
    custom1Options: "male|female",
    custom1Type: "",
    custom1Value: "",
    available: false,
    unlisted: false
  },
  {
    name: "Crafting Kit: Eastern Bluebird",
    id: "diy-eabl",
    price: 12,
    description: "Not available yet",
    productType: "diy",
    image: "/shop/coming-soon.png",
    alt: "A needle-felted female Eastern bluebird struggles to fit into the entrance hole of a small birdhouse. The image is faded with the text: Coming Soon! We're working on the right fit.",
    dimensions: "Box dimensions TBD",
    custom1Name: "sex",
    custom1Options: "male|female",
    custom1Type: "",
    custom1Value: "",
    available: false,
    unlisted: false
  },
  {
    name: "Sylvie Portraits",
    id: "sylvie-example",
    price: 250,
    description: "Felt portraits of Sylvie the dog based on photos of full-body poses.",
    productType: "customExample",
    image: "/shop/sylvie-example01.png",
    alt: "A wool portrait of Sylvie the grey and white yorkie poodle mix lying with her pink belly up, paws folded, tail modest, facing the camera, framed in an 8 inch embroidery hoop.",
    dimensions: "Approximate weight 2-2.5 ounces, in an 8 inch embroidery circular embroidery frame. Thickness varies from 1.5-8mm.",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: false,
    unlisted: false
  },
  {
    name: "Pabu the Red Panda",
    id: "red-panda",
    price: 56,
    description: "A red panda, needle felted as a gift for a spouse who loves red pandas.",
    productType: "customExample",
    image: "/shop/red-panda01.png",
    alt: "A needle-felted red panda sits up on its hind legs like red pandas do, facing 1/4 towards the right.",
    dimensions: "Weight 1/8 ounces, body width 1.25 inches, head to tail 5.5 inches.",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: false,
    unlisted: false
  },
  {
    name: "Silky the Catnary",
    id: "catnary",
    price: 56,
    description: "Silky the yellow Catnary from the 13 Storey Treehouse series, needle-felted as a birthday gift for an 8 year old.",
    productType: "customExample",
    image: "/shop/catnary01.png",
    alt: "Silky the Catnary from the 13 Storey Treehouse series, needle felted with a yellow body, cream-colored wings, black round eyes, a round nose, a black half smile, and cat ears and cat tail.",
    dimensions: "Dimensions unavailable as it was gifted before it was measured!",
    custom1Name: "",
    custom1Options: "",
    custom1Type: "",
    custom1Value: "",
    available: false,
    unlisted: false
  }
];

const images = [
  {
    id: 1,
    file: "catnary01.png",
    productID: "catnary",
    alt: "Silky the Catnary from the 13 Storey Treehouse series, needle felted with a yellow body, cream-colored wings, black round eyes, a round nose, a black half smile, and cat ears and cat tail. The catnary faces 3/4 towards the right."
  },
  {
    id: 2,
    file: "catnary02.png",
    productID: "catnary",
    alt: "SIlky the Catnary from the 13 Storey Treehouse series, needle felted with a yellow body, cream-colored wings, black round eyes, a round nose, a black half smile, and cat ears and cat tail. The catnary faces 3/4 towards the right facing downwards."
  },
  {
    id: 3,
    file: "eastern-cottontail01.png",
    productID: "eastern-cottontail",
    alt: "A needle-felted Eastern cottontail rabbit faces 3/4 towards the left. Its ears are splayed widely. Its cheeks are round, its nose small, and its large dark eyes bulbous."
  },
  {
    id: 4,
    file: "eastern-cottontail02.png",
    productID: "eastern-cottontail",
    alt: "A needle-felted Eastern cottontail rabbit faces 3/4 towards the right. Its ears are splayed widely, showing the lighter colored undersides of the ears. Its cheeks are round and its large dark eyes bulbous."
  },
  {
    id: 5,
    file: "eastern-cottontail03.png",
    productID: "eastern-cottontail",
    alt: "A needle-felted Eastern cottontail faces towards the left, showing its cotton puff tail."
  },
  {
    id: 6,
    file: "eastern-cottontail04.png",
    productID: "eastern-cottontail",
    alt: "A needle-felted Eastern cottontail rabbit faces 1/4 towards the left, showing its rounded paws."
  },
  {
    id: 7,
    file: "eastern-cottontail05.png",
    productID: "eastern-cottontail",
    alt: "A needle-felted Eastern cottontail rabbit faces away from the camera, 1/4 towards the right, showing its brown back and cotton puff tail."
  },
  {
    id: 8,
    file: "graduating-rat01.png",
    productID: "graduating-rat",
    alt: "A grey rat with black eyes, pink nose, pink ears, pink paws and pink tail wearing a black graduation cap faces 1/4 left forward. It's in standing pose flat on its hind paws."
  },
  {
    id: 9,
    file: "graduating-rat02.png",
    productID: "graduating-rat",
    alt: "A grey rat with black eyes, pink nose, pink ears, pink paws and pink tail wearing a black graduation cap faces directly towards the camera."
  },
  {
    id: 10,
    file: "graduating-rat03.png",
    productID: "graduating-rat",
    alt: "A grey rat with black eyes, pink nose, pink ears, pink paws and pink tail wearing a black graduation cap faces 1/4 right forward."
  },
  {
    id: 11,
    file: "graduating-rat04.png",
    productID: "graduating-rat",
    alt: "A grey rat with black eyes, pink nose, pink ears, pink paws and pink tail wearing a black graduation cap faces towards the right in profile, displaying its full tail length."
  },
  {
    id: 12,
    file: "grey-squirrel01.png",
    productID: "grey-squirrel",
    alt: "A mostly brown-colored Eastern grey squirrel, sculpted in needle-felt, faces towards the camera. Its nose is reddish brown, its belly, neck and under-nose area are cream colored, its ears and paws are a lighter reddish brown. The rest of its body is a greyish brown. Its eyes are black beads."
  },
  {
    id: 13,
    file: "grey-squirrel02.png",
    productID: "grey-squirrel",
    alt: "A mostly brown-colored Eastern grey squirrel, sculpted in needle-felt, standing on a round section of branch faces towards the left, displaying its rounded bushy grey-brown tail."
  },
  {
    id: 14,
    file: "grey-squirrel03.png",
    productID: "grey-squirrel",
    alt: "A mostly brown-colored Eastern grey squirrel, sculpted in needle-felt, standing on a round section of branch faces 1/4 towards the right, showing its profile, round snout and slightly curved cream colored belly."
  },
  {
    id: 15,
    file: "handmade-amro01.png",
    productID: "handmade-amro",
    alt: "A needle-felted American Robin sits on a half inch section of a branch faces 1/4 left towards the camera. A dried spray of New England aster lies behind it. Its head is black, its eyes circled with white, its breast rusty orange, its wings grey."
  },
  {
    id: 16,
    file: "handmade-amro02.png",
    productID: "handmade-amro",
    alt: "A needle-felted American Robin sits on a half inch section of a branch faces away from the camera. A dried spray of New England aster lies behind it. Its head is black, its back, wings and tails are grey."
  },
  {
    id: 17,
    file: "handmade-amro03.png",
    productID: "handmade-amro",
    alt: "A needle-felted American Robin sits on a half inch section of a branch faces towards the left in profile. A dried spray of New England aster lies behind it. Its head is black, its back, wings and tails are grey. Its rusty-orange breast is very round, its wings, tail and back grey, its head black."
  },
  {
    id: 18,
    file: "handmade-amro04.png",
    productID: "handmade-amro",
    alt: "A needle-felted American Robin sits on a half inch section of a branch faces towards the right in profile. A dried spray of New England aster lies behind it. Its head is black, its back, wings and tails are grey. Its rusty-orange breast is very round, its wings, tail and back grey, its head black."
  },
  {
    id: 19,
    file: "handmade-amro05.png",
    productID: "handmade-amro",
    alt: "A needle-felted American Robin sits on a half inch section of a branch faces 1/4 towards the left. A dried spray of New England aster lies behind it. Its head is black, its back, wings and tails are grey. Its white-lined eyes lie far apart giving a derpy look. Its head is black, its beak yellow, its breast rusty orange, its round wings grey."
  },
  {
    id: 20,
    file: "handmade-amro06.png",
    productID: "handmade-amro",
    alt: "A needle-felted American Robin sits on a half inch section of a branch faces towards the right in profile. A dried spray of New England aster lies behind it. Its head is black, its back, wings and tails are grey. Its white-lined left eye is far from its beak giving it a derpy look. Its head is black, its beak yellow, its breast rusty orange, its round wings grey."
  },
  {
    id: 21,
    file: "handmade-amro07.png",
    productID: "handmade-amro",
    alt: "A needle-felted American Robin lies upturned showing its white bottom, black wire feets and grey underside of its tail. A dried spray of New England aster lies behind it."
  },
  {
    id: 22,
    file: "handmade-amro08.png",
    productID: "handmade-amro",
    alt: "A needle-felted American Robin sits on a half inch section of a branch faces away from the camera facing 1/4 towards the right. A dried spray of New England aster lies behind it. Its head is black, its back, wings and tails are grey, and a peek of its breast is rusty orange."
  },
  {
    id: 23,
    file: "handmade-amro09.png",
    productID: "handmade-amro",
    alt: "A needle-felted American Robin sits on a half inch section of a branch faces directly towards the camera. A dried spray of New England aster lies behind it. Its head is black, its far-apart eyes circled with white, its breast rusty orange, its wings grey."
  },
  {
    id: 24,
    file: "handmade-bcch01.png",
    productID: "handmade-bcch",
    alt: "A needle-felted black-capped chickadee sits on a half inch section of a branch, facing 3/4 towards the left. A dried spray of goldenrod lays in the background. Its belly is white with buff sides, its face white, its goatee black, its beak black, its cap black, its wings grey."
  },
  {
    id: 25,
    file: "handmade-bcch02.png",
    productID: "handmade-bcch",
    alt: "A small needle-felted black-capped chickadee sits on a half inch section of a branch, facing away from the camera 1/4 towards the left. A dried spray of goldenrod lays in the background. Its tail is grey, its back is grey, its wings are grey, its face white, its cap black."
  },
  {
    id: 26,
    file: "handmade-bcch03.png",
    productID: "handmade-bcch",
    alt: "A needle-felted black-capped chickadee sits on a half inch section of a branch, facing 3/4 towards the right. A dried spray of goldenrod lays in the background. Its belly is white with buff sides, its face white, its goatee black, its beak black, its cap black, its wings grey."
  },
  {
    id: 27,
    file: "handmade-bcch04.png",
    productID: "handmade-bcch",
    alt: "A needle-felted black-capped chickadee sits on a half inch section of a branch, facing 1/4 towards the left. A dried spray of goldenrod lays in the background. Its belly is white with buff sides, its face white, its goatee black, its beak black, its cap black, its wings grey."
  },
  {
    id: 28,
    file: "handmade-bcch05.png",
    productID: "handmade-bcch",
    alt: "A needle-felted black-capped chickadee sits on a half inch section of a branch, facing away from the camera 1/4 towards the right. A dried spray of goldenrod lays in the background. Its tail is grey, its back is grey, its wings are grey, its face white, its cap black, its peeking breast buff and white."
  },
  {
    id: 29,
    file: "handmade-bcch06.png",
    productID: "handmade-bcch",
    alt: "A needle-felted black-capped chickadee sits upturned revealing its white and buff colored flat underside, grey tail, and black wire feets."
  },
  {
    id: 30,
    file: "handmade-bcch07.png",
    productID: "handmade-bcch",
    alt: "A small needle-felted black-capped chickadee sits on a half inch section of a branch, facing 1/4 towards the left. A dried spray of goldenrod lays in the background. Its face is white, its goatee black, its cap black, its breast white with tea-stain buff sides, its wings grey."
  },
  {
    id: 31,
    file: "handmade-bcch08.png",
    productID: "handmade-bcch",
    alt: "A small needle-felted black-capped chickadee sits on a half inch section of a branch, facing 3/4 towards the left. A dried spray of goldenrod lays in the background. Its face is white, its goatee black, its cap black, its breast white with tea-stain buff sides, its wings grey."
  },
  {
    id: 32,
    file: "handmade-eabl01.png",
    productID: "handmade-eabl",
    alt: "A needle-felted Eastern bluebird sits on a half inch section of a branch facing towards the right in 4/5 profile. Its breast is bright orange with a white underside, its head, wings and tail royal blue."
  },
  {
    id: 33,
    file: "handmade-eabl02.png",
    productID: "handmade-eabl",
    alt: "A needle-felted Eastern bluebird sits on a half inch section of a branch facing towards the left in 4/5 profile. Its breast is bright orange with a white underside, its head, wings and tail royal blue."
  },
  {
    id: 34,
    file: "handmade-eabl03.png",
    productID: "handmade-eabl",
    alt: "A needle-felted Eastern bluebird sits upturned revealing its flat white underside, royal blue tail and black wire feets."
  },
  {
    id: 35,
    file: "handmade-eabl04.png",
    productID: "handmade-eabl",
    alt: "A needle-felted Eastern bluebird sits on a half inch section of a branch facing 3/4 towards the left. Its breast is bright orange with a white underside, its head, wings and tail royal blue."
  },
  {
    id: 36,
    file: "handmade-eabl05.png",
    productID: "handmade-eabl",
    alt: "A needle-felted Eastern bluebird sits on a half inch section of a branch facing directly towards the camera. Its breast is bright orange with a white underside, its head, wings and tail royal blue."
  },
  {
    id: 37,
    file: "handmade-eabl06.png",
    productID: "handmade-eabl",
    alt: "A needle-felted Eastern bluebird sits on a half inch section of a branch facing towards the left in total profile. Its breast is bright orange with a white underside, its head, wings and tail royal blue."
  },
  {
    id: 38,
    file: "handmade-eabl07.png",
    productID: "handmade-eabl",
    alt: "A needle-felted Eastern bluebird sits on a half inch section of a branch facing away from the camera. Its head, back, wings and tail are entirely royal blue."
  },
  {
    id: 39,
    file: "handmade-eabl08.png",
    productID: "handmade-eabl",
    alt: "A needle-felted Eastern bluebird sits on a half inch section of a branch facing 1/4 towards the right. Its breast is bright orange with a white underside, its head, wings and tail royal blue."
  },
  {
    id: 40,
    file: "handmade-noca01.png",
    productID: "handmade-noca",
    alt: "A pair of male and female Northern cardinals, scultped in needle felt, sit on half inch circle sections of branches, facing directly towards the camera. The female is a buff cream color with wine-stained wings, wine-stained eyebrows, a grey goatee and orange beak. The male is a cardinal red color with a black goatee and orange beak. Their crests are short and round."
  },
  {
    id: 41,
    file: "handmade-noca02.png",
    productID: "handmade-noca",
    alt: "A female needle-felted Northern cardinal sits on a half-inch circle of cut branch, facing away from the camera 1/4 towards the right. There is a spray of goldenrod and a milkweed pod husk in the background. Her body is buff cream colored with wine-stained wings and tail, and wine-stained crest."
  },
  {
    id: 42,
    file: "handmade-noca03.png",
    productID: "handmade-noca",
    alt: "A pair of male and female Northern cardinals, scultped in needle felt, sit on half inch circle sections of branches, facing 1/4 inch towards each other. The female is a buff cream color with wine-stained wings, wine-stained eyebrows, a grey goatee and orange beak. The male is a cardinal red color with a black goatee and orange beak. Their crests are short and round."
  },
  {
    id: 43,
    file: "handmade-noca04.png",
    productID: "handmade-noca",
    alt: "A pair of male and female Northern cardinals, scultped in needle felt, sit on half inch circle sections of branches, facing directly towards each other in profile. The female is a buff cream color with wine-stained wings, wine-stained eyebrows, a grey goatee and orange beak. The male is a cardinal red color with a black goatee and orange beak. Their crests and tail points are short and round."
  },
  {
    id: 44,
    file: "handmade-noca05.png",
    productID: "handmade-noca",
    alt: "A pair of male and female Northern cardinals, scultped in needle felt, sit on half inch circle sections of branches, facing directly away from the camera. The female is a buff cream color with wine-stained wings, tail and crest. The male is a cardinal red color with grey detail on its tail. Their crests and tail points are short and round."
  },
  {
    id: 45,
    file: "handmade-noca06.png",
    productID: "handmade-noca",
    alt: "A male needle-felted Northern cardinal sits on a half-inch circle of cut branch, facing 1/4 towards the left. There is a spray of goldenrod and a milkweed pod husk in the background. His body is a bright red color, and his goatee is black, his beak orange. His crest is short and round."
  },
  {
    id: 46,
    file: "handmade-noca07.png",
    productID: "handmade-noca",
    alt: "A male needle-felted Northern cardinal sits on a half-inch circle of cut branch, facing away from the camera 1/4 towards the right. There is a spray of goldenrod and a milkweed pod husk in the background. His body is a bright red color, the tip of his tail grey. His crest is short and round."
  },
  {
    id: 47,
    file: "handmade-noca08.png",
    productID: "handmade-noca",
    alt: "An upturned needle-felted male Cardinal sits revealing his flat red underside and grey outline underneath his wings, as well as black wire feets. There is a spray of goldenrod and a milkweed pod husk in the background."
  },
  {
    id: 48,
    file: "handmade-noca09.png",
    productID: "handmade-noca",
    alt: "A male needle-felted Northern cardinal sits on a half-inch circle of cut branch, facing towards the left in profile. There is a spray of goldenrod and a milkweed pod husk in the background. His body is a bright red color, and his goatee is black, his beak orange. His crest is short and round."
  },
  {
    id: 49,
    file: "handmade-noca10.png",
    productID: "handmade-noca",
    alt: "A female needle-felted Northern cardinal sits on a half-inch circle of cut branch, facing 1/4 towards the left. There is a spray of goldenrod and a milkweed pod husk in the background. Her body is a buff cream color, her wings and eyebrows are wine-stained, her goatee is grey, her beak orange. His crest is short and round."
  },
  {
    id: 50,
    file: "handmade-noca11.png",
    productID: "handmade-noca",
    alt: "A female needle-felted Northern cardinal sits on a half-inch circle of cut branch, facing towards the right in profile. There is a spray of goldenrod and a milkweed pod husk in the background. Her body is a buff cream color, her wings, crest and tail are wine-stained, her beak orange. His crest is short and round."
  },
  {
    id: 51,
    file: "handmade-noca12.png",
    productID: "handmade-noca",
    alt: "A female needle-felted Northern cardinal sits on a half-inch circle of cut branch, facing away from the camera 1/4 towards the left. There is a spray of goldenrod and a milkweed pod husk in the background. Her body is buff cream colored with wine-stained wings and tail, and wine-stained crest."
  },
  {
    id: 52,
    file: "handmade-noca13.png",
    productID: "handmade-noca",
    alt: "A female needle-felted Northern cardinal sits upturned revealing her flat strawberry blond underside, wine-stained wings with grey details underneath, and black wire feets."
  },
  {
    id: 53,
    file: "handmade-noca14.png",
    productID: "handmade-noca",
    alt: "A female needle-felted Northern cardinal sits on a half-inch circle of cut branch, facing 3/4 towards the right. There is a spray of goldenrod and a milkweed pod husk in the background. Her body is a buff cream color, her wings, crest and tail are wine-stained, her beak orange. His crest is short and round."
  },
  {
    id: 54,
    file: "handmade-pasu01.png",
    productID: "handmade-pasu",
    alt: "A pair of needle-felted Palestine sunbirds sit on the keffiyeh. The male faces directly towards the camera, his body ombre shades of bright and deep blues and dark, his proboscis beak black. The female faces 1/4 towards the left, her proboscis beak dark, her body buff colored and her belly a lighter buff color."
  },
  {
    id: 55,
    file: "handmade-pasu02.png",
    productID: "handmade-pasu",
    alt: "A pair of needle-felted Palestine sunbirds sit on the keffiyeh. The female on the left faces 1/4 towards the right, her proboscis beak dark, her body buff colored and her belly a lighter buff color. The male on the right faces 1/4 towards the left, his body ombre shades of bright and deep blues and dark, his proboscis beak black."
  },
  {
    id: 56,
    file: "handmade-pasu03.png",
    productID: "handmade-pasu",
    alt: "A pair of needle-felted Palestine sunbirds sit on the keffiyeh. The male on the left faces 1/4 towards the right, his body ombre shades of bright and deep blues and dark, his proboscis beak black.  The female on the right faces 1/4 towards the left, her proboscis beak dark, her body buff colored and her belly a lighter buff color."
  },
  {
    id: 57,
    file: "handmade-pasu04.png",
    productID: "handmade-pasu",
    alt: "A pair of needle-felted Palestine sunbirds sit on the keffiyeh, facing almost directly towards the camera. The male on the left's body is ombre shades of bright and deep blues and dark, his proboscis beak black.  The female on the right has her proboscis beak dark, her body buff colored and her belly a lighter buff color."
  },
  {
    id: 58,
    file: "handmade-pasu05.png",
    productID: "handmade-pasu",
    alt: "A pair of needle-felted Palestine sunbirds sit on the keffiyeh. The female on the left faces the camera directly, her proboscis beak dark, her body buff colored and her belly a lighter buff color.  The male on the right faces 1/4 towards the left, his body ombre shades of bright and deep blues and dark, his proboscis beak black."
  },
  {
    id: 59,
    file: "handmade-pasu06.png",
    productID: "handmade-pasu",
    alt: "A pair of needle-felted Palestine sunbirds sit on the keffiyeh. The female on the left faces 1/4 towards the right, her proboscis beak dark, her body buff colored and her belly a lighter buff color.  The male on the right faces directly towards the camera, his body ombre shades of bright and deep blues and dark, his proboscis beak black."
  },
  {
    id: 60,
    file: "handmade-pasu07.png",
    productID: "handmade-pasu",
    alt: "A pair of needle-felted Palestine sunbirds sit on the keffiyeh facing directly away from the camera. Her body and tail are a buff color. His body bright blue, fading ombre to a dark grey tail and wings."
  },
  {
    id: 61,
    file: "handmade-pasu08.png",
    productID: "handmade-pasu",
    alt: "A pair of needle-felted Palestine sunbirds sit on the keffiyeh. The female on the left faces directly towards the camera, her proboscis beak dark, her body buff colored and her belly a lighter buff color.  The male on the right faces 1/4 towards the left, his body ombre shades of bright and deep blues and dark, his proboscis beak black."
  },
  {
    id: 62,
    file: "horned-sheep-natural01.png",
    productID: "horned-sheep",
    alt: "A needle-felted horned sheep with black head, horns and legs and light grey fleece faces the camera directly. The sheep sits on clover, with flowering clovers in the background."
  },
  {
    id: 63,
    file: "horned-sheep-natural02.png",
    productID: "horned-sheep",
    alt: "A needle-felted horned sheep with black head, horns and legs and light grey fleece faces away from the camera 1/4 towards the left. The sheep sits on clover, with flowering clovers in the background. Its small round black tail emerges from its wooly behind."
  },
  {
    id: 64,
    file: "horned-sheep-natural03.png",
    productID: "horned-sheep",
    alt: "A needle-felted horned sheep with black head, horns and legs and light grey fleece faces 3/4 towards the left. The sheep stands on a large rock with green growing in the background."
  },
  {
    id: 65,
    file: "horned-sheep01.png",
    productID: "horned-sheep",
    alt: "A needle-felted horned sheep with black head, horns and legs and light grey fleece stands its forelegs on a half inch thick cut section of branch, facing almost directly towards the camera."
  },
  {
    id: 66,
    file: "horned-sheep02.png",
    productID: "horned-sheep",
    alt: "A needle-felted horned sheep with black head, horns and legs and light grey fleece stands its forelegs on a half inch thick cut section of branch, facing 3/4 towards the right."
  },
  {
    id: 67,
    file: "meteor-geese01.png",
    productID: "meteor-geese",
    alt: "Wool painting of two ducks watching a meteor in the night sky, the light reflected in their awe-filled eyes. The painting is cool-toned with mostly dark blues, and details in purple, pink, and light blue. The wool painting sits in an 8 inch embroidery frame."
  },
  {
    id: 68,
    file: "meteor-geese02.png",
    productID: "meteor-geese",
    alt: "Detail of wool painting of two ducks watching a meteor in the night sky, the light reflected in their awe-filled eyes. There are trees in the background. The duck on the left is darker than the duck on the right."
  },
  {
    id: 69,
    file: "meteor-geese03.png",
    productID: "meteor-geese",
    alt: "Close up within the 8 inch frame of wool painting of two ducks watching a meteor in the night sky, the light reflected in their awe-filled eyes. There are trees in the background. The duck on the left is darker with purple highlights, while the duck on the right is lighter with pink and light blue highlights."
  },
  {
    id: 70,
    file: "mini-borb-natural.png",
    productID: "mini-borb",
    alt: "Four miniature needle-felted birds sit on two half-inch cross sections of a branch, sitting in alternating species: Eastern blue bird and black-capped chickadee. Two birds fit on each branch cut out. There is a spray of goldenrod in the background."
  },
  {
    id: 71,
    file: "mini-borb01.png",
    productID: "mini-borb",
    alt: "Four miniature needle-felted birds sit on two half-inch cross sections of a branch, sitting in alternating species: Eastern blue bird and black-capped chickadee. Two birds fit on each branch cut out. There is a spray of goldenrod in the background."
  },
  {
    id: 72,
    file: "mini-borb02.png",
    productID: "mini-borb",
    alt: "Four miniature needle-felted birds sit on two half-inch cross sections of a branch, sitting in alternating species: Eastern blue bird and black-capped chickadee. Two birds fit on each branch cut out. There is a spray of goldenrod in the background."
  },
  {
    id: 73,
    file: "pet-portrait01.png",
    productID: "pet-portrait",
    alt: "Close up of a wool painting of the faces of two rottweiler dogs, Vanya and Sheba. Vanya on the left is looking up with head tilted, hopeful. Sheba on the right is smiling with bright eyes and tongue out. There are pink hearts floating among them."
  },
  {
    id: 74,
    file: "pet-portrait02.png",
    productID: "pet-portrait",
    alt: "Wool portrait on rottweilers Vanya and Sheba in an 8 inch embroidery frame."
  },
  {
    id: 75,
    file: "handmade-eabl09.png",
    productID: "handmade-eabl",
    alt: "A needle-felted Eastern bluebird sits on a half inch section of a branch facing 1/4 towards the left. Its breast is bright orange with a white underside, its head, wings and tail royal blue."
  },
  {
    id: 76,
    file: "red-panda01.png",
    productID: "red-panda",
    alt: "A needle-felted red panda sits up on its hind legs like red pandas do, facing 1/4 towards the right."
  },
  {
    id: 77,
    file: "red-panda02.png",
    productID: "red-panda",
    alt: "A needle-felted red panda sits facing 3/4 towards the right on top of a plastic branch."
  },
  {
    id: 78,
    file: "sylvie-example01.png",
    productID: "sylvie-example",
    alt: "A wool portrait of Sylvie the grey and white yorkie poodle mix lying with her pink belly up, paws folded, tail modest, facing the camera, framed in an 8 inch embroidery hoop."
  },
  {
    id: 79,
    file: "sylvie-example02.png",
    productID: "sylvie-example",
    alt: "A close up of wool portrait of Sylvie the grey and white yorkie poodle mix lying with her pink belly up, paws folded, tail modest, facing the camera."
  },
  {
    id: 80,
    file: "sylvie-example03.png",
    productID: "sylvie-example",
    alt: "A close up of Sylvie the yorkie poodle mix's face, with eyelashes, black nose, floofy cheeks and mouth closed."
  },
  {
    id: 81,
    file: "sylvie-example04.png",
    productID: "sylvie-example",
    alt: "A wool portrait of Sylvie the grey and white yorkie poodle mix lying on her side, her belly facing towards the left, her rump round, paws curled, facing looking up towards the camera, framed in an 8 inch embroidery hoop."
  },
  {
    id: 82,
    file: "sylvie-example05.png",
    productID: "sylvie-example",
    alt: "A close up of wool portrait of Sylvie the grey and white yorkie poodle mix lying on her side, her belly facing towards the left, her rump round, paws curled, facing looking up towards the camera, tail sticking out from underneath her relaxed hind legs."
  },
  {
    id: 83,
    file: "sylvie-example07.png",
    productID: "sylvie-example",
    alt: "A wool portrait of Sylvie the grey and white yorkie poodle mix sitting 3/4 towards the right, her face looking slightly left towards the camera, her eyes expressive, round white beard and paws slightly saliva-stained, ears and tail dark grey, framed in an 8 inch embroidery hoop."
  },
  {
    id: 84,
    file: "sylvie-example08.png",
    productID: "sylvie-example",
    alt: "A close up of wool portrait of Sylvie the grey and white yorkie poodle mix lying on her side, her belly facing towards the left, her rump round, paws curled, facing looking up towards the camera, framed in an 8 inch embroidery hoop."
  },
  {
    id: 85,
    file: "sylvie-example09.png",
    productID: "sylvie-example",
    alt: "A close up of Sylvie the grey and white yorkie mix's face, showing her round dark expressive eyes, her dark soft ears, her light eyebrows, her dark nose, her white round slightly stained beard, closed mouth."
  },
  {
    id: 86,
    file: "sylvie-example10.png",
    productID: "sylvie-example",
    alt: "A wool portrait of Sylvie the grey and white yorkie mix sitting looking up with an expression of excitement: her tail and ear raised, her mouth relaxed and open in a smile, pink tongue, her eyes bright. Framed in an 8 inch embroidery hoop."
  },
  {
    id: 87,
    file: "sylvie-example11.png",
    productID: "sylvie-example",
    alt: "A close up of wool portrait of Sylvie the grey and white yorkie mix sitting looking up with an expression of excitement: her tail and ear raised, her mouth relaxed and open in a smile, pink tongue, her eyes bright"
  },
  {
    id: 88,
    file: "sylvie-example12.png",
    productID: "sylvie-example",
    alt: "Close up of Sylvie the white and grey yorkie mix's smiling face: dark grey ears raised, jaw relaxed into a classic Sylvie smile, bottom teeth and pink tongue visible, eyes bright with eyelashes, tear stains in the corners, white fluffy beard."
  }
];