import React from "react";

import "./SearchInput.css";

const SearchInput = (props) => {

    const inputClass = props.toggleStatus ? "search-input open" : "search-input closed"

    return (
        <div className={inputClass}>
            <input type="text" placeholder="Search for a movie or series" />
        </div>
    )
}

export default SearchInput;