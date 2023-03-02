import classes from './Playlist.module.css';
import Track from '../TrackList/Track';
import { Fragment, useContext } from 'react';
import ListContext from '../../store/list-context';

const Playlist = () => {
    const ctx = useContext(ListContext);
    const nameChangeHandler = (event) => {
        let newPlaylistName = event.target.value
        ctx.updatePlaylistName(newPlaylistName)
    }
    
    return (
        <div className={classes.Playlist} >
            {!ctx.isLoading
                ? <Fragment>
                    <input defaultValue={"New Playlist"} onChange={nameChangeHandler} />
                    {ctx.playlistTracks.map((track) => {
                        return track.inPlaylist && <Track key={track.id}
                            track={track}
                            isRemoval={true}
                            playlistName={ctx.playlistName}
                            tracks={ctx.playlistTracks} />
                    })}
                    <button className={classes.PlaylistSave} onClick={ctx.savePlaylist}>Save to Spotify</button></Fragment>
                : <p>Loading</p>}
        </div>
    )
}

export default Playlist;