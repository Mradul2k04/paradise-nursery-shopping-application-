import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import ProductListing from "./components/ProductListing";
import CartPage from "./components/CartPage";
import Header from "./components/Header";

const App = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("landing");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const changePage = (newPage) => setPage(newPage);

  return (
    <div>
      <Header cartCount={cart.length} changePage={changePage} />
      {page === "landing" && <LandingPage changePage={changePage} />}
      {page === "products" && (
        <ProductListing addToCart={addToCart} changePage={changePage} />
      )}
      {page === "cart" && (
        <CartPage
          cart={cart}
          removeFromCart={removeFromCart}
          changePage={changePage}
        />
      )}
    </div>
  );
};

export default App;
