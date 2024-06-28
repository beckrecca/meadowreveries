import Container from '@/app/ui/container'

export default function Page() {
	return (
		<Container>
			<h2>Palette</h2>
			<h3>Text</h3>
			<ul className="p-2 font-bold max-w-fit">
				<li className="text-aster">Aster #6C5579</li>
				<li className="text-black">Black #000000</li>
				<li className="text-fern">Fern #627955</li>
				<li className="text-goldenrod">Goldenrod #f2db02</li>
				<li className="text-ladycardinal">Lady Cardinal #E4C4B0</li>
				<li className="text-milkweed">Milkweed #e6aba2</li>
				<li className="text-paper">Paper #f1f2ec</li>
				<li className="text-seed">Seed #683E28</li>
				<li className="text-white">White #FFFFFF</li>
			</ul>
			<h3>Background</h3>
			<ul className="p-2 font-bold max-w-fit">
				<li className="bg-aster text-white">Aster #6C5579</li>
				<li className="bg-black text-white">Black #000000</li>
				<li className="bg-fern text-white">Fern #627955</li>
				<li className="bg-goldenrod text-black">Goldenrod #f2db02</li>
				<li className="bg-ladycardinal">Lady Cardinal #E4C4B0</li>
				<li className="bg-milkweed text-black">Milkweed #e6aba2</li>
				<li className="bg-paper text-black">Paper #f1f2ec</li>
				<li className="bg-seed text-white">Seed #683E28</li>
				<li className="bg-white text-black">White #FFFFFF</li>
			</ul>
		</Container>
	);
}