import { ButtonStyled } from "./style";

function Button(props) {
  return <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>;
}

export default Button;
