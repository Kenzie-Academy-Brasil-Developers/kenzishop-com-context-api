import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem("@KenzieShop:cart")) || []
  );

  const addCart = (product) => {
    const list = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

    const newList = [...list, product];

    localStorage.setItem("@KenzieShop:cart", JSON.stringify(newList));
  };

  const removeCart = (productId) => {
    console.log("removeu");
    const list = JSON.parse(localStorage.getItem("@KenzieShop:cart"));
    const remove = list.find((element) => element.id === productId);
    const removeItem = list.splice(list.indexOf(remove), 1);
    localStorage.setItem("@KenzieShop:cart", JSON.stringify(list));
  };

  return (
    <CartContext.Provider
      value={{ shoppingCart, addCart, setShoppingCart, removeCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
