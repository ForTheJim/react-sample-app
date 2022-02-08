import React from "react";

const ProductRow = ({product}) => {

    // deconstruct name and price from product
    const {name,price} = product;
     
    // return markup for product row
    return (
        <tr>
        <td>{name}</td><td>  {price}</td>
        </tr>
    )
}

export default ProductRow;