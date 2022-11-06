import React from "react";
import styled from "styled-components";
import ItemCounter from "../ItemCounter/ItemCounter";

const CardContainerStyled = styled.div`
  text-align: center;
  height: 100%;
  width: 250px;
  border: 1px solid aliceblue;
`;

const CardImageStyled = styled.div`
  height: 200px;
  border-bottom: 1px solid aliceblue;
`;

const CardDescriptionStyled = styled.div`
  height: 125px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function ItemCard(props) {
  return (
    <CardContainerStyled>
      <CardImageStyled>
        <img src={props.img} alt="card-img" />
      </CardImageStyled>
      <CardDescriptionStyled>
        <h2>{props.title}</h2>
        <span>{props.price}</span>
        <p>
          Stock disponible <span>({props.stock})</span>
        </p>
      </CardDescriptionStyled>
      <ItemCounter stock={props.stock} />
    </CardContainerStyled>
  );
}

export default ItemCard;
