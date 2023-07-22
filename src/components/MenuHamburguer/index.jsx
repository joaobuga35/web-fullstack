import Logo from "../Logo";
import MenuSecret from "./styles";
import config from "../../images/svg/config.svg";
import oneToOne from "../../images/svg/oneToOne.svg";
import talk from "../../images/svg/talk.svg";
import task from "../../images/svg/task.svg";
import out from "../../images/svg/out.svg";

const MenuHamburguer = ({ open, setOpen }) => {
  return (
    <MenuSecret isOpen={open}>
      <div>
        <Logo logoposition={"hamburguer"} />
        <span onClick={() => setOpen(false)}>X</span>
      </div>
      <ul>
        <li>
          <img src={oneToOne} alt="conversas 1:1" />
          <span>Conversas 1:1</span>
        </li>
        <li>
          <img src={task} alt="tasks" />
          <span>Exemplo</span>
        </li>
        <li>
          <img src={talk} alt="conversas gerais" />
          <span>Exemplo</span>
        </li>
        <li>
          <img src={config} alt="configurações" />
          <span>Exemplo</span>
        </li>
      </ul>

      <section>
        <img src={out} alt="botão para sair" />
        <span>Sair</span>
      </section>
    </MenuSecret>
  );
};

export default MenuHamburguer;
