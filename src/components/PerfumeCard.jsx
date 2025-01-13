
// import { Link } from "react-router-dom";
// import './Css/PerfumeCard.css';
// import MyContext from "./context/context";
// import { useContext } from "react";

// function PerfumeCard({ perfume, handleAddToCart, ManagerDeleteProduct,ManagerEditProduct }) {

//   const { currentUser } = useContext(MyContext);

//   return (
//     <div className="perfume-card">
//       <img src={`/images/${perfume.img}`} alt={perfume.company} className="card-img" />
//       <p>{perfume.company}</p>
//       <p>₪{perfume.price}</p>
//       {currentUser ? (
//   <button
//     onClick={() => handleAddToCart(perfume)}
//     className="add-to-cart-button"
//   >
//     הוסף לסל
//   </button>
// ) : (
//   <button
//     onClick={() => alert("אנא התחבר לאתר אם ברצונך להוסיף מוצרים לעגלה.")}
//     className="add-to-cart-button disabled"
//   >
//     הוסף לסל
//   </button>
// )}
//       <br />
//       <br />
//       {currentUser?.role == "manager" && <button onClick={() => ManagerDeleteProduct(perfume)}>מחק מוצר</button>}
//       <br />
//       <Link to={`/perfumeDetails/${perfume.company}/${perfume.price}/${perfume.mil}/${perfume.img}`} className="link">
//         לפרטים נוספים
//       </Link>



//     </div>
//   );
// }

// export default PerfumeCard;
import { Link } from "react-router-dom";
import './Css/PerfumeCard.css';
import MyContext from "./context/context";
import { useContext, useState } from "react";

function PerfumeCard({ perfume, handleAddToCart, ManagerDeleteProduct, ManagerEditProduct }) {
  const { currentUser } = useContext(MyContext);

  // מצב לעריכת המחיר
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(perfume.price);

  const handleSavePrice = () => {
    ManagerEditProduct(perfume, newPrice); // עדכון המחיר
    setIsEditing(false); // סגירת מצב העריכה
  };

  return (
    <div className="perfume-card">
      <img src={`/images/${perfume.img}`} alt={perfume.company} className="card-img" />
      <p>{perfume.company}</p>
      <p>₪{isEditing ? (
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          className="price-input"
        />
      ) : (
        perfume.price
      )}</p>
      {currentUser ? (
        <button
          onClick={() => handleAddToCart(perfume)}
          className="add-to-cart-button"
        >
          הוסף לסל
        </button>
      ) : (
        <button
          onClick={() => alert("אנא התחבר לאתר אם ברצונך להוסיף מוצרים לעגלה.")}
          className="add-to-cart-button disabled"
        >
          הוסף לסל
        </button>
      )}
      <br />
      <br />
      {currentUser?.role === "manager" && (
        <>
          <button onClick={() => ManagerDeleteProduct(perfume)}>מחק מוצר</button>
          <br /><br />
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)}>ערוך </button>
          ) : (
            <>
              <button onClick={handleSavePrice}>שמור</button>
              <button onClick={() => setIsEditing(false)}>ביטול</button>
            </>
          )}
        </>
      )}
      <br />
      <Link
        to={`/perfumeDetails/${perfume.company}/${perfume.price}/${perfume.mil}/${perfume.img}`}
        className="link"
      >
        לפרטים נוספים
      </Link>
    </div>
  );
}

export default PerfumeCard;
