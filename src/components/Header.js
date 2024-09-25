import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className='bg-gray-800 text-white p-4'>
    <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>
            <Link to="/">Local MarketPlace</Link>
        </h1>
        <nav>
            <Link to="/login" className='mr-4'>Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    </div>
    </header>
  )
}

export default Header