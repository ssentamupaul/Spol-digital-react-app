import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../product/ProductsData";
// import { AiOutlineLike } from "react-icons/ai";

const ProductDetails = (props) => {
  const params = useParams();
  const id = +params.id;
  const product = products.filter((p) => p.id === id)[0];
  return (
    <div className="container">
      <h1>{product.name}</h1>
      {/* <AiOutlineLike /> */}
      <p>{product.description}</p>
      <p>{product.price}</p>
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt="product" style={{ width: "100%" }} />
        </div>
      </div>
      <Link to="ShoppingCart"></Link>
    </div>
  );
};

export default ProductDetails;
