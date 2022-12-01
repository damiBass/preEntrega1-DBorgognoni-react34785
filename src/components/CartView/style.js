import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
`;

export const StyledWrapperCard = styled.div`
  text-align: center;

  .div-store {
    height: 100px;
    width: 500px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    div {
      align-self: center;
      padding-right: 30px;
    }
    img {
      object-fit: fill;
      max-width: 100px;
    }
    h3 {
      padding: 0;
      margin: 0;
      font-size: 15px;
    }
  }

  .trash {
    align-self: center;
    margin-right: 25px;
    cursor: pointer;
  }
`;

export const CheckoutWrapper = styled.div`
  text-align: center;
`;
