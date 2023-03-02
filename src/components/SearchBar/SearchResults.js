import { useContext } from 'react';

import classes from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList';
import ListContext from '../../store/list-context';

const SearchResults = () => {
    const ctx = useContext(ListContext);
    return (
        <div className={classes.SearchResults}>
            <h2>Results</h2>
            <TrackList tracks={ctx.searchResults}
                onAdd={ctx.addTrack}
                isRemoval={false} />
        </div>
    )
}


export default SearchResults;