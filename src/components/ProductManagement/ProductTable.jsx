import React from 'react';
import './ProductTable.css'

const ProductTable = ({ products }) => {
    // const { name, price, quantity } = products;
    return (
        <div id='tabeel'>
            <p>
                Total Number Products Available : {products.length}
            </p>

            <table>
                <caption className='textB'>
                    Product details for shopping
                </caption>
                <thead className='textB'>
                    <td>Sl#</td>
                    <td>Product Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                </thead>
                <tbody>
                    {

                        products.map((elem, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
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