import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div style={{ cursor: "pointer" }}>
      <FontAwesomeIcon icon={faCartShopping} color="red" fontSize={25}/>
    </div>
  );
}

export default CartWidget;
