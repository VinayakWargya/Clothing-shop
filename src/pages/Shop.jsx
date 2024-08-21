import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import styled from 'styled-components';

const categories = ['All', 'Shirts', 'Pants', 'Dresses', 'Accessories'];
const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const genders = ['All', 'Men', 'Women', 'Unisex'];

const ShopContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #4a1d9e, #e94057);
  color: white;
  padding: 3rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FilterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const NeomorphicSelect = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 15px;
  box-shadow: 
    inset 5px 5px 10px rgba(0, 0, 0, 0.2), 
    inset -5px -5px 10px rgba(255, 255, 255, 0.1),
    5px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 
      inset 2px 2px 5px rgba(0, 0, 0, 0.2), 
      inset -2px -2px 5px rgba(255, 255, 255, 0.1),
      2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  select {
    width: 100%;
    background: transparent;
    border: none;
    color: white;
    appearance: none;
    font-size: 1rem;
    outline: none;
    cursor: pointer;

    option {
      background-color: #4a1d9e;
      color: white;
    }
  }
`;

const NeomorphicInput = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 15px;
  box-shadow: 
    inset 5px 5px 10px rgba(0, 0, 0, 0.2), 
    inset -5px -5px 10px rgba(255, 255, 255, 0.1),
    5px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 
      inset 2px 2px 5px rgba(0, 0, 0, 0.2), 
      inset -2px -2px 5px rgba(255, 255, 255, 0.1),
      2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
    margin-top: 10px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #ffffff;
      cursor: pointer;
      margin-top: -8px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 4px;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
    }
  }

  p {
    text-align: center;
    margin-top: 0.5rem;
    font-weight: 600;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState('All');
  const [size, setSize] = useState('');
  const [gender, setGender] = useState('All');
  const [priceRange, setPriceRange] = useState(500);

  useEffect(() => {
    const filtered = products.filter(product => {
      return (
        (category === 'All' || product.category === category) &&
        (size === '' || product.sizes.includes(size)) &&
        (gender === 'All' || product.gender === gender) &&
        product.price <= priceRange
      );
    });
    setFilteredProducts(filtered);
  }, [category, size, gender, priceRange]);

  return (
    <ShopContainer>
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Our Collection
        </Title>

        <FilterContainer>
          <div>
            <FilterTitle>Category</FilterTitle>
            <NeomorphicSelect>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </NeomorphicSelect>
          </div>

          <div>
            <FilterTitle>Size</FilterTitle>
            <NeomorphicSelect>
              <select 
                value={size} 
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="">All Sizes</option>
                {sizes.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </NeomorphicSelect>
          </div>

          <div>
            <FilterTitle>Gender</FilterTitle>
            <NeomorphicSelect>
              <select 
                value={gender} 
                onChange={(e) => setGender(e.target.value)}
              >
                {genders.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </NeomorphicSelect>
          </div>

          <div>
            <FilterTitle>Price Range</FilterTitle>
            <NeomorphicInput>
              <input 
                type="range" 
                min="0" 
                max="500" 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <p>Max Price: ${priceRange}</p>
            </NeomorphicInput>
          </div>
        </FilterContainer>

        <ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Container>
    </ShopContainer>
  );
}

export default Shop;