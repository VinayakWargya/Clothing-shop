import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="container mx-auto px-6 py-8">
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Our Clothing Store
      </motion.h1>
      <motion.div
        className="prose lg:prose-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>Welcome to our clothing store! We are passionate about providing high-quality, stylish clothing for all occasions.</p>
        <p>Our mission is to help you express your unique style through our carefully curated collection of apparel. We believe that clothing is more than just fabric – it's a form of self-expression and confidence.</p>
        <p>At our store, you'll find a wide range of options from casual wear to elegant pieces, all designed with attention to detail and comfort in mind. We source our materials responsibly and work with ethical manufacturers to ensure that our products are not only beautiful but also sustainable.</p>
        <p>Thank you for choosing our store for your fashion needs. We're excited to be part of your style journey!</p>
      </motion.div>
    </div>
  );
}

export default About;