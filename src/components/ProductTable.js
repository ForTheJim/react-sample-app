import React from "react";
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({products, filterText, inStockOnly}) => {
    // Create a variable for each product row
    const rows = [];

    // set last product category to null
    let lastCategory = null;

    // Iterate over products array
    products.forEach((product) => {
        // Check for Searched Text against product name, return if no match
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
          }
        // Check if "In Stock Only" products is checked and if product is not in stock return and do not render anything
        if (inStockOnly && !product.stocked) {
            return;
        }
        
        // If Last Category doesn't match current product category, then render a row
        if (product.category !== lastCategory) {
        
        // Push Category Row to rows array
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }

        // Push Product Row to rows array
        rows.push(
            <ProductRow
              product={product}
              key={product.name} filterText={filterText} inStockOnly={inStockOnly}/>
          );
          lastCategory = product.category;
        });

    // Return markup for Product Table
    return(
        <>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Price</th>
                </tr>
            </thead>
        <tbody>{rows}</tbody>
        </table>
        </>
    )
}

export default ProductTable;
