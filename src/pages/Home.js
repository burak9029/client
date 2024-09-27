import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard.js';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
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
    
    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    
    <div className='container mx-auto p-4'>
      <input type="text" placeholder='Search Products...' value={searchTerm}onChange={(e)=> setSearchTerm(e.target.value)}
      className='w-full p-2 mb-4 border rounded'/>
      <div className='grid gird-cols-3 gap-4'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='border p-4 rounded'>
            <h3 className='text-lg font-bold'>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
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