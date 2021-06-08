import React from 'react';

export default function Sort ({onChange,onClick}){

    return(
        <div>
            <select name="sort" id="sort" onChange={(e) => {onChange(e.target.value)}} onClick={(e) => {onClick()}}>
                <option  value="">Sort it!</option>
                <option  value="asc" >ASC</option>
                <option  value="desc" >DESC</option>
                <option  value="LowerHigher">Lower population </option>
                <option  value="HigherLower">Higher population</option> 
            </select>
        </div >
    );
};