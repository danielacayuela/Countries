import React from 'react';

export default function SearchBar ({onChange}) {
    
    return(
        <div>
            <input type="search"  placeholder="Next stop..."  onChange ={(e) => {onChange(e.target.value)}}/>
        </div>
    );
};