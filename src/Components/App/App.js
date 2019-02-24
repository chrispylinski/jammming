import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

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
      searchResults: [
        {
          name: 'Chris',
          artist: 'd',
          album: 'd',
          id: '1'
        },
        {
          name: 'Mayra',
          artist: 'm',
          album: 'm',
          id: '2'
        }
      ], 
      playlistName: 'my Tunes',
      playlistTracks: [
        {
          name: 'm',
          artist: 'm',
          album: 'album',
          id: '3'
        },
        {
          name: 'name',
          artist: 'nameless',
          album: 'album',
          id: '4'
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this); // to bind current value
    this.removeTrack = this.removeTrack.bind(this); // to bind current value
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
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;