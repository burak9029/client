import React from 'react'

const OrderForm = ({ productIds, total, onSubmit}) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({ productIds, total });
    };
  return (
    <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-lg'>
<div className='mb-4'>
    <label htmlFor='total' className='block text-gray-700'>Total:</label>
    <input type='text' id='total' value={total} readOnly
    className='w-full p-2 border rounded'/>
</div>

<button type='submit' className='w-full bg-blue-500 text-white p-2 rounded'>Place Order</button>

    </form>
    
  )
}

export default OrderForm