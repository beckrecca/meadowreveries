export default function TutorialVideo( { video, name, startseconds, endseconds, youtube }) {
	return (
		<div>
			<iframe
			  src={"https://www.youtube.com/embed/" + video + "?start=" + startseconds + "&end=" + endseconds}
			  title={name}
			  frameBorder="0"
			  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			  allowFullScreen
			  className="w-full aspect-video rounded shadow"
			></iframe>
			<div className="text-right my-2">
	          	<a 
	          		href={youtube + "&t=" + startseconds} 
	          		className="text-lg text-black hover:text-black hover:bg-goldenrod rounded"
	          		target="_blank"
	          		>
	          		Watch video in a new tab ↗️
	          	</a>
	        </div>
		</div>
	);
}