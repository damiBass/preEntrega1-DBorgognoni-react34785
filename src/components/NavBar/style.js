import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  margin: 0;
  min-height: 60px;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  padding: 10px 20px;

  @media screen and (max-width: 1024px) {
    padding: 5px 10px;
  }
`;

export const NavBarOptionContainer = styled.div`
  display: flex;
  gap: 100px;
`;

export const LogoContainer = styled.div`
  display: flex;

  flex-direction: column;
  flex: 1;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    flex-direction: row;
    flex: 0;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  transition: 0.5s;
  color: white;
  font-weight: bold;

  &:hover {
    color: #f15f67;
    font-weight: bolder;
  }
`;
