import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import { products } from "./data";
import ProductInfo from './pages/ProductInfo';
import Cart from './pages/Cart';
import { counter } from "@fortawesome/fontawesome-svg-core";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const dupeItem = cart.find((item) => item.id === product.id);
    setCart((oldCart) =>
      dupeItem
        ? [
            ...oldCart.map((item) => {
              return item.id === dupeItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...product, quantity: 1 }]
    );
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: newQuantity,
          };
        } else {
          return oldItem;
        }
      })
    );
  }

  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }


  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }
    


  return (
    <Router>
      <div className="App">
        <Route />
        <Nav numberOfItems={numberOfItems()}/>
        <Route path="/" exact render={() => <Home products={products} />} />
        <Route path="/products" exact render={() => <Products products={products} />} />
        <Route
          path="/products/:id"
          render={() => (
            <ProductInfo products={products} addToCart={addToCart} />
          )}
        />
        <Route path="/cart" 
        render={() => (
        <Cart 
        cart={cart} 
        updateCart={updateCart}
        removeItem={removeItem}
        totals={calcPrices()} />
        )} 
        />
        
      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
