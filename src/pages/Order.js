import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderForm from '../components/OrderForm.js'
import axios from 'axios';

const Order = () => {
    const [total, setTotal] = useState(0);
    const productIds = [];
    const navigate = useState();

    const handleOrderSubmit = async (orderData) => {
        try {
            await axios.post('http://localhost:5000/api/orders', orderData, {
                headers: {
                    "Authorization" : `Bearer ${localStorage,getItem('token')}`,

                },
            });
            navigate('/orders'); //lullanici orderini user order list e yoneltmek icin
        } catch(error) {
            console.log('Error placing order:', error);
        }
    };
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        <OrderForm productIds={productIds} total={total} onSubmit={handleOrderSubmit} />
    </div>
  )
}

export default Order