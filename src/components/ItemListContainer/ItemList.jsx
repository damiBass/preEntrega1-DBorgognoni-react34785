import React from "react";
import Item from "../Item/Item";

function ItemList(props) {
  return (
    <>
      {" "}
      {props.products.map((item) => (
        <Item
          img={item.thumbnail}
          title={item.title}
          key={item.id}
          stock={item.stock}
          price={`USD ${item.price}`}
          id={item.id}
        />
      ))}
    </>
  );
}

export default ItemList;
