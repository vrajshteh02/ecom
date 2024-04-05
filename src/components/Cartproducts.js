import React from 'react'
import './Cart.css'

const Cartproducts = ({ updateQuantity, removeFromCart, cart }) => {
  return (
    <div className='cart-container'>
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
    </div>
  )
}

export default Cartproducts