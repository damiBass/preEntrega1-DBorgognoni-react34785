import styled from "styled-components";

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 250px;
  border-radius: 20px;
  color: black;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.3s ease;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const CardImageStyled = styled.div`
  height: 160px;
  border-bottom: 1px solid gray;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

export const CardDescriptionStyled = styled.div`
  height: 180px;
  padding-top: 20px;
  h3 {
    margin: 0;
  }
  span {
    color: red;
  }

  p {
    color: gray;
    font-size: 13px;
    span {
      color: gray;
      font-size: 11px;
    }
  }
`;
