import { useState } from "react";

const ControlledForm = () => {

    const [pass, setPass] = useState("");
    const [err, setErr] = useState("")
    const handlesSubmit = (e) => {
        e.preventDefault();
        console.log("Submit 3")
    }
    const handleCahnge = (event) => {
        setPass(event.target.value);
        if (pass.length < 8) {
            setErr("Password must be more than 8 characters")
        } else {
            setErr("");
        }

    }

    return (
        <div>
            <form className="inputs2" onSubmit={handlesSubmit}>
                <input type="text" name="name" placeholder="N A M E" required />
                <input type="email" name="email" placeholder="E M A I L" required />
                <input type="password" onChange={handleCahnge} defaultValue={pass} name="password" placeholder="Pass WORD" />
                <input type="submit" value="Submit" />
            </form>
            <p><small style={{ color: "orange", fontStyle: "italic", fontSize: "larger" }}>
                {err}
            </small></p>
        </div>

    );
};

export default ControlledForm;