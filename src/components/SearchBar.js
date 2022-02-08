import React from "react";


// Could also write as function SearchBar () {
const SearchBar = ({onInStockOnlyChange,onFilterTextChange,filterText,inStockOnly}) => {
    
    // Event handler function for input change
    const onInputChange = (event) => {
        onFilterTextChange(event.target.value);
      };

    return(
        <form>
        <h3>Search  </h3>
        <input type="text" value={filterText} className="search-bar" onChange={onInputChange}/>
        <label className="label">
            <input type="checkbox" name="filterBox" value={inStockOnly} onChange={()=>onInStockOnlyChange((inStockOnly)=>!inStockOnly)}/>
            Return in stock items only
        </label>
        <h3>This is current search input value: {filterText}</h3>
        <h3>This is filter input value: {inStockOnly ? "Returning in Stock Items Only": "All Items Being Returned"}</h3>
        </form>
    )
}

export default SearchBar;