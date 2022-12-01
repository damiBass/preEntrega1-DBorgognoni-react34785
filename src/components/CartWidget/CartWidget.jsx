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

      <StyledBadge>
        {totalItemsInCart() > 0 ? totalItemsInCart() : null}
      </StyledBadge>
    </div>
  );
}

export default CartWidget;
