import React from 'react';
import useInput from '../hooks/useInput';

const HookForm = () => {

    const [name, nameOnChange] = useInput('');
    const [email, emailOnChange] = useInput('');
    const [pass, passOnChange] = useInput('');

    const handleSUb = (event) => {
        event.preventDefault();
        console.log(name, email, pass)
    }

    return (
        <div>
            <form onSubmit={handleSUb} className='inputs2'>

                <input type="text" defaultValue={name} onChange={nameOnChange} name='name' placeholder='Enter Name' />

                <input type="email" defaultValue={email} onChange={emailOnChange} name="email" placeholder='Insert EMail' />

                <input type="password" name="password" defaultValue={pass} onChange={passOnChange} placeholder='Insert Pass' />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;