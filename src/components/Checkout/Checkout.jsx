import React from "react";
import { Link, useParams } from "react-router-dom";

function Checkout() {
  const { resId } = useParams();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Gracias por tu compra!</h1>
      <p>Este es tu nº de identificacion de producto: ({resId})</p>
      <Link to="/">Volver al catalogo</Link>
    </div>
  );
}

export default Checkout;
