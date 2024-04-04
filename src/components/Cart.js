import React from 'react'
import './Product.css'


const Cart = ({ cart, removeFromCart, updateQuantity }) => {


  return (
    <div className='product'>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="list-group-item">
            <div className="product-details">
              <img src={item.img} alt="" className="product-image" />
              <p>{item.name}</p>
              <p>{item.amt}</p>
              <div className="quantity-controls">
                <button
                  className='btn btn-sm btn-secondary'
                  disabled={item.quantity <= 0}
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className='btn btn-sm btn-secondary'
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
  );


}


export default Cart;