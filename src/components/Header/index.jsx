import Logo from "../Logo";
import { HeaderStyles } from "./styles";
import { HiMenuAlt2 } from "react-icons/hi";
import profile from "../../images/png/profile.png";
import { useRef, useState } from "react";
import MenuHamburguer from "../MenuHamburguer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  console.log(isOpen);
  return (
    <HeaderStyles>
      <div onClick={handleOutsideClick}>
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
