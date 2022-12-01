import React from "react";
import Item from "../Item/Item";
import ClipLoader from "react-spinners/ClipLoader";

function ItemList(props) {
  let dataEmpty = props.products.length === 0;

  return (
    <>
      {" "}
      {dataEmpty ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader
            color="black"
            loading
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        props.products.map((item) => (
          <Item
            img={item.thumbnail}
            title={item.title}
            key={item.id}
            stock={item.stock}
            price={item.price}
            discountPercentage={item.discountPercentage}
            id={item.id}
          />
        ))
      )}
    </>
  );
}

export default ItemList;
