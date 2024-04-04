import React from 'react'
import './Product.css';

const Cards = (props) => {
  const { id, name, img, amt } = props.data;
  const { addToCart } = props
  return (
    <div className="list-group-item">
      <div className="product-details">
        <img
          src={img}
          alt=""
          className="product-image"
        />
        <span >{name}</span>
        <span >{amt}</span>
        {/* <button className='btn btn-danger'>Add</button> */}
        <button className="button" key={id} onClick={() => addToCart(props.data)}>Add</button>
      </div>
    </div>
  )
}

export default Cards