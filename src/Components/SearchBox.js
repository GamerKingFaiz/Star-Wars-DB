import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa3 tc">
            <input
                type="search"
                placeholder="Search names..."
                className="pa3 bn bg-white-80 br-pill tc"
                id="searchBox"
                onChange={ searchChange }
            />
        </div>
        
    );
}

export default SearchBox;