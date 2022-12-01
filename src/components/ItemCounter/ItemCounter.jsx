import React, { useState } from "react";

import Button from "../Button/Button";
import { CounterContainerStyled, ButtonCounterStyled } from "./style";

function ItemCounter({ stock, onAddToCart }) {
  const [amount, setMount] = useState(0);

  function handleClick() {
    if (amount < stock) {
      setMount(amount + 1);
    }
  }

  function handeleRest() {
    if (amount >= 1) {
      setMount(amount - 1);
    }
  }

  return (
    <CounterContainerStyled>
      <div
        style={{
          display: "flex",
          flex: 0.9,
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <ButtonCounterStyled
          onClick={handeleRest}
          style={{ backgroundColor: "red" }}
        >
          -
        </ButtonCounterStyled>
        <ButtonCounterStyled
          onClick={handleClick}
          style={{ backgroundColor: "green" }}
        >
          +
        </ButtonCounterStyled>
      </div>
      <p>Cantidad {amount}</p>
      <Button text="Agregar al carrito" onClick={() => onAddToCart(amount)} />
    </CounterContainerStyled>
  );
}

export default ItemCounter;
