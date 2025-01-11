
import './App.css';
import CartIcon from './components/CartIcon';
import { Routing } from './components/Routing';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  // מערך של המוצרים
  const [perfumes, setPerfumes] = useState([
    { id: 1, company: "GUESS", price: 300, mil: 150, img: "GUESS.jpg" },
    { id: 2, company: "KARL LAGERFELD ", price: 580, mil: 220, img: "KARL.jpg" },
    { id: 3, company: "BOSS", price: 450, mil: 120, img: "BOSS.jpeg" },
    { id: 4, company: "DKNY", price: 280, mil: 200, img: "DKNY.webp" },
    { id: 5, company: "GA-DE", price: 450, mil: 140, img: "GADE.webp" },
    { id: 6, company: "JIVAGO", price: 380, mil: 220, img: "JIVAGO.webp" },
    { id: 7, company: "TOUS", price: 300, mil: 200, img: "TOUS.webp" },
    { id: 8, company: "LANCOME", price: 320, mil: 200, img: "LANKOM.jpg" },
  ]);

  // מערך למעקב אחרי מוצרים בעגלה
  const [cartItems, setCartItems] = useState([]);

  // משתנה למעקב אחרי כמות הפריטים בעגלה
  const [count, setCount] = useState(0);

  // משתנה להצגת פופאפ
  const [showPopup, setShowPopup] = useState(false);
const[sum,setSum]=useState(0);
  // פונקציה להוספת מוצר לעגלה
  const handleAddToCart = (perfume) => {
    const updatedCart = [...cartItems, perfume];
    setCartItems(updatedCart); // עדכון העגלה
    setCount(updatedCart.length); // עדכון הכמות
    addSum(perfume.price)//הפעלת פונקציה של הוספה של הסכום
    setShowPopup(true); // הצגת הפופאפ
    setTimeout(() => {
      setShowPopup(false); // הסתרת הפופאפ
    }, 1000);
  };
  // פונקציה להוספת מחיר המוצר לסכום הכולל
  const addSum = (price)=>{
   
    setSum( sum+price );
  }
  // פונקציה שנשלחת מהפונקציה של מחיקת מוצר-מורידה מהסכום
  const ReduceSum = (price)=>{
   
    setSum( sum-price );
  }
  
  // פונקציה למחיקת מוצר מהעגלה
  const DeleteProduct = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    ReduceSum(product.price);
    setCartItems(updatedCart); // עדכון העגלה
    setCount(updatedCart.length); // עדכון הכמות
  };

  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav">
          <CartIcon cartCount={count} />
          <Link to="contact" className="nav-link">צור קשר</Link>
          <Link to="perfumes" className="nav-link">מוצרים</Link>
          <img src="/images/LOGO.ico" alt="לוגו" style={{ width: '110px', height: 'auto', border: '2px', borderRadius: '50%' }} />
          <Link to="about" className="nav-link">אודות</Link>
          <Link to="home" className="nav-link">דף הבית</Link>
        </nav>
      </header>

      <main className="main-content">
        <Routing perfumes={perfumes} handleAddToCart={handleAddToCart} cartItems={cartItems} DeleteProduct={DeleteProduct} sum={sum}/>
      </main>

      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <p>!המוצר נוסף בהצלחה</p>
            <Link to="/cart" className="popup-link">מעבר לעגלה</Link>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
