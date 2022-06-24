import './SearchBar.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ( { setSearchValue } ) => {

    const [ searchText, setSearchText ] = useState(null);
    const handleChange = value => {
        setSearchText( value );
    }

    const navigate = useNavigate();

    const [ shouldRedirect, setShouldRedirect ] = useState(false);

    useEffect(() => {
        if (shouldRedirect) {
            setShouldRedirect(false);
            setSearchValue(searchText);
            navigate(`/${searchText}`);
        }
    });

    const onEnterPress = event => {
        if (event.key === "Enter") {
            setShouldRedirect(true);
        }
    }


    return (
            <div className="search-bar">
                <input className="search-bar__input" type="text"
                       placeholder="Input user name here"
                       onChange={ event => handleChange(event.target.value) }
                       onKeyPress={ e => onEnterPress(e) }
                />

                <button onClick={ ()=> setShouldRedirect(true) } className="search-bar__button">Search User</button>

            </div>
    );
}

export default SearchBar;
