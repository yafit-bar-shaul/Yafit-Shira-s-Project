import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Css/CartIcon.css'; 

const CartIcon = ({ cartCount }) => {
  return (
    <div className="cart-icon-container">
      
       <Link
        to={cartCount !== 0 ? "/cart" : "#"}
        className="cart-icon-link"
        onClick={(e) => {
          if (cartCount === 0) {
            e.preventDefault(); 
          }
        }}
      >
        <FontAwesomeIcon icon={faShoppingCart}className="cart-icon" />
        <span className="cart-count">{cartCount}</span> 
      </Link>
    </div>
  );
};
export default CartIcon;