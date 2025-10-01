import React from 'react';

const ProductTable = ({ products }) => {
    // const { name, price, quantity } = products;
    return (
        <div>
            Total Number Products Availaable : {products.length}
        </div>
    );
};

export default ProductTable;