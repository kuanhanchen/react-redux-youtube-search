import React from 'react';
import { get } from "lodash";

const VideoListItem = ({ video, onVideoSelect }) => {
	const imageUrl = get(video, "snippet.thumbnails.medium.url", "https://dummyimage.com/320x180/000000/fff.jpg&text=+NO+IMAGE");
	const id = get(video, "id.videoId", "");
	const title = get(video, "snippet.title", "");
	return (
		<a href={`https://youtube.com/watch?v=${id}`} className="video-list-item">
				<div className="video-image">
					<img className="media-object" src={imageUrl} alt={title} />
				</div>
				<div className="video-title">
					{title}
				</div>
		</a>
	);
}

export default VideoListItem;
