
import PerfumeCard from "./PerfumeCard";
import './Css/PerfumeList.css';

function PerfumeList({ perfumes, handleAddToCart,ManagerDeleteProduct,ManagerEditProduct }) {
  return (
    <div className="products-container">
      {perfumes.map((p) => (
        <PerfumeCard key={p.id} perfume={p} handleAddToCart={handleAddToCart} ManagerDeleteProduct={ManagerDeleteProduct} ManagerEditProduct={ManagerEditProduct}/>
      ))}
    </div>
  );
}

export default PerfumeList;
