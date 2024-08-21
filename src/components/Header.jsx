import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const [isHovered, setIsHovered] = useState(null);

  const navItems = [
    { name: 'Shop', path: '/shop' },
    { name: 'Cart', path: '/cart' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header className="bg-gradient-to-r from-purple-900 to-pink-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-extrabold">
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Vinayak Threads
            </motion.span>
          </Link>
          <div className="space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-lg font-semibold relative"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;