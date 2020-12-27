import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({ videos, curPage }) => {
  console.log(videos);
  const [start, end] = [(curPage * 10) - 10, curPage * 10];
  const curVideos = videos.slice(start, end);
  const videoItems = curVideos.map(video => {
		return (
			<VideoListItem 
				onVideoSelect={()=>{}}
				key={video.etag} 
        video={video}
      />
		);
	});

	return (
		<div className="video-list">
			{videoItems}
		</div>
	);
}

export default VideoList;
