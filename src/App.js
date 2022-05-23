import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const onAdd = (product, formatPrice) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...exists,
                quantity: exists.quantity + 1
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, formatPrice: formatPrice },
      ]);
    }
  };

  const onRemove = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists.quantity === 1) {
      onDelete(product.id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...exists,
                quantity: exists.quantity - 1
              }
            : item
        )
      );
    }
  }

  const onDelete = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  const emptyCart = () => {
    setCartItems([]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              onAdd={onAdd}
              count={cartItems.length}
              cartItems={cartItems}
              isConnected = {isConnected}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/productDetails/:id"
            element={
              <ProductDetails
                onAdd={onAdd}
                cartItems={cartItems}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} />}
          />
          <Route path="/signInUp" element={<SignInUp isConnected = {isConnected} setIsConnected={setIsConnected}/>} />
          <Route path="/userDashboard" element={<UserDashboard isConnected = {isConnected} setIsConnected={setIsConnected}/>} />
          <Route path="/error404" element={<Error404 />} />
          <Route
            path="/checkout"
            element={<Checkout checkout={cartItems} emptyCart={emptyCart}/>}
          />
          <Route path="/paymentAccepted" element={<PaymentAccepted />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
