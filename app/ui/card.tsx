export default function Card({
	cardBackground,
	headerBackground,
	headerText,
	img,
	alt,
	children
}) {
	return (
		<div className={"bg-" + cardBackground + ' p-6 ml-10 my-6 rounded max-w-96'}>
			<div className={"bg-" + headerBackground + ' rounded-t p-2'}>
				<h2 className="normal-case text-center">{headerText}</h2>
			</div>
			<img src={img} alt={alt} className="border-x border-y border-solid border-black rounded-b"/>
			{children}
		</div>
	);
}