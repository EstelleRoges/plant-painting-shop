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
    const exists = cartItems.find(
      (item) => item === product
    );

    if(exists) {
      setCartItems(
        cartItems.map((item) =>
          item === product
            ? {
                ...exists,
                quantity: exists.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCartItems((previousCartItems) => {
        return [
          ...previousCartItems,
          { ...product, quantity: 1, formatPrice: formatPrice },
        ];
      });
    }
  };

  const onRemove = (product) => {
    const exists = cartItems.find((item) => item === product);
    if (exists.quantity === 1) {
      onDelete(product);
    } else {
      setCartItems(
        cartItems.map((item) =>
         item === product
            ? {
                ...exists,
                quantity: exists.quantity - 1,
              }
            : item
        )
      );
    }
  };

  const onDelete = (product) => {
    setCartItems((previousCartItems) => {
      return previousCartItems.filter((item) => item !== product);
    });
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              onAdd={onAdd}
              count={cartItems.length}
              isConnected={isConnected}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/productDetails/:id"
            element={<ProductDetails onAdd={onAdd} />}
          />
          <Route
            path="/signInUp"
            element={
              <SignInUp
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route
            path="/userDashboard"
            element={
              <UserDashboard
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout checkout={cartItems} emptyCart={emptyCart} />}
          />
          <Route path="/paymentAccepted" element={<PaymentAccepted />} />
          <Route path="/error404" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
