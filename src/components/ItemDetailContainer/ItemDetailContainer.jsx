import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailItemProd } from "../../service/firebase";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [productItem, setProductItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    getDetailItemProd(id)
      .then((items) => {
        setProductItem(items);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
        navigate("/");
      })
      .finally(() => setIsLoading(false));
  }, [id, navigate]);

  if (isLoading) return <Loader />;

  return <ItemDetail item={productItem} />;
}

export default ItemListContainer;
