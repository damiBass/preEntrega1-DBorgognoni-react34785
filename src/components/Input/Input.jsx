import React from "react";

function Input(props) {
  return (
    <div style={{ marginTop: "10px" }}>
      <label>{props.title}</label>
      <input
        required
        name={props.name}
        type="text"
        value={props.value}
        onChange={props.onInputChange}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
}

export default Input;
