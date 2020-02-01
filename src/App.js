import React from "react";
import "./App.css";
import Header from "./components/Header";
import ShopPage from "./components/ShopPage";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/product/:name" exact component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
