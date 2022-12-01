import React, { useState } from "react";
import Input from "../Input/Input";
import { FormStyled } from "./style";

function Form(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function onInputChange(evt) {
    const inputName = evt.target.name;
    const value = evt.target.value;
    const newUserData = { ...userData };
    newUserData[inputName] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(userData);
  }

  return (
    <FormStyled onSubmit={onSubmit}>
      <Input
        name="name"
        value={userData.name}
        onInputChange={onInputChange}
        title="Nombre y Apellido"
      />
      <Input
        name="email"
        value={userData.email}
        onInputeChange={onInputChange}
        title="Email"
      />
      <Input
        name="phone"
        value={userData.phone}
        onInputChange={onInputChange}
        title="Telefono"
      />
      <Input
        name="address"
        value={userData.address}
        onInputChange={onInputChange}
        title="Direccion"
      />
      <label>
        <input type="radio" value="credit" required />
        Credito
      </label>
      <label>
        <input type="radio" value="cash" required />
        Efectivo
      </label>
      <button onClick={onSubmit}>Crear orden</button>
    </FormStyled>
  );
}

export default Form;
