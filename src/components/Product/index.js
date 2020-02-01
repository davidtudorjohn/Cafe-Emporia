import React, { useState } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../actions";
import { Link } from "react-router-dom";
const Product = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const product = {
    name: props.productName,
    price: props.price,
    image: props.image,
    madeIn: props.madeIn,
    quantity: 1
  };
  const [addProductMessage, setAddProducMessage] = useState(false);
  const handleAddItem = e => {
    e.preventDefault();
    setAddProducMessage(true);
    setTimeout(() => setAddProducMessage(false), 3000);
    dispatch(addItem(product));

    console.log(cart);
  };

  return (
    <div className="productCard">
      {addProductMessage ? (
        <div id="addProductMsg">Product added to cart</div>
      ) : (
        ""
      )}
      <Link
        to={{
          pathname: `/product/${props.productName}`,
          state: {
            name: props.productName,
            price: props.price,
            image: props.image,
            madeIn: props.madeIn
          }
        }}
      >
        <img className="productImg" alt="" src={props.image}></img>
      </Link>
      <h3 className="productName">{props.productName}</h3>
      <p className="productPrice">${props.price}</p>
      <button onClick={handleAddItem}>Add to Cart</button>
    </div>
  );
};
export default Product;
