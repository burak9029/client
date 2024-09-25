import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard.js';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products');
              setProducts(res.data);  
            }catch(error){
                console.log("error fetching products", error);
            }
        };
        fetchProducts();
    },[]);
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}  
        </div>
        
    </div>
  )
}

export default Home