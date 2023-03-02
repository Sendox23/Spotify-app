import { useContext } from 'react';
import ListContext from '../../store/list-context';
import classes from './Track.module.css';
import spotifyLogo from "../../resources/spotifyLogo.png"

const Track = (props) => {
    const ctx = useContext(ListContext);
    const addTrackHandler = () => {
        ctx.addTrack(props.track)
        console.log(props.artistPic)
    }
    const removeTrackHandler = () => {
        ctx.removeTrack(props.track)
    }

    const popularityHandler = () => {
        return props.track.popularity / 10
    }

    const audioPlayerHandler = (
       !props.isRemoval &&
        <audio controls>
            <source src={props.track.preview} type="audio/ogg" />
            Your browser does not support the audio element.
        </audio>
    )

    const songLinkHandler = (
        <a href={props.track.songLink} target="_blank" rel="noreferrer"><img className={classes.SpotifyLogo} src={spotifyLogo} alt="Spotify Logo" /></a>
    )

    return (
        <div className={classes.Track}>
            <img src={props.track.cover}
                alt={props.track.album}
                className={classes.TrackCover} />
            <div className={classes.TrackInformation}>
                <h3 href={props.track.songLink}>{props.track.name} </h3>
                <p className={classes.TrackInformationArtistAlbum}>{props.track.artist} | {props.track.album} | Rating: {popularityHandler()}/10    {songLinkHandler}</p>
                {audioPlayerHandler}
            </div>
            {!props.isRemoval &&
                <button className={classes.TrackAction} onClick={addTrackHandler}>
                    +
                </button>}
            {props.isRemoval &&
                <button className={classes.TrackAction} onClick={removeTrackHandler}>
                    -
                </button>}
        </div>

    )
}

export default Track;