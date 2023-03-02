import classes from './TrackList.module.css';
import Track from './Track';
import { useContext } from 'react';
import ListContext from '../../store/list-context';

const TrackList = (props) => {
    const ctx = useContext(ListContext);

    return (
        <div className={classes.TrackList}>
            {ctx.searchResults.map((track) => {
                return !track.inPlaylist && <Track key={track.id}
                    track={track}
                    isRemoval={props.isRemoval} />
            })}
        </div>
    )
}
export default TrackList;