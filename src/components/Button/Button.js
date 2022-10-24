import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid violet;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  color: white;

  @media screen and (max-width: 768px) {
    background: red;
  }
`

function Button(props) {
  return (
    <ButtonStyled>
      {props.text}
    </ButtonStyled>
  );
}

export default Button;
