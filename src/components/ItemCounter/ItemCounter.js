import React, { useState } from "react";
import styled from "styled-components";

const CounterContainerStyled = styled.div`
  border-top: 1px solid purple;
  display: flex;
`;

function ItemCounter({ stock }) {
  const [mount, setMount] = useState(0);

  function handleClick() {
    if (mount < stock) {
      setMount(mount + 1);
    }
  }

  function handeleRest() {
    if (mount >= 1) {
      setMount(mount - 1);
    }
  }

  return (
    <CounterContainerStyled>
      <div style={{ flex: 0.9 }}>
        <button onClick={handeleRest}>-</button>
        <button onClick={handleClick}>+</button>
      </div>

      <p>Cantidad {mount}</p>
    </CounterContainerStyled>
  );
}

export default ItemCounter;
