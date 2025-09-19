import React from 'react';

const FormAction = () => {

    const handleSubmit2 = (formData) => {
        console.log(formData.get("name"));
        console.log(formData.get("email"));
    }
    return (
        <form action={handleSubmit2}>
            <input type="text" name="name" placeholder="N A m E" />
            <br />
            <input type="email" name="email" email="email" />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default FormAction;