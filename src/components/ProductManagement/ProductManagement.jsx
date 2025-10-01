import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);

    const handleProductList = newProduct => {
        const prodListNew = [...products, newProduct];
        return setProducts(prodListNew);
    }

    return (
        <div>
            <ProductForm handleProductList={handleProductList}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;