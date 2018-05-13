import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail'

const API_KEY = "KEY GOES HERE";

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

// Create a new component. This component should produce
// some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // rather than this.setState({ videos: videos });, on ES6
            // you can write this.setState({videos}); and babel will
            // resolve it as the former.
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

// Take this component's generated HTML and put it on
// the page (in the DOM)
// Below statement is 'React, please render element App to DOM'

ReactDOM.render(<App />, document.querySelector('.container'));
