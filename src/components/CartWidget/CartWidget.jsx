import React, { useContext } from "react";
import cartContext from "../../store/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { StyledBadge } from "./style";

function CartWidget() {
  const { totalItemsInCart } = useContext(cartContext);

  return (
    <div style={{ cursor: "pointer" }}>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} color="red" fontSize={25} />
      </Link>
      <div style={{ position: "absolute", top: "10px", right: "12px" }}>
        <StyledBadge>
          <p>{totalItemsInCart() > 0 ? totalItemsInCart() : null}</p>
        </StyledBadge>
      </div>
    </div>
  );
}

export default CartWidget;
