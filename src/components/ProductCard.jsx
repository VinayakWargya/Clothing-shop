import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mt-2 truncate">{product.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductCard;