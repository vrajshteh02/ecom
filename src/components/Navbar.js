import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ size }) => {
  return (
    // <div className='navbar'>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/" className='list'>Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/Cart" className='list'>Cart</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Outlet />
    // </div>
    <header>
      <nav className="navbar">
        <Link to="/" className='list'>
          <div className="logo bor cur">
            <img src="/" alt="" className="amzlogo" />
            <span className="font3 link1">Amazon.in</span>
          </div>
        </Link>
        <div className="location bor">
          <div className="loc cur">
            <i
              className="fa-solid fa-location-dot iconloc"
              style={{ color: "#ffffff" }}
            />
            <div>
              <p className="font1">Deliver to Vraj</p>
              <p className="font2">Vadodara 390022</p>
            </div>
          </div>
        </div>
        <div className="searchbar">
          <form className="form">
            <select name="All" id="All">
              <option value="">All</option>
              <option value="">Mobiles</option>
              <option value="">Grocery</option>
              <option value="">Books</option>
              <option value="">Electronics</option>
            </select>
            <input type="text" placeholder="Search Amazon.in" className="serbar" />
            {/* <div className="lens">
              <img src="/" alt="" />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div> */}
            <input type="button" defaultValue="🔍" className="searchbtn" />
          </form>
        </div>
        <div className="language bor cur">
          <img src="/" alt="" className="flag" />
          <p className="lan font2">
            EN
            <span className="arrow">
              <i className="fa-solid fa-sort-down" style={{ color: "#d4d6d9" }} />
            </span>
          </p>
        </div>
        <div className="hello bor cur">
          <p className="font1">Hello, Vraj</p>
          <span className="acc font2">
            Account &amp; Lists
            <span className="arrow">
              <i className="fa-solid fa-sort-down" style={{ color: "#d4d6d9" }} />
            </span>
          </span>
        </div>
        <div className="orders bor cur">
          <div className="ret font1">Returns</div>
          <span className="font2">&amp; Orders</span>
        </div>
        <Link to="/Cart" className='list'>
          <div className="cart bor cur">
            <span>
              {/* <i className="fa-solid fa-cart-shopping" style={{ color: "#ffffff" }} /> */}
              <FontAwesomeIcon icon={faCartShopping} /><span>{size}</span>
            </span>
            {/* <p className="font2 link1">Cart</p> */}
          </div>
        </Link>
      </nav>
      <Outlet />
    </header >

  )
}

export default Navbar;