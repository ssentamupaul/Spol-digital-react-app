import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartContext from "../Cart/CartContext";
import logo from "../img/Logo.png";

const Navbar = () => {
  const { items } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-White fixed-top border-bottom ">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <img src={logo} alt="Logo" style={{ height: "30px" }} />
        </span>

        <Link className="btn btn-success" to={"/login"}>
          Login
        </Link>

        <Link to={"/shoppingCart"} className="text-white">
          <AiOutlineShoppingCart size="21px" className="text-dark" />
          <span className="text-danger ml-1">{items.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
