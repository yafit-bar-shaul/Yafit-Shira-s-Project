
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import PerfumeList from './PerfumeList';
import Contact from './Contact';
import PerfumeDetails from './PerfumeDetails';
import Cart from './Cart';
import Payment from './Payment';

export const Routing = ({ perfumes, handleAddToCart ,cartItems,DeleteProduct,sum}) => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/perfumes" element={<PerfumeList perfumes={perfumes} handleAddToCart={handleAddToCart} />} />
      <Route path="/perfumeDetails/:company/:price/:mil/:img" element={<PerfumeDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart  cartItems={cartItems}DeleteProduct={DeleteProduct} sum={sum}/>} />
      <Route path="/payment/:sum" element={<Payment />} />

      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Routing;

