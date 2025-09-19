import React from 'react';
import './SimpleForm.css'

const SimpleForm = () => {
    return (
        <form>
            <div className='inputs'>
                <label name="name">
                    Enter your name:
                </label>
                <input name='name' placeholder='N A M E'></input>
            </div>

        </form>
    );
};

export default SimpleForm;