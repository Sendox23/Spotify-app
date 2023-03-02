import React from "react";

const ListContext = React.createContext({
    searchResults: [],
    playlistName: "My Playlist",
    playlistTracks: [],
    isLoading: false,
    addTrack: (track) => { },
    removeTrack: (track) => { },
    updatePlaylistName: (name) => { },
    search: (searchTerm) => { },
    savePlaylist: () => { },
})

export default ListContext;