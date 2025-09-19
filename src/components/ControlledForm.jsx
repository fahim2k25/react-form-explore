
const ControlledForm = () => {
    return (
        <form className="inputs">
            <input type="text" name="name" placeholder="N A M E" required />
            <input type="email" name="email" placeholder="E M A I L" required />
            <input type="password" name="password" placeholder="Pass WORD" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default ControlledForm;