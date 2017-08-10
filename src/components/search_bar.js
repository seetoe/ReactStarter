import React, { Component } from 'react';

// class-based component instead of functional component to have state
class SearchBar extends Component {
  // first and only function called automatically with new instance
  constructor(props) {
    // call constructor of parent class Component
    super(props);

    // initialize state to an object with property term
    this.state = { term: '' };
  }

  // required function called render
  render() {
    // need to wrap js variables with {} inside jsx
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // event handler
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// this line sets what is exported when import SearchBar from another file
export default SearchBar;
