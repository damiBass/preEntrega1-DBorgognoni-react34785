import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItemProdCategory, getItemProd } from "../../service/firebase";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (category) {
      getItemProdCategory(category)
        .then((items) => {
          setProducts(items);
          setIsLoading(false);
        })
        .catch((error) => {
          alert(error);
          navigate("/");
        })
        .finally(() => setIsLoading(false));
    } else {
      getItemProd().then((items) => {
        setProducts(items);
        setIsLoading(false);
      });
    }
  }, [category, navigate]);

  if (isLoading) return <Loader />;

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "50px",
        flexWrap: "wrap",
        gap: "30px",
        maxWidth: "1366px",
      }}
    >
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
