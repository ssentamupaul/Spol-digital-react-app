import React from "react";
import { useContext, useState } from "react";
import CartContext from "../Cart/CartContext";
import { AiTwotoneLike } from "react-icons/ai";
import { Link } from "react-router-dom";

function Product(props) {
  // cart functionality
  const { addToCart } = useContext(CartContext);

  // state to track if the first icon has been clicked
  const [isFirstIconClicked, setIsFirstIconClicked] = useState(false);

  // state to track if the item has been added to cart
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // function to handle the first icon click
  const handleFirstIconClick = () => {
    setIsFirstIconClicked(true);
  };

  // function to handle the "Add to cart" button click
  const handleAddToCart = () => {
    addToCart(props.product);
    setIsAddedToCart(true);
  };

  return (
    <div>
      <div className="justify-content-center product">
        <div className="card">
          <img
            src={props.product.image}
            className="card"
            style={{ height: "250px" }}
            alt="..."
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{props.product.name}</h5>

              {isFirstIconClicked && (
                <>
                  <AiTwotoneLike className="text-danger" />
                  <Link to={"/wishlist"}>Go to wishList</Link>
                </>
              )}

              {!isFirstIconClicked && (
                <AiTwotoneLike onClick={handleFirstIconClick} />
              )}
            </div>
            <p className="card-title">{props.product.description}</p>
            <p className="card-title">
              <b>shs.{props.product.price}</b>
            </p>
            <div className="d-flex"></div>

            <button
              className={`btn ${
                isAddedToCart ? "btn-warning" : "btn-primary"
              } text-white w-50`}
              onClick={handleAddToCart}
            >
              {isAddedToCart ? "Added to cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
