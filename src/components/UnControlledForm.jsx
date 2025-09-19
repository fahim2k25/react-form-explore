import { useRef, useState } from "react";

const UnControlledForm = () => {

    const reffo = useRef("");
    const [currEmail, setCurrEmail] = useState("");



    const handleSubmission = () => {
        // e.preventDefault();
        setCurrEmail(reffo.current.value);
        // console.log(reffo.current.value);
    }
    return (
        <div>
            <form action={handleSubmission}>
                <input type="text" name="name" placeholder="NAME" />
                <br />
                <input ref={reffo} type="email" name="email" placeholder="EMAIL" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>you just entered: <small>{currEmail}</small></p>
        </div>
    );
};

export default UnControlledForm;