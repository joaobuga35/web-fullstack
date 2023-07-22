import { styled } from "styled-components";

const ContainerNav = styled.div`
  max-width: 1000px;
  min-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 24px;
`;

export { NavBar, ContainerNav };
