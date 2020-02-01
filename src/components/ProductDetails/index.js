import React, { useState } from "react";
import "./productdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../actions";
const ProductDetails = props => {
  console.log(props);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [addProductMessage, setAddProducMessage] = useState(false);
  const handleAddItem = e => {
    e.preventDefault();
    setAddProducMessage(true);
    setTimeout(() => setAddProducMessage(false), 3000);
    dispatch(addItem(props.location.state));

    console.log(cart);
  };
  return (
    <div className="details">
      {addProductMessage ? (
        <div id="addProductMsg">Product added to cart</div>
      ) : (
        ""
      )}
      <h1>{props.location.state.name}</h1>
      <img className="productImg" src={props.location.state.image}></img>
      <p>Price ${props.location.state.price}</p>
      <p>Country of origin: {props.location.state.madeIn}</p>
      <button onClick={handleAddItem}>Add to Cart</button>
    </div>
  );
};
export default ProductDetails;
