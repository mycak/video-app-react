import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div> </div>
    }

    return (
        <div style={{width: "60vw"}}>
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title={video.snippet.title}/>
            </div>
            <div className="ui segnment" style={{marginTop: "1em"}}>
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;