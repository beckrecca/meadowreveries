export default function TutorialVideo( { video, name, startseconds }) {
	return (
		<iframe
		  src={"https://www.youtube.com/embed/" + video + "?start=" + startseconds}
		  title={name}
		  frameBorder="0"
		  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		  allowFullScreen
		  className="w-full aspect-video rounded shadow"
		></iframe>
	);
}