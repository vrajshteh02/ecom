import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import { useState } from 'react';
// import { PRODUCTS } from './components/Products'


// const getCart = () => {
//   let cartcount = [];
//   for (let i = 0; i < PRODUCTS.length + 1; i++) {
//     cartcount[i] = 0;
//   }
//   return cartcount;
// }

function App() {

  const [cart, setCart] = useState([]);


  // const addToCart = (item) => {
  //   setCart(prevCart => [...prevCart, item]);
  //   // setCart((prevCart) => ({ ...prevCart, [item]: prevCart[item] + 1 }));
  // };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  // const updateQuantity = (itemId, change) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === itemId ? { ...item, quantity: item.quantity + change } : item
  //     )
  //   );
  // };

  const updateQuantity = (itemId, change) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        const updatedQuantity = item.id === itemId ? item.quantity + change : item.quantity;
        if (updatedQuantity <= 0) {
          return null; // Remove the item if quantity reaches 0
        } else {
          return { ...item, quantity: updatedQuantity }; // Update quantity otherwise
        }
      }).filter(Boolean) // Remove any null values (filtered items)
    );
  };



  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== item.id));
  };


  return (
    <>
      <Router>
        <Navbar size={cart.length} />
        <Routes>
          <Route path='/'>
            <Route index element={<Home addToCart={addToCart} />} />
            <Route path='Cart' element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
