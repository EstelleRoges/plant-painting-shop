import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SucciContext } from "./Constants/SucciContext";
import Layout from "../src/Layout/Layout";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Product_details/ProductDetails";
import Cart from "./pages/PaymentCorner/Cart";
import SignInUp from "./pages/UserCorner/SignInUp/SignInUp";
import About from "./pages/About/About";
import Error404 from "./pages/Other/error404";
import Checkout from "./pages/PaymentCorner/Checkout";
import PaymentAccepted from "./pages/PaymentCorner/PaymentAccepted";
import UserDashboard from "./pages/UserCorner/UserDashboard/UserDashboard";

import { onAdd, onRemove, onDelete, emptyCart } from "./Constants/AppFunctions";

function App() {
    const [cartItems, setCartItems] = useState([]);
  const [recap, setRecap] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  return (
    <SucciContext.Provider value={{cartItems, setCartItems, onAdd, onRemove, onDelete, emptyCart, recap, setRecap, isConnected, setIsConnected}}>
      <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout />
          }
        >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/productDetails/:id"
            element={<ProductDetails />}
          />
          <Route
            path="/signInUp"
            element={
              <SignInUp />
            }
          />
          <Route
            path="/userDashboard"
            element={
              <UserDashboard />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route path="/paymentAccepted" element={<PaymentAccepted />} />
          <Route from="*" path="/error404" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </SucciContext.Provider>
  );
}

export default App;
