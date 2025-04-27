import './App.css';
import Productos from './components/Productos';
import Cart from './components/Cart'; // Import the Cart component
import React, { useState } from 'react';

const productos = [
  { id: 1, titulo: 'Manzanas', descripcion: 'Manzanas Verdes', precio: 2.50 },
  { id: 2, titulo: 'Uvas', descripcion: 'Uvas Verdes', precio: 1.60 },
  { id: 3, titulo: 'Bananas', descripcion: 'Traidas desde Nicaragua', precio: 3.00 }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <Productos productos={productos} addToCart={addToCart} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default App;
