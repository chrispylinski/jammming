import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    
    search() { // passes the searchTerm to the onSearch method in App.js after SEARCH is pressed
        this.props.onSearch(this.state.searchTerm);
    }

    handleTermChange(e) { // sets the state of the searchTerm to whatever was written
        this.setState({ searchTerm: e.target.value });
    }
    
    render() {
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                <a onClick={this.search}>SEARCH</a>
            </div>
        );
    }
}

export default SearchBar;