import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../src/Layout/Layout';
import Home from "./pages/Home/Home"; 
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/userCorner" element=""></Route>
        <Route path="" element=""></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
