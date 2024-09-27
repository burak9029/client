import React, {useState, useContext} from 'react';
import AuthContext from '../context/AuthContext';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const{ login } = useContext('AuthContext');

    const handleSubmit =(e) =>{
        e.preventDefault();
        login(email,password);
    };


  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-1 p-2 border rounded w-full'
            required
            />
        </div>

        <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-500'>Password</label>
            <input
            type='password'
            id='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className='mt-1 p-2 border rounded w-full'
            required
            />
            <button type='submit' className='bg-blue-500 text-white p-2 rounded w-full'>
                Login
            </button>
        </div>
    </form>
  )
}

export default LoginForm