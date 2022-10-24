import React from "react";
import styled from "styled-components";

const CardContainerStyled = styled.div`
  text-align: center;
  height: 250px;
  width: 250px;
  border: 1px solid aliceblue;
`;

const CardImageStyled = styled.div`
  height: 125px;
  border-bottom: 1px solid aliceblue;
`;

const CardDescriptionStyled = styled.div`
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ItemCard(props) {
  return (
    <CardContainerStyled>
      <CardImageStyled></CardImageStyled>
      <CardDescriptionStyled>
        <h2>{props.grettings}</h2>
      </CardDescriptionStyled>
    </CardContainerStyled>
  );
}

export default ItemCard;
