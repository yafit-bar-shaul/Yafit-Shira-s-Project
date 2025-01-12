import React, { useEffect, useState } from 'react';
import './Css/Cart.css'; // ייבוא העיצוב
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Cart = ({cartItems, DeleteProduct, sum}) => {
  
  const handlePaymentRedirect = (sum) => {
    const sumNumber = Number(sum); // המרת הסכום למספר
    if (sumNumber === 0) {
      alert("אין מוצרים בעגלה. אנא בחר מוצר.");
      return false; // מונע את המעבר לקישור
    }
    return true; // מאפשר את המעבר לקישור אם הסכום לא 0
  };

  return (
    <div className="cart-container">
       <Helmet>
        <title>Perfumery/Cart</title>
      </Helmet>
      
      <h1 className="cart-title">העגלה שלי</h1>
      <ul className="cart-list">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img
              src={`/images/${item.img}`}
              alt={item.company}
              className="cart-item-img"
            />
            <div className="cart-item-details">
              <p className="cart-item-company">{item.company}</p>
              <p className="cart-item-price">מחיר: ₪{item.price}</p>
            </div>
            <button onClick={() => DeleteProduct(item)}>מחק</button>
          </li>
        ))}
      </ul>
      <div className="payment-container">
        
        {/* כשמשתמש לוחץ על כפתור מעבר לתשלום, נבדוק את הסכום */}
        <button 
          onClick={() => {
            if (handlePaymentRedirect(sum)) {
              // אם הסכום לא אפס, נוודא שהמעבר יקרה
            }
          }}
          className="payment-button"
        >
          מעבר לתשלום
        </button>

      </div>
    </div>
  );
};

export default Cart;
