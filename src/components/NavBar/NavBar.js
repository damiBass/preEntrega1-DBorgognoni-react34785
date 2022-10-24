import { useState, useEffect } from "react";

import styled from "styled-components";
import logo from "../../assets/pngwing.com.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBarContainer = styled.nav`
  margin: 0;
  min-height: 60px;
  background-color: purple;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  padding: 10px 20px;

  @media screen and (max-width: 1024px) {
    padding: 5px 10px;
  }
`;

const NavBarOptionContainer = styled.div`
  display: flex;
  gap: 100px;

  span {
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: black;
      font-weight: bold;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 12px;
  flex-direction: column;
  flex: 1;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    flex-direction: row;
    flex: 0;
  }
`;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.6rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
  }
`;

const MenuBurguerStyled = styled.div`
  position: absolute;
  background-color: whitesmoke;
  border: 0.5px solid black;
  right: 0;
  width: 200px;
  top: 20px;
  color: black;

  button {
    border: none;
    background: transparent;
    position: absolute;
    right: 0;
    font-size: 15px;
  }

  ul {
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      color: purple;
      font-weight: bolder;
    }
  }
`;

function NavBar() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(true);

  const breakpointXl = widthScreen < 1024;

  useEffect(() => {
    function handleWindowResize() {
      setWidthScreen(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleIsOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NavBarContainer>
      <LogoContainer>
        <img
          alt="logo"
          src={logo}
          width={breakpointXl ? 30 : 60}
          height={breakpointXl ? 30 : 60}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: !breakpointXl ? "1rem" : 0,
          }}
        >
          <span>Game Over</span>
          <span>Store</span>
        </div>
      </LogoContainer>
      {!breakpointXl ? (
        <NavBarOptionContainer>
          <span>Tienda</span>
          <span>Los mas vendidos</span>
          <span>Biblioteca</span>
        </NavBarOptionContainer>
      ) : null}
      <CartWidget />
      {breakpointXl & !isOpen ? (
        <StyledBurger onClick={handleIsOpen}>
          <div />
          <div />
          <div />
        </StyledBurger>
      ) : null}
      {isOpen & breakpointXl ? (
        <MenuBurguerStyled>
          <button onClick={handleClose}>X</button>
          <ul>Tienda</ul>
          <ul>Los mas vendidos</ul>
          <ul>Biblioteca</ul>
        </MenuBurguerStyled>
      ) : null}
    </NavBarContainer>
  );
}

export default NavBar;
