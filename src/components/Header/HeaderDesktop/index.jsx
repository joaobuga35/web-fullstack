import { DivProfileHeader, HeaderDeskStyle } from "./styles";
import profile from "../../../images/png/profile.png";
import { HiChevronDown } from "react-icons/hi";

const HeaderDesktop = () => {
  return (
    <HeaderDeskStyle>
      <h1>Conversas 1:1</h1>

      <DivProfileHeader>
        <img src={profile} alt="perfil" />
        <span>Mateus Barbosa</span>
        <HiChevronDown />
      </DivProfileHeader>
    </HeaderDeskStyle>
  );
};

export default HeaderDesktop;
