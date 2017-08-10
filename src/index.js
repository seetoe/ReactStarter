// used to create and manage components
import React from 'react';
// used to interact with DOM
import ReactDOM from 'react-dom';

// need to use relative path because not npm package
import SearchBar from './components/search_bar';

// YouTube Data API V3 key
const API_KEY = 'AIzaSyD3pSBGeB42a1qMiHgqcOsQwSeMywF6eAM';

// Create component - which produces HTML

// App serves as a class / factory. this is a functional component
// We need to instantiate a component before passing to DOM
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Put the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
