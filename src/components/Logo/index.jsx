import logo from "../../images/png/logo.png";
import FigureLogo from "./styles";

const Logo = ({ top, bottom, leftP, rightP, logoposition }) => {
  return (
    <FigureLogo
      top={top}
      bottom={bottom}
      leftP={leftP}
      rightP={rightP}
      logoposition={logoposition}
    >
      <img src={logo} alt="logo" />
    </FigureLogo>
  );
};

export default Logo;
