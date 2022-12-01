import { useState, useEffect } from "react";
import logo from "../../assets/pngegg.png";
import CartWidget from "../CartWidget/CartWidget";
import {
  NavBarContainer,
  LogoContainer,
  LinkStyled,
  NavBarOptionContainer,
} from "./style";

function NavBar() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

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

  return (
    <NavBarContainer>
      <LogoContainer>
        <LinkStyled to="/">
          <img
            alt="logo"
            src={logo}
            width={breakpointXl ? 30 : 60}
            height={breakpointXl ? 30 : 60}
          />
        </LinkStyled>
      </LogoContainer>

      <NavBarOptionContainer>
        <LinkStyled to="/category/smartphones">Smartphones</LinkStyled>
        <LinkStyled to="/category/laptops">Laptops</LinkStyled>
        <LinkStyled to="/category/fragrances">Fragancias</LinkStyled>
      </NavBarOptionContainer>

      <CartWidget />
    </NavBarContainer>
  );
}

export default NavBar;
