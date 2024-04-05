import React from 'react'
import './Cart.css'
import Cartproducts from './Cartproducts';


const Cart = ({ cart, removeFromCart, updateQuantity }) => {

  const totalPrice = cart.reduce((acc, item) => acc + item.amt * item.quantity, 0);

  return (
    <>
      <Cartproducts removeFromCart={removeFromCart} updateQuantity={updateQuantity} cart={cart} />
      <div className="footer">
        <p>Total Amount:  {totalPrice.toFixed(2)} Rs.</p>
      </div>

    </>
  );
}

export default Cart;