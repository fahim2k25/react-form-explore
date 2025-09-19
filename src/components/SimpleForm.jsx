import './SimpleForm.css'

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Our form submitted");
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <label name="name">
                    Enter your name:
                </label>
                <input type='text' name='name' placeholder='N A M E'></input>
            </div>
            <div className='inputs'>
                <label name="email">
                    Enter your email:
                </label>
                <input type='text' name='email' placeholder='E - M A I L'></input>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default SimpleForm;