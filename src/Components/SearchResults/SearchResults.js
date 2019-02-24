import React from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList';

/* attributes of Components can be accessed with this.props
in this case we use it to just assign chaging searchResults to the attribute
tracks in the component TrackList */

class SearchResults extends React.Component {
    render() {
        return ( 
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false}/>
            </div>
        );
    }
    
}

export default SearchResults;