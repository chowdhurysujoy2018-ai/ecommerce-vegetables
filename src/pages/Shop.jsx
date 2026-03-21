import React from 'react'
import { useState, useEffect } from 'react';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading products...</div>;
  }

  return (
    <section className='py-20'>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                <button className="w-full mt-3 bg-green-500 text-white py-2 rounded hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop