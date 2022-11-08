import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getItemProd, { getItemProdCategory } from "../../service/service";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getItemProdCategory(category).then((items) => {
        setProducts(items);
      });
    } else {
      getItemProd().then((items) => {
        setProducts(items);
      });
    }
  }, [category]);

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: "50px",
        flexWrap: "wrap",
        gap: "30px",
        maxWidth: "1366px"
      }}
    >
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
