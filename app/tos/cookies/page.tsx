import Container from '@/app/ui/container'

export default function Page() {
  return (
    <Container>
      <h1>Cookies</h1>
      <p><strong>TL;DR</strong>: This website doesn't use cookies because I scream every time I have to dismiss another cookie banner, but a <a href="https://snipcart.com/terms-of-service">Snipcart</a> cookie tracks Cart interactions.</p>
      <p>It's the personal opinion of the artist and operator of <strong>meadowreveries.com</strong> that the saturation of the Internet with cookie banners, tracking technologies, promotional pop ups, and non-stop interrupting calls to action ruins both practical transactional experiences and virtual third spaces. In the spirit of <a href="https://knowyourmeme.com/memes/old-man-yells-at-cloud" target="_blank">Old Man Yells at Cloud</a>, the artist maintains that Internet of the 21st century continues to be drained of expediency, exploration, discovery, and community. The Internet used to be fun.</p>
      <p>This website will <em>never</em> directly use cookies. This website <a href="https://github.com/beckrecca/meadowreveries/blob/main/app/layout.tsx" target="_blank">embeds a JavaScript snippet</a> <a href="https://docs.snipcart.com/v3/setup/installation" target="_blank">from Snipcart</a> which employs a cookie to track your interactions with the <strong>Add to cart</strong> buttons, shopping cart, or checkout page. If you do not wish for your information to be used by a cookie, do not click the <strong>Add to cart</strong> button on our product pages or click the <strong>Cart</strong> button in the website header.</p>
    </Container>
  );
}