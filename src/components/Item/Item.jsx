import React from "react";
import { Link } from "react-router-dom";

import {
  CardContainerStyled,
  CardImageStyled,
  CardDescriptionStyled,
} from "./style";

function Item(props) {
  let urlDetail = `/item/${props.id}`;

  return (
    <CardContainerStyled>
      <CardImageStyled>
        <img src={props.img} alt="card-img" />
      </CardImageStyled>
      <CardDescriptionStyled>
        <h3>{props.title}</h3>
        <span>USD {props.price}</span>
        <br />
        {props.discountPercentage > 15 && (
          <span>% {props.discountPercentage}</span>
        )}

        <p>
          Stock disponible <span>({props.stock})</span>
        </p>
        <Link to={urlDetail}>
          <button
            style={{
              backgroundColor: "#dcfffc",
              border: "1px solid grey ",
              borderRadius: "10px",
              padding: "5px 10px",
              cursor: "pointer",
              fontFamily: "Poppins",
            }}
          >
            Ver Mas
          </button>
        </Link>
      </CardDescriptionStyled>
    </CardContainerStyled>
  );
}

export default Item;
