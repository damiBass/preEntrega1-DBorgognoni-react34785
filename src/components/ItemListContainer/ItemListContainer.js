import React from "react";
import ItemCard from "../ItemCard/ItemCard";

function ItemListContainer() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <ItemCard grettings="Hi" />
    </div>
  );
}

export default ItemListContainer;
