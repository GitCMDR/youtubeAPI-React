import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video;
    // Rather than declaring a separate line and using props
    // we can directly obtain the video by asking for {video}
    // instead of prop (as long as video is in the props we
    // will be able to obtain it
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">

            <div className="media-left">
                <img className="media-object" src={imageUrl}/>
            </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
      </li>
    );
};

export default VideoListItem;