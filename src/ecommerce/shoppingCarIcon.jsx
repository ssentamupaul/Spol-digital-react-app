// ShoppingCartIcon.js

import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCartIcon = ({ itemCount }) => {
  return (
    <div style={{ position: "relative" }}>
      <FaShoppingCart size={30} />
      {itemCount > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "red",
            borderRadius: "50%",
            padding: "0.2rem 0.5rem",
            color: "black",
          }}
        >
          {itemCount}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
