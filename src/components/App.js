import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';
import './App.css';


const KEY = 'AIzaSyBXx49TJ8oCFhsjQFw2ep1jMhKlkWQYTI4';

const App = () => {

    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('pike');
    },[])

    const onTermSubmit = async term => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            type: 'video',
            key: KEY
          }
        });

        setVideos(response.data.items);
        setCurrentVideo(response.data.items[0])
    }

    

    return (
        <div className="main-container">
            <SearchBar onSubmit={onTermSubmit} />
            <div className="result-container">
                <VideoDetail video={currentVideo}/>
                <VideoList videos={videos} onVideoSelect={setCurrentVideo} />
            </div>
        </div>
    )
}



// class App extends React.Component {

//     state = { videos: [], currentVideo: null }

//     onTermSubmit = async term => {
//         const response = await youtube.get("/search", {
//           params: {
//             q: term,
//             part: "snippet",
//             maxResults: 5,
//             type: 'video',
//             key: KEY
//           }
//         });
//         this.setState({ videos: response.data.items });

//     }

//     onVideoSelect = video => {
//         this.setState({ currentVideo: video })
//     }

//     render () {
//         return (
//             <div className="main-container">
//                 <SearchBar onSubmit={this.onTermSubmit} />
//                 <div className="result-container">
//                     <VideoDetail video={this.state.currentVideo}/>
//                     <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
//                 </div>
//             </div>
//         )
//     }
// }

export default App;