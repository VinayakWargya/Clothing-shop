import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const floatingObjects = Array(20).fill().map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 10 + 5,
}));

const collections = {
  women: [
    { name: "Summer Dresses", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$49.99" },
    { name: "Office Blazers", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$79.99" },
    { name: "Evening Gowns", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$129.99" },
    { name: "Activewear", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$39.99" },
  ],
  men: [
    { name: "Casual Shirts", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$39.99" },
    { name: "Suits", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$199.99" },
    { name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$59.99" },
    { name: "Sportswear", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$49.99" },
  ],
  kids: [
    { name: "Cute Dresses", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$29.99" },
    { name: "Playful T-Shirts", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$19.99" },
    { name: "Comfy Pajamas", image: "https://images.unsplash.com/photo-1595561629941-eeee1023cde0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$24.99" },
    { name: "School Uniforms", image: "https://images.unsplash.com/photo-1604671801908-6f0463e9446f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", price: "$34.99" },
  ]
};

function Home() {
  const [category, setCategory] = useState('women');

  return (
    <div className="bg-gray-900 min-h-screen text-white relative overflow-hidden">
      {/* Floating objects */}
      {floatingObjects.map((obj) => (
        <motion.div
          key={obj.id}
          className="absolute rounded-full bg-purple-500 opacity-20"
          style={{
            left: `${obj.x}%`,
            top: `${obj.y}%`,
            width: obj.size,
            height: obj.size,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Style for Everyone
            </motion.h1>
            <motion.p 
              className="text-xl mb-10 text-center text-gray-300 max-w-2xl"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover our exquisite collections for men, women, and kids. From casual chic to elegant formal wear,
              elevate your style with Stylish Threads.
            </motion.p>
            <div className="flex space-x-4 mb-8">
              {['women', 'men', 'kids'].map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`${category === cat ? 'bg-pink-600' : 'bg-purple-600'} hover:bg-pink-700 text-lg py-2 px-6`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Button>
              ))}
            </div>
            <Link to={`/shop`}>
              <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-3 px-8 relative overflow-hidden group">
                <span className="relative z-10">Shop Now</span>
                <motion.div
                  className="absolute inset-0 bg-pink-600 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="bg-gradient-to-b from-gray-900 to-purple-900 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collections[category].map((collection, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={collection.image}
                    alt={collection.name} 
                    className="w-full h-80 object-cover transition duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition duration-300">
                      {collection.name}
                    </h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                      Starting from {collection.price}
                    </p>
                    <motion.button
                      className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Shop Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-purple-900 to-gray-900 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {["Premium Quality", "Eco-Friendly Fashion", "Swift Delivery"].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-gray-800 p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-purple-400">{feature}</h3>
                  <p className="text-gray-300">
                    {index === 0 && "Luxurious fabrics and impeccable craftsmanship for unmatched comfort and style."}
                    {index === 1 && "Sustainable practices and materials that look good on you and the planet."}
                    {index === 2 && "From our warehouse to your wardrobe in record time, hassle-free."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-900 to-purple-900 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2010, Stylish Threads has been at the forefront of fashion, bringing you the latest trends and timeless classics. 
                Our passion for style and commitment to quality has made us a favorite among fashion enthusiasts.
              </p>
              <p className="text-lg text-gray-300">
                We believe that fashion is a form of self-expression, and our diverse collections are designed to help you tell your unique story. 
                Join us in our journey to make the world a more stylish place, one outfit at a time.
              </p>
              <Link to="/about">
                <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-lg py-3 px-8">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;