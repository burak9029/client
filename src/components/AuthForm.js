import React, { useState } from 'react';
const AuthForm = ({ onSubmit, buttonText}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password});
    };

    return(
        <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-lg'>
            <div className='mb-4'>
                <label htmlFor='email' className='block text-grey-700'>Email:</label>
                <input type='email' id='email' className='w-full p-2 border rounded' value={email} onChange={(e)=> setEmail(e.target.value)} />

            </div>
            <div className='mb-4'>
            <label htmlFor='password' className='block text-grey-700'>Password:</label>
                <input type='password' id='password' className='w-full p-2 border rounded' value={password} onChange={(e)=> setPassword(e.target.value)} />

            </div>
            <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded'>{buttonText}</button>
        </form>
    )
}



export default AuthForm