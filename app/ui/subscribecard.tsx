import Card from '@/app/ui/card';

export default function Subscribecard() {
	return (
		<div className="mx-auto md:w-1/2">
          <Card
              cardBackground = "paper"
              headerBackground = "goldenrod"
              headerColor  = "black"
              headerText = "Be an Early Bird"
              img = "/card_CTA_subscribe.png"
              alt = "A needle-felted female Northern Cardinal sits on a rock in front of a growing wildflower garden."
            >
              <p><strong>Borbs in your inbox</strong></p>
              <p>Subscribe for updates on our Shop, Tutorials and more!</p>
              <div className="ml-embedded" data-form="5XFz0D"></div>
            </Card>
        </div>
	);
}