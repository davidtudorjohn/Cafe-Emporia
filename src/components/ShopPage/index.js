import React from "react";
import "./shoppage.css";
import products from "../../productData";
import Product from "../Product";
const ShopPage = props => (
  <div id="shopWrap">
    {products.map(product => (
      <Product
        key={product.id}
        id={product.id}
        productName={product.name}
        price={product.price}
        image={product.image}
        madeIn={product.madeIn}
      />
    ))}
  </div>
);
export default ShopPage;
