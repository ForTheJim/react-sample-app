import React from "react";
import {useState} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({products}) => {
    // State for Search
    const [filterText, setFilterText] = useState('');

    // State for In Stock Products Only
    const [inStockOnly, setInStockOnly] = useState(false);

    return(
        <>
        {/* Search Bar component gets props from FilterableProductTable.  Props for state and functions for setting state for each get passed to Search Bar component */}
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly}/>
        
        {/* Product Table component gets props from FilterableProductTable. Props for products, search text, and in stock checkbox filter that will display Products to user */}
        <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
        </>
    )
}

export default FilterableProductTable;
