import React from "react";
import { useContext } from "react";
import CartContext from "./CartContext";
export default function ShoppingCart() {
  const { items, incrementQuantity, decrementQuantity } =
    useContext(CartContext);
  let total = 0;

  return (
    <CartContext.Provider value={{ items }}>
      <div className="container ">
        <h2 className="my-5">Shopping Cart</h2>
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>price</th>
                <th>quantity</th>
                <th>sub total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const subTotal = item.product.price * item.quantity;
                total = total + subTotal;
                // const decrementQuantity = {};
                return (
                  <tr key={toString()}>
                    <td>{item.product.name}</td>
                    <td>{item.product.price}</td>

                    <td className="justify-content-evenly d-flex">
                      <button
                        onClick={() => decrementQuantity(item.product.id)}
                        className="btn btn-danger"
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => incrementQuantity(item.product.id)}
                        className="btn btn-success"
                      >
                        +
                      </button>
                    </td>
                    <td>{subTotal}</td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>Total</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </CartContext.Provider>
  );
}
