// used to create and manage components
import _ from 'lodash';
import React, { Component } from 'react';
// used to interact with DOM
import ReactDOM from 'react-dom';
// YouTube Search
import YouTubeSearch from 'youtube-api-search';
// need to use relative path because not npm package
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// YouTube Data API V3 key
const API_KEY = 'AIzaSyD3pSBGeB42a1qMiHgqcOsQwSeMywF6eAM';


// Create component - which produces HTML
// App serves as a class / factory. this is a functional component
// We need to instantiate a component before passing to DOM
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
    YouTubeSearch ({key: API_KEY, term: term}, (videos) => {
      // ES6 resolves this as this.setState({ videos: videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // pass data from parent component to child component using props
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

// Put the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
