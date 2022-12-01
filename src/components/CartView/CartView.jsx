import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import cartContext from "../../store/CartContext";
import Button from "../Button/Button";
import { getUpdateOrderStock } from "../../service/firebase";
import { CartWrapper, CheckoutWrapper, StyledWrapperCard } from "./style";
import Form from "../Form/Form";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CartView() {
  const { cartItems, totalItemsInCart, clear, totalPriceItems, removeItem } =
    useContext(cartContext);

  const [orderOk, setOrderOk] = useState(false);

  const navigate = useNavigate();

  function finishOrder() {
    setOrderOk(true);
  }

  function emptyCart() {
    clear();
  }

  function createBuyOrder(userData) {
    const data = {
      buyer: userData,
      items: cartItems,
      total: totalPriceItems(),
      date: new Date(),
    };

    getUpdateOrderStock(data).then((resId) => {
      console.log(resId);
      clear();
      navigate(`/checkout/${resId}`);
    });
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        {cartItems.length > 0 ? (
          <h1>Contenido de tu carrito</h1>
        ) : (
          <>
            <h1>Tu carrito está vacío</h1>
            <p>No sabes que comprar? </p>
            <Link to="/">Pasa por la tienda!</Link>
          </>
        )}
      </div>

      <CartWrapper>
        <StyledWrapperCard>
          {cartItems.map((item, index) => (
            <div key={index} className="div-store">
              <img alt="" src={item.thumbnail} />
              <div>
                <h3>{item.title.toUpperCase()}</h3>
                <h3> Valor del producto : USD {item.price}</h3>
                <h3>Cantidad del producto : {item.quantity}</h3>
              </div>
              <FontAwesomeIcon
                icon={faTrash}
                className="trash"
                onClick={() => removeItem(item.id)}
              />
            </div>
          ))}
        </StyledWrapperCard>
        {cartItems.length > 0 ? (
          <CheckoutWrapper>
            <h4>Total de articulos : {totalItemsInCart()}</h4>
            <h5>Precio total a pagar: USD {totalPriceItems()}</h5>
            <Form onSubmit={finishOrder} />
            {!orderOk ? null : <h6>Ya puedes finalizar tu compra!</h6>}
            <Button onClick={createBuyOrder} text="Finalizar compra" />
            <Button onClick={emptyCart} text="Vaciar carrito" />
          </CheckoutWrapper>
        ) : null}
      </CartWrapper>
    </>
  );
}

export default CartView;
