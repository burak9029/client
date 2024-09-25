import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from "../components/AuthForm.js";
import axios from 'axios'


const Register = () => {
    const navigate = useNavigate();
    const handleRegister = async({email, password}) =>{
        try{
            await axios.post('http://localhost:5000/api/auth/register', {email, password} );
            navigate('/login');

        }catch(error) {
            console.log("Error Registerin:", error);
        }
    };
  return (
    <div className='flex justtify-center items-center h-screen bg-gray-100'>
        <AuthForm onSubmit={handleRegister} buttonText="Register"/>
    </div>
  );
};

export default Register