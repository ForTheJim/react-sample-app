import React from "react";

const ProductCategoryRow = ({category}) => {

  // return markup for Category Row
    return (
        <tr style={{"margin": "20px"}}><td>{category}</td>
        </tr>
    )
}

export default ProductCategoryRow;