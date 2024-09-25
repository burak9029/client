import React, {useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get('http://locahost:5000/api/orders/user', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                setOrders(res.data);
            } catch(error) {
                console.error ('Error fetching orders:', error);
            }
        };
        fetchOrders();
    }, []);
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>My Orders</h1>
        <ul>
            {orders.map((order) => (
                <li key={order.id} className='border-b py-2'>
                    <p>Order ID: {order.id}</p>
                    <p>Total: ${order.total}</p>
                    <p>Status: {order.status}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default OrderList