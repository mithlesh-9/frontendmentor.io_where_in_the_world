import React from 'react';
import './search.scss';


const Search = ({darkmode,...rest}) => {
let searchInput;
    return (
    <div onClick={()=>searchInput.focus()} className={`search-box ${darkmode ? 'darkmode' : 'normalmode'}`}>
        <span className="lnr lnr-magnifier"></span>
        <input 
            {...rest}
            className="search-field"
            type="search"
            ref={node => searchInput = node}
            placeholder="Type the country name..." />
    </div>
    )
}


export default Search;