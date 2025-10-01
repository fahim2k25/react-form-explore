import React from 'react';

const ProductTable = ({ products }) => {
    // const { name, price, quantity } = products;
    return (
        <div>
            <p>
                Total Number Products Available : {products.length}
            </p>

            <table>
                <caption>
                    Product detail for shopping
                </caption>
                <thead>
                    <td>Product Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                </thead>
                <tbody>
                    {

                        products.map((elem) => {
                            return (
                                <tr>
                                    <td>{elem.name}</td>
                                    <td>{elem.price}</td>
                                    <td>{elem.quantity}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;