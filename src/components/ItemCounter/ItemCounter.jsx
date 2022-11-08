import React, { useState } from "react";
import styled from "styled-components";

const CounterContainerStyled = styled.div`
  border-top: 1px solid purple;
  display: flex;
  align-items: center;
  p {
    font-size: 13px;
  }
`;

const ButtonCounterStyled = styled.button`
  width: 40%;
  border-radius: 5px;
  cursor: pointer;
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
      <p>Cantidad {mount}</p>
    </CounterContainerStyled>
  );
}

export default ItemCounter;
