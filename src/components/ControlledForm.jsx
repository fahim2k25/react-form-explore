import { useState } from "react";

const ControlledForm = () => {

    const [pass, setPass] = useState("");

    const handlesSubmit = (e) => {
        e.preventDefault();
        console.log("Submit 3")
    }
    const handleCahnge = (event) => {
        console.log(event.target.value)
    }

    return (
        <form className="inputs2" onSubmit={handlesSubmit}>
            <input type="text" name="name" placeholder="N A M E" required />
            <input type="email" name="email" placeholder="E M A I L" required />
            <input type="password" onChange={handleCahnge} defaultValue={pass} name="password" placeholder="Pass WORD" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default ControlledForm;