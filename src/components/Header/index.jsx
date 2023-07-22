import Logo from "../Logo";
import { HeaderStyles } from "./styles";
import { HiMenuAlt2 } from "react-icons/hi";
import profile from "../../images/png/profile.png";
import { useState } from "react";
import MenuHamburguer from "../MenuHamburguer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderStyles>
      <div>
        <MenuHamburguer open={isOpen} setOpen={setIsOpen} />
        <HiMenuAlt2 onClick={() => setIsOpen(true)} className="icon" />
        <Logo logoposition={"dashboard"} />
        <figure>
          <img src={profile} alt="perfil" />
        </figure>
      </div>
    </HeaderStyles>
  );
};

export default Header;
