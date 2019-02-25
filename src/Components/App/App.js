import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

/*
State 
is referred to the local state of the component which 
cannot be accessed and modified outside of the component 
and only can be used & modified inside the component. 
Props, 
on the other hand, make components reusable by giving 
components the ability to receive data from the parent 
component in the form of props. 
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [ ], 
      playlistName: 'New Playlist',
      playlistTracks: [ ]
    };
    this.addTrack = this.addTrack.bind(this); // to bind current value
    this.removeTrack = this.removeTrack.bind(this); // to bind current value
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    // search for selected track and set it to true if found
    const selectedTrack = this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)

    if (selectedTrack === undefined) {
      let playlist = this.state.playlistTracks;
      playlist.push(track); // push added track
      this.setState({playlistTracks: playlist}); // update state of playlist
    }
  }

  removeTrack(track) {
    const indexOfselectedTrack = this.state.playlistTracks.findIndex(playlistTrack => playlistTrack.id === track.id)
    
    let playlist = this.state.playlistTracks;
    playlist.splice(indexOfselectedTrack, 1); // remove the selected track
    this.setState( {playlistTracks: playlist} );
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(x => x.URI);  // URI is missing in playlistTracks array of track objects
    Spotify.savePlayList(this.state.playlistName, trackURIs).then(
      this.setState({
        playlistName: 'new playlist',
        tracks: [ ]
      })
    );
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(
      tracks => this.setState({
        searchResults: tracks
      })
    );
    console.log(searchTerm);
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} 
                      onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;