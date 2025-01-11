import { Helmet } from 'react-helmet';
import React, { useState } from "react";
import "./Css/Contact.css"

const Contact = () => {

  const [showPopup1, setShowPopup1] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup1(true);
    setTimeout(() => setShowPopup1(false), 4000);
    // מוחק את הנתונים לאחר לחיצה על שליחה
    e.target.reset();

  };

  return (

    <div className="contact-form-container">
      <div> <Helmet>
        <title>Perfumery/Contact</title>
      </Helmet></div>
      <h1>יצירת קשר</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">שם:</label>
        <input type="text" id="name" name="name" placeholder="שם" required />

        <label htmlFor="phone">טלפון:</label>
        <input type="tel" id="phone" name="phone" placeholder="טלפון" required />

        <label htmlFor="email">אימייל:</label>
        <input type="email" id="email" name="email" placeholder="מייל" required />

        <label htmlFor="message">תוכן הפניה:</label>
        <textarea id="message" name="message" placeholder="כתוב כאן את הפניה שלך..." rows="4" required></textarea>

        <button type="submit" className="submit-button">שלח פניה</button>
      </form>

      {showPopup1 && (
        <div className="popup1">
          <p>פנייתך נשלחה בהצלחה!</p>
        </div>
      )}
    </div>
  );
};

export default Contact;

