import React from "react";
import { Link } from "react-router-dom";
import { ErrorPageStyled } from "./style";

function ErrorPage() {
  return (
    <ErrorPageStyled>
      <h1>404 - Not found</h1>
      <Link to="/">Volver a la tienda</Link>
    </ErrorPageStyled>
  );
}

export default ErrorPage;
