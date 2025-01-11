
import { Link } from "react-router-dom";
import './Css/PerfumeCard.css';
import MyContext from "./context/context";
import { useContext } from "react";

function PerfumeCard({ perfume, handleAddToCart, ManagerDeleteProduct }) {

  const { currentUser } = useContext(MyContext);

  return (
    <div className="perfume-card">
      <img src={`/images/${perfume.img}`} alt={perfume.company} className="card-img" />
      <p>{perfume.company}</p>
      <p>₪{perfume.price}</p>
      <button onClick={() => handleAddToCart(perfume)}>הוסף לסל</button>
      <br />
      <br />
      {currentUser?.role == "manager" && <button onClick={() => ManagerDeleteProduct(perfume)}>מחק מוצר</button>}
      <br />
      <Link to={`/perfumeDetails/${perfume.company}/${perfume.price}/${perfume.mil}/${perfume.img}`} className="link">
        לפרטים נוספים
      </Link>



    </div>
  );
}

export default PerfumeCard;
