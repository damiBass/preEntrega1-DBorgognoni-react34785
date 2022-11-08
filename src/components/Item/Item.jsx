import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import ItemCounter from "../ItemCounter/ItemCounter";

const CardContainerStyled = styled.div`
  text-align: center;
  width: 250px;
  border-radius: 20px;
  color: black;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.3s ease;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const CardImageStyled = styled.div`
  height: 150px;
  border-bottom: 1px solid gray;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const CardDescriptionStyled = styled.div`
  height: 135px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;

  h3 {
    margin: 0;
  }
  span {
    color: red;
  }

  p {
    color: gray;
    font-size: 13px;
    span {
      color: gray;
      font-size: 11px;
    }
  }
`;

function Item(props) {
  let urlDetail = `/item/${props.id}`;

  console.log(props);

  return (
    <CardContainerStyled>
      <CardImageStyled>
        <img src={props.img} alt="card-img" />
      </CardImageStyled>
      <CardDescriptionStyled>
        <h3>{props.title}</h3>
        <span>{props.price}</span>
        <p>
          Stock disponible <span>({props.stock})</span>
        </p>
        <Link to={urlDetail}>
          <button
            style={{
              backgroundColor: "#dcfffc",
              border: "1px solid grey ",
              borderRadius: "20px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Ver Mas
          </button>
        </Link>
      </CardDescriptionStyled>
      <ItemCounter stock={props.stock} />
      <ButtonAdd text='Agregar carrito' itemButton/>
    </CardContainerStyled>
  );
}

export default Item;
