
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import PerfumeList from './PerfumeList';
import Contact from './Contact';
import PerfumeDetails from './PerfumeDetails';
import Cart from './Cart';
import Payment from './Payment';
import { Login } from './Login';
import { Register } from './Register';
import { UsersManager } from './UsersManager';


export const Routing = ({ perfumes, handleAddToCart ,cartItems,DeleteProduct,sum,ManagerDeleteProduct,ManagerEditProduct}) => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/perfumes" element={<PerfumeList perfumes={perfumes} handleAddToCart={handleAddToCart} ManagerDeleteProduct={ManagerDeleteProduct} ManagerEditProduct={ManagerEditProduct}/>} />
      <Route path="/perfumeDetails/:company/:price/:mil/:img" element={<PerfumeDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart  cartItems={cartItems}DeleteProduct={DeleteProduct} sum={sum}/>} />
      <Route path="/payment/:sum" element={<Payment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/users" element={<UsersManager/>} />


      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Routing;

