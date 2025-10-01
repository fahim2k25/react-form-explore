import { useState } from "react";

const ProductForm = ({ handleProductList }) => {
    const [err, setErr] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // validation phase

        if (name.length === 0) {
            setErr("Name field can't be empty")
            return
        } else if (price.length === 0 || parseInt(price) <= 0) {
            setErr("Enter valid Price")
            return
        } else if (quantity.length === 0 || parseInt(quantity) <= 0) {
            setErr("Enter valid Quantity")
            return
        } else {
            setErr('')
        }

        const productDeetz = { name, price, quantity };
        handleProductList(productDeetz);
        e.target.name.value = "";
        e.target.price.value = "";
        e.target.quantity.value = "";
    }

    return (
        <div>
            <form className='inputs' onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Product Name' />
                <input type="text" name="price" placeholder='Product Price' />
                <input type="text" name="quantity" placeholder='Product Quantity' />
                <input type="submit" value="Submit" />
            </form>
            <p> <small>{err}</small></p>
        </div>
    );
};

export default ProductForm;