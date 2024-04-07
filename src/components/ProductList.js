import React from 'react';
import './style.css';

const ProductList = ({ products }) => {
  return (
    <div className='products-section'>
      <h2>Products</h2>
      <div className='card-grid'>
      {products.map(product => (
        <div key={product.id} className='card'>
          <img className='product-img' src={product.image} alt={product.title}/>
          <div className='card-content'>
            <h6>{product.title}</h6>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
