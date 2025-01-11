
import PerfumeCard from "./PerfumeCard";
import './Css/PerfumeList.css';

function PerfumeList({ perfumes, handleAddToCart }) {
  return (
    <div className="products-container">
      {perfumes.map((p) => (
        <PerfumeCard key={p.id} perfume={p} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default PerfumeList;
