import React, { useState } from 'react';
import './App.scss';
import StoreMenu from './pages/StoreMenu';
import About from './pages/About';
import Hero from './pages/Hero';
import Header from './pages/Header';

const App = () => {
  const [selectedItems, setSelectedItems] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);

  const shoppingCartUpdate = (price: number) => {
    setItemPrice((prevState) => prevState + price);
    setSelectedItems((prevState) => prevState + 1);
  };

  return (
    <>
      <Header
        itemsInCart={selectedItems}
        price={itemPrice}
      />
      <Hero />
      <About />
      <StoreMenu
        getPrice={shoppingCartUpdate}
      />
    </>
  );
};

export default App;
