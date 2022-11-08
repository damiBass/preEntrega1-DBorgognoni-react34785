import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailItemProd } from "../../service/service";
import ItemDetail from "./ItemDetail";

function ItemListContainer() {
  const [productItem, setProductItem] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getDetailItemProd(id)
      .then((items) => {
        setProductItem(items);
      })
      .catch((error) => alert(error));
  }, [id]);

  return <ItemDetail item={productItem} />;
}

export default ItemListContainer;
