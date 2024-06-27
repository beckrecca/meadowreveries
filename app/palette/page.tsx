import Container from '@/app/ui/container'

export default function Page() {
	return (
		<Container>
			<h2>Palette</h2>
			<h3>Text</h3>
			<ul className="p-2 font-bold">
				<li className="text-aster">Aster</li>
				<li className="text-black">Black</li>
				<li className="text-fern">Fern</li>
				<li className="text-ladycardinal">Lady Cardinal</li>
				<li className="text-milkweed">Milkweed</li>
				<li className="text-paper">Paper</li>
				<li className="text-seed">Seed</li>
				<li className="text-white">White</li>
			</ul>
			<h3>Background</h3>
			<ul className="p-2 font-bold max-w-36">
				<li className="bg-aster text-white">Aster</li>
				<li className="bg-black text-white">Black</li>
				<li className="bg-fern text-white">Fern</li>
				<li className="bg-ladycardinal">Lady Cardinal</li>
				<li className="bg-milkweed text-black">Milkweed</li>
				<li className="bg-paper text-black">Paper</li>
				<li className="bg-seed text-white">Seed</li>
				<li className="bg-white text-black">White</li>
			</ul>
		</Container>
	);
}