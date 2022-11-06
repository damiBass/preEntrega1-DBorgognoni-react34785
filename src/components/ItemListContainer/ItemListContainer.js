import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { dataProducts } from "../../data/data";

function ItemListContainer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {dataProducts.map((item) => (
        <ItemCard
          title={item.title}
          key={item.id}
          stock={item.stock}
          price={`USD ${item.price}`}
        />
      ))}
    </div>
  );
}

export default ItemListContainer;
