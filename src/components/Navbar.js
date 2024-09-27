import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Modal from './Modal';
import LoginForm from './LoginForm';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

  return (
    <nav className='bg-gray-800 p-4'>
{user ? (
    <>
    <span>Welcome, {user.name}</span>
    <button onClick={logout} className='ml-4 text-white'> Logout</button>
    </>
): (
        <>
    <a href='/login' className='text-white'>Login</a>
    <button onClick={() => setIsModalOpen(true)} className='ml-4 text-white'>Logout</button>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <LoginForm/>
    </Modal>
    </>
)}
    </nav>
    
  )
}

export default Navbar