import { useState } from 'react';

import ListContext from './list-context';
import Spotify from '../util/Spotify';

const ListContextProvider = (props) => {
    const [searchResults, setSearchResults] = useState([])
    const [playlistName, setPlaylistName] = useState("My Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const addTrack = (track) => {
        let newTracksList = playlistTracks;
        if (newTracksList.find((savedTrack) => savedTrack.id === track.id)) {
            return;
        }
        else {
            setPlaylistTracks((prev) => {
                return [...prev, track];
            });
            track.inPlaylist = !track.inPlaylist
        }
    }

    const removeTrack = (track) => {
        const newTracksList = playlistTracks.filter((trackToDelete) => trackToDelete.id !== track.id)
        track.inPlaylist = !track.inPlaylist
        setPlaylistTracks(newTracksList)
    }

    const updatePlaylistName = (name) => {
        setPlaylistName(name);
    }

    const search = async (searchTerm) => {
        Spotify.searchSpotify(searchTerm).then(searchResults => {
            setSearchResults(searchResults)
        })
    }

    const savePlaylist = () => {
        setIsLoading(true)
        const trackUris = playlistTracks.map(track => track.uri)
        Spotify.savePlaylist(playlistName, trackUris);
        setPlaylistName('New Playlist');
        setPlaylistTracks([])
        setIsLoading(false)
    }

    const listContext = {
        searchResults,
        playlistName,
        playlistTracks,
        isLoading,
        addTrack,
        removeTrack,
        updatePlaylistName,
        search,
        savePlaylist
    };
    return (
        <ListContext.Provider value={listContext}>
            {props.children}
        </ListContext.Provider>
    );
}
export default ListContextProvider;