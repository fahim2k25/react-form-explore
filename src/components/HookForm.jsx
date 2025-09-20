import React from 'react';
import useInput from '../hooks/useInput';

const HookForm = () => {

    const [name, nameOnChange] = useInput('');
    const handleSUb = (event) => {
        event.preventDefault();
        console.log(name)
    }

    return (
        <div>
            <form onSubmit={handleSUb} className='inputs2'>

                <input type="text" defaultValue={name} onChange={nameOnChange} name='name' placeholder='Enter Name' />

                <input type="email" name="email" placeholder='Insert EMail' />

                <input type="password" name="password" placeholder='Insert Pass' />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;