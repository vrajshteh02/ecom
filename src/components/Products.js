import React from 'react'
import './Product.css';
import Cards from './Cards';

export const PRODUCTS = [
  {
    id: 1,
    name: "Fire Boltt Ninja 2",
    img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
    amt: 1599,
  },

  {
    id: 2,
    name: "Noise Pulse Go",
    img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
    amt: 1300,
  },

  {
    id: 3,
    name: "boAt Xtend Pro",
    img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
    amt: 2799,
  },
  {
    id: 4,
    name: "Lenovo Tab M8",
    img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
    amt: 9270,
  },
  {
    id: 5,
    name: "Honor PAD X8",
    img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
    amt: 12999,
  },

  {
    id: 6,
    name: "IKALL N9 ",
    img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
    amt: 3999,
  },

  {
    id: 7,
    name: "Oppo Pad Air",
    img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
    amt: 15999,
  },
  {
    id: 8,
    name: "Acer EK220Q",
    img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
    amt: 6249,
  },

  {
    id: 9,
    name: "ZEBRONICS AC32FHD ",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    amt: 12799,
  },
]

const Products = ({ addToCart }) => {

  return (
    <div className='product'>
      {PRODUCTS.map((product) =>
        <Cards key={product.id} data={product} addToCart={addToCart} />
      )}
    </div>
  )
}

export default Products;