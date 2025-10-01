
const ProductForm = ({ handleProductList }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const productDeetz = { name, price, quantity };
        handleProductList(productDeetz);
    }

    return (
        <div>
            <form className='inputs' onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Product Name' />
                <input type="text" name="price" placeholder='Product Price' />
                <input type="text" name="quantity" placeholder='Product Quantity' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;