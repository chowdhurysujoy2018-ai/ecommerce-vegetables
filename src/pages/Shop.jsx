import React from 'react';
import useProducts from "../hooks/useProducts";
import Button from '../global-components/Button';
import ProductCard from '../components/productCard';

const Shop = () => {

  const { products, loading } = useProducts();

  if (loading) {
    return <div className="text-center p-8">Loading products...</div>;
  }

  return (
    <section className='py-20'>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              productId={product.id}
              productIamge={product.image}
              productAltName={product.name}
              productName={product.name}
              productDesciption={product.description}
              productPrice={product.price}
              isproductStock={product.inStock ? 'In Stock' : 'Out of Stock'}
              productStockClr={product.inStock}
              btnText="Add to Cart"
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Shop;