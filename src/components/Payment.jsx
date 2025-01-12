import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Css/Payment.css";

function Payment() {
  const { sum } = useParams(); // מקבל את הסכום דרך הפרמטרים
  const [showPopup2, setShowPopup2] = useState(false); // מצב לפופאפ

  const handlePayment = () => {
  
      setShowPopup2(true);
      setTimeout(() => setShowPopup2(false), 3000); // הפופאפ ייעלם אחרי 3 שניות
    
  };
  return (
    <div className="payment-container">
      <h1 className="payment-title">סכום לתשלום</h1>
      <p className="payment-sum">₪{sum}</p>
      <button onClick={() => handlePayment()}className="payment-button">אישור תשלום</button>

      {showPopup2 && (
        <div className="popup2">
          <p>!התשלום בוצע בהצלחה</p>
          <p>חשבונית נשלחה למייל</p>
        </div>
      )}
    </div>
  );
}

export default Payment;
