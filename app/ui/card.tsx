import Image from 'next/image';

export default function Card({
	cardBackground = "paper",
	headerBackground = "milkweed",
	headerColor = "black",
	headerText = "Header",
	img = "/card_default.png",
	alt = "Image description",
	children
}) {
	return (
		<div className={"bg-" + cardBackground + ' p-6 ml-10 my-2 md:my-6 rounded max-w-96'}>
			<div className={"bg-" + headerBackground + ' text-' + headerColor + ' rounded-t p-2'}>
				<h2 className="normal-case text-center">{headerText}</h2>
			</div>
			<Image
				src={img} 
				alt={alt} 
				className="border-x border-y border-solid border-black rounded-b"
				height="336"
				width="336"
			/>
			<div>
				{children}
			</div>
		</div>
	);
}