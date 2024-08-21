import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto px-6 py-8 text-center">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
        </motion.div>
        <motion.div 
          className="md:w-1/2 md:pl-8 mt-4 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
          <p className="text-2xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <Button onClick={() => alert('Added to cart!')}>Add to Cart</Button>
          <button 
            onClick={() => navigate('/shop')} 
            className="mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            ← Back to Shop
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductDetail;