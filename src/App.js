import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../src/Layout/Layout';
import Home from "./pages/Home/Home"; 
import Products from './pages/Products/Products';
import ProductDetails from './pages/Product_details/ProductDetails';
import Cart from './pages/Cart/Cart';
import SignInUp from "./pages/UserCorner/SignInUp/SignInUp";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signInUp" element={<SignInUp />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
