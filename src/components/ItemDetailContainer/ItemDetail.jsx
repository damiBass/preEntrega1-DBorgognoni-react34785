import React, { useState, useContext } from "react";
import cartContext from "../../store/CartContext";
import { Link } from "react-router-dom";

import ItemCounter from "../ItemCounter/ItemCounter";

import { ItemContainerStyled, ItemCounterContainerStyled } from "./style";

function ItemDetail({ item }) {
  const [cart, setCart] = useState(false);

  const { addItem } = useContext(cartContext);

  function onAddToCart(amount) {
    const itemsInCart = {
      ...item,
      quantity: amount,
    };
    addItem(itemsInCart);
    setCart(true);
  }
  return (
    <>
      {" "}
      <ItemContainerStyled>
        <h1>{item.title}</h1>
        <img src={item.thumbnail} alt={item.title} />
        <p style={{ textAlign: "center" }}>
          Descripción del producto: <br />
          {item.description}
        </p>
        <p style={{ fontSize: "20px", fontWeight: "bolder", color: "red" }}>
          USD {item.price}
        </p>
        <p>Cantidad disponible: {item.stock}</p>
      </ItemContainerStyled>
      {!cart ? (
        <ItemCounterContainerStyled>
          <ItemCounter stock={item.stock} onAddToCart={onAddToCart} />
        </ItemCounterContainerStyled>
      ) : (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/cart">Ir al carrito</Link>
          <Link to="/">Volver al catalogo</Link>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
