import { createContext, useState } from "react";

const cartContext = createContext();

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(item) {
    let findID = cartItems.some((items) => items.id === item.id);

    if (findID) {
      let newFind = cartItems.map((items) => {
        if (items.id === item.id) {
          items.quantity += item.quantity;
          return items;
        } else {
          return items;
        }
      });
      setCartItems(newFind);
    } else {
      const newCart = [...cartItems];
      newCart.push(item);
      setCartItems(newCart);
    }
  }

  function totalItemsInCart() {
    let total = 0;
    cartItems.forEach((items) => {
      total = total + items.quantity;
    });
    return total;
  }

  function totalPriceItems() {
    const initialValue = 0;
    const total = cartItems.reduce(
      (accumulator, current) => accumulator + current.quantity * current.price,
      initialValue
    );
    return total;
  }

  function removeItem(id) {
    let newCarrito = cartItems.filter((item) => item.id !== id);
    setCartItems(newCarrito);
  }

  function clear() {
    setCartItems([]);
  }

  const value = {
    totalItemsInCart,
    cartItems,
    addItem,
    clear,
    totalPriceItems,
    removeItem,
  };

  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}

export default cartContext;
