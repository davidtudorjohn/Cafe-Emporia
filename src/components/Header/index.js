import React from "react";
import NavItem from "../NavItem";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = props => {
  const cart = useSelector(state => state.cart);
  return (
    <header>
      <h1>
        <Link id="logo" to="/">
          Cafe Emporia
        </Link>
      </h1>

      <nav>
        <ul>
          <Link to="/shop">
            <NavItem textContent="Shop" />
          </Link>
          <Link to="/blog">
            <NavItem textContent="Blog" />
          </Link>
          <Link to="/cart">
            <NavItem textContent={`Cart (${cart.length})`} />
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
