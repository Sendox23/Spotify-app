
import classes from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchBar/SearchResults';
import Playlist from './components/Playlist/Playlist';
import { useEffect } from 'react';
import Spotify from './util/Spotify';

const App = () => {

//Starts spotify authentication as soon as app starts
useEffect(() => {
  Spotify.getAccessToken()
}, [])

  return (
    <div>
      <h1>Ja<span className={classes.highlight}>mmm</span>ing</h1>
      <div className={classes.App}>
        <SearchBar />
        <div className={classes.AppPlaylist}>
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
