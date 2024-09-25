import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm.js';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = async({ email, password}) => {
        try{
            const res = await axios.post('http://localhost:5000/api/auth/login', {email, password});
            localStorage.setItem('token',res.data.token);
            navigate('/');
        }catch(error) {
            console.error("error Logging in", error);
        }
    };
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>

       <AuthForm onSubmit={handleLogin} buttonText="Login"/>
    </div>
  )
}

export default Login