export default function ProductDisclaimer({ item }) {
	switch (item.productType) {
		case "handmade":
			return (
				<p className="text-sm">
	            As a handmade piece, the product you receive may differ slightly in color,
	            shape, or size from the product pictured. No refunds or returns, all sales are final.
	          	</p>
			);
		case "diy": {
			return (
				<p className="text-sm">
				Don't be alarmed if you find tiny pieces of plants in either the <strong>Charcoal</strong> or <strong>Snowball</strong> colored fibers. 
				These fibers have been cleaned but not processed for dyes, so some tiny bits of plant fiber remain.
				<br/>Our fibers <a href="/about">come from happy sheep</a> with lots of hay to eat and straw to sleep on!
				<br/>No refunds or returns, all sales are final.
				</p>
			);
		}
		case "customExample": {
			return (
				<p className="text-sm">
				This item is <strong>not for sale</strong>, but rather provided as an example of how much a piece with similar 
				effort and detail would cost.
				</p>
			)
		}
	}
}