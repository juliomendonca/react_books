import Logo from "../logo"; // Adjust the path as needed
import OpcoesHeader from "../opcoesHeader"; // Adjust the path as needed
import IconesHeader from "../icone"; // Adjust the path as needed

import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
