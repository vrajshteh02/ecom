import React from 'react'
import './Product.css'
import './Cart.css'


const Cart = ({ cart, removeFromCart, updateQuantity }) => {

  const totalPrice = cart.reduce((acc, item) => acc + item.amt * item.quantity, 0);

  return (
    <>
      <div className='cartproduct'>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="list-group-item">
              <div className="product-details">
                <img src={item.img} alt="" className="product-image" />
                <p>{item.name}</p>
                <p>{item.amt}</p>
                <div className="quantity-controls">
                  <button
                    className='btn'
                    disabled={item.quantity <= 0}
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className='btn'
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className='btn btn-danger'
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))

        ) : (
          <h3 className='empty'>Your cart is empty.</h3>
        )}
      </div >
      <div className="footer">
        <p>Total Amount:{totalPrice.toFixed(2)}</p>
      </div>
    </>
  );
}

export default Cart;