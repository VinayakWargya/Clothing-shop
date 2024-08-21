import React from 'react';
import { motion } from 'framer-motion';

function Button({ children, onClick, className }) {
  return (
    <motion.button
      className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;