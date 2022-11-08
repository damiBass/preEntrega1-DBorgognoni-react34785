import styled from "styled-components";

const ButtonStyled = styled.button`
  background: orangered;
  border-radius: 25px;
  font-size: 20px;
  padding: 10px 25px;
  cursor: pointer;
  color: black;
  width: 100%;
`;

function ButtonAdd(props) {
  return <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>;
}

export default ButtonAdd;
