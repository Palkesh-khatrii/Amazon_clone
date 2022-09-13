import React from "react";
import "./Product.css";
// import { useDispatch } from "react-redux";
// import { Add } from "./redux/action/action";

function Product({ title, image, price, rating }) {
  // const dispatch = useDispatch();

  const addToCartMethod = (item) => {
    // dispatch(Add(item));
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟 </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={() => addToCartMethod({ title, image, price, rating })}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
