import React from "react";
import styled from "styled-components";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import ItemCounter from "../ItemCounter/ItemCounter";

const ItemContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  max-width: 1200px;
  margin: auto;

  img {
    max-width: 600px;
  }
`;

const ItemCounterContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  color: black;
`;

function ItemDetail({ item }) {
  return (
    <>
      {" "}
      <ItemContainerStyled>
        <h1>{item.title}</h1>
        <img src={item.thumbnail} alt={item.title} />
        <p>{item.description}</p>
        <p>Cantidad disponible: {item.stock}</p>
      </ItemContainerStyled>
      <ItemCounterContainerStyled>
        <ItemCounter stock={item.stock} />
        <ButtonAdd text="Agregar al carrito" />
      </ItemCounterContainerStyled>
    </>
  );
}

export default ItemDetail;
