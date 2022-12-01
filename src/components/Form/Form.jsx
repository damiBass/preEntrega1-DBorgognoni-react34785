import React, { useState } from "react";
import Input from "../Input/Input";
import { FormStyled } from "./style";

function Form(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
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
        onInputChange={onInputChange}
        title="Email"
        value={userData.email}
      />
      <Input
        name="phone"
        value={userData.phone}
        onInputChange={onInputChange}
        title="Telefono"
      />
      <button onClick={onSubmit}>Crear orden</button>
    </FormStyled>
  );
}

export default Form;
