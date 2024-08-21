import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; 2024 Stylish Threads. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/about" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">About</Link>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;