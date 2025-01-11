
import PerfumeCard from "./PerfumeCard";
import './Css/PerfumeList.css';

function PerfumeList({ perfumes, handleAddToCart,ManagerDeleteProduct }) {
  return (
    <div className="products-container">
      {perfumes.map((p) => (
        <PerfumeCard key={p.id} perfume={p} handleAddToCart={handleAddToCart} ManagerDeleteProduct={ManagerDeleteProduct} />
      ))}
    </div>
  );
}

export default PerfumeList;
