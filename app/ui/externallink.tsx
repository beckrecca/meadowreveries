export default function ExternalLink( {url, text} ) {
	return (
		<a href={url} target="_blank">{text}</a>
	);
}