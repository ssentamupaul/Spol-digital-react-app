import { createContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prevState) => [...prevState, { product, quantity: 2 }]);
  };
  const setQuantity = (productName, quantity) => {
    setItems((prevState) => {
      const prev = prevState.map((item) => {
        if (item.product.name === productName) {
          item.quantity = quantity;
        }
        return item;
      });
      return prev;
    });
  };
  const removeFromCart = (productName) => {
    setItems((prevState) => {
      return prevState.filter(
        (item) => item.product.productName !== productName
      );
    });
  };

  const incrementQuantity = (id) => {
    setItems((prevState) => {
      const prev = prevState.map((item) => {
        if (item.product.id === id) {
          item.quantity += 1;
        }
        return item;
      });
      return prev;
    });
  };
  const decrementQuantity = (id) => {
    setItems((prevState) => {
      const prev = prevState.map((item) => {
        if (item.product.id === id) {
          item.quantity -= 1;
        }
        return item;
      });
      return prev;
    });
  };
  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        setQuantity,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
