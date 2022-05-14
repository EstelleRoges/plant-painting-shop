import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/Layout/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Product_details/ProductDetails";
import Cart from "./pages/Cart/Cart";
import SignInUp from "./pages/UserCorner/SignInUp/SignInUp";
import About from "./pages/About/About";
import Error404 from "./pages/Other/error404";
import productList from "./Other/Lists/ProductList";
import { useState } from "react";

function App() {
  const { inCartItems } = productList;
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exists, quantity: exists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log("After adding an item: " + cartItems.map(item => {
      console.log({...item});
    }));
    console.log("Items in cart:" + cartItems.length);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout onAdd={onAdd} count={cartItems.length} cartItems={cartItems} />}
        >
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/productDetails/:id"
            element={<ProductDetails onAdd={onAdd} inCartItems={inCartItems} cartItems={cartItems}/>}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={<Cart onAdd={onAdd} cartItems={cartItems} />}
          />
          <Route path="/signInUp" element={<SignInUp />} />
          <Route path="/error404" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
