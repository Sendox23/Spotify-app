import { useState, useContext} from 'react';
import ListContext from '../../store/list-context';
import classes from "./SearchBar.module.css";

const SearchBar = () => {
    const ctx = useContext(ListContext)
    const [searchTerm, setSearchTerm] = useState('')


    const handleTermChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const search = () => {
        ctx.search(searchTerm)
    }

    return (
        <div className={classes.SearchBar}>
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
            <button className={classes.SearchButton} onClick={search}>SEARCH</button >
        </div>
    )
}

export default SearchBar;