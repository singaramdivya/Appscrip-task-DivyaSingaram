import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';
import MyComponent from './components/MyComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [idealFor, setIdealFor] = useState('');
  const [category, setCategory] = useState({ men: false, women: false, kids: false });
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); 
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    filterProducts();
  }, [idealFor, category, sortBy]);

  const filterProducts = (cat) => {
    let filtered = [...products];

    
    if (idealFor) {
      filtered = filtered.filter(product => product.idealFor === idealFor);
    }

    
    const selectedCategories = Object.keys(category).filter(key => category[key]);
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category.toLowerCase() === cat));
    }
    
   

    
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'lowest':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'highest':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };


  
  

  const handleIdealForChange = (event) => {
    setIdealFor(event.target.value);
  };
  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setCategory(prevState => ({ ...prevState, [name]: checked }));

  };
  
  

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <MyComponent/>
      <Header/>
      <div className='heading'>
        <h1>Discover our products</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <hr className='line'/>
      <ProductFilter
            idealFor={idealFor}
          handleIdealForChange={handleIdealForChange}
          category={category}
          handleCategoryChange={handleCategoryChange}
          sortBy={sortBy}
          handleSortByChange={handleSortByChange}
        /> 
      <hr className='line'/>
      <div className="container">
      <Sidebar idealFor={idealFor}
        handleIdealForChange={handleIdealForChange}
        category={category}
        handleCategoryChange={handleCategoryChange}
        sortBy={sortBy}
        handleSortByChange={handleSortByChange}/>
    
        <ProductList products={filteredProducts} />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
