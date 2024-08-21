import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const dummyCartItems = [
  { id: 1, name: 'T-Shirt', price: 19.99, quantity: 2 },
  { id: 2, name: 'Jeans', price: 49.99, quantity: 1 },
];

function Cart() {
  const total = dummyCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-6 py-8">
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart
      </motion.h1>
      {dummyCartItems.map((item) => (
        <motion.div 
          key={item.id}
          className="flex justify-between items-center border-b py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
          </div>
          <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        </motion.div>
      ))}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">Total:</p>
        <p className="text-xl font-bold">${total.toFixed(2)}</p>
      </div>
      <div className="mt-8">
        <Button onClick={() => alert('Checkout process initiated!')}>Proceed to Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;