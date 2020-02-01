import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../actions";
import "./cart.css";
const Cart = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  let count = 0;
  cart.map(item => (count += Number(item.price)));
  const dispatch = useDispatch();

  return (
    <div id="cartWrap">
      <h1>Cart</h1>

      {cart.map(p => (
        <div className="cartItem">
          <div className="productNameWrap">
            <h3 className="productName">{p.name}</h3>
          </div>
          <p>${p.price}</p>
          <p>Quantity: {p.quantity}</p>
          <button onClick={() => dispatch(removeItem(p))}>Remove</button>
        </div>
      ))}

      <h3>Total ${Number(count).toFixed(2)}</h3>
      <button>Checkout</button>
    </div>
  );
};
export default Cart;
