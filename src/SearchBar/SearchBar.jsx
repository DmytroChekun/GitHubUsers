import './SearchBar.css';
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ( { setSearchValue } ) => {

    const [ searchText, setSearchText ] = useState(null);
    const handleChange = value => {
        setSearchText( value );
    }

    return (
            <div className="search-bar">
                <input className="search-bar__input" type="text"
                       placeholder="Input User Name Here"
                       onChange={event => handleChange(event.target.value)}
                />
                <div className="search-bar__btn-wrap"
                     onClick={()=> setSearchValue(searchText)}
                >
                    <Link to={`/${searchText}`}>
                        <button className="search-bar__button">Search User</button>
                    </Link>
                </div>
            </div>
    );
}

export default SearchBar;
