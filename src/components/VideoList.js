import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {

        const listToRender = videos.map(video => {
            return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>
        })


        return (
            <div style={{width: "30vw", marginLeft: "1em"}}> {listToRender} </div>
        )

}

export default VideoList;