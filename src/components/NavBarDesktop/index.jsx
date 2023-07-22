import { SearchContainer, SearchInput } from "../../pages/Dashboard/styles";
import { ButtonBlue, ButtonDefault } from "../../styles/Buttons/styles";
import { ContainerNav, NavBar } from "./styles";

const NavBarDesktop = () => {
  return (
    <ContainerNav>
      <NavBar>
        <ButtonBlue width={"176px"} height={"45px"}>
          1:1 Agendadas
        </ButtonBlue>
        <ButtonDefault width={"176px"} height={"45px"}>
          1:1 Realizadas
        </ButtonDefault>
        <SearchContainer inputDesk={"desk"}>
          <SearchInput type="text" placeholder="Pesquisar..." />
        </SearchContainer>
      </NavBar>
      <div>
        <ButtonBlue width={"176px"} height={"45px"}>
          Nova 1:1
        </ButtonBlue>
      </div>
    </ContainerNav>
  );
};

export default NavBarDesktop;
