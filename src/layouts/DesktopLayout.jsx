import { useContext } from "react";
import AsideBar from "../components/Aside";
import CardOneToOne from "../components/Cards";
import CardNotion from "../components/Cards/CardNotion";
import CardTalk from "../components/Cards/CardTalk";
import HeaderDesktop from "../components/Header/HeaderDesktop";
import NavBarDesktop from "../components/NavBarDesktop";
import { MainContentDash } from "../pages/Dashboard/styles";
import {
  ContainerContentDesktop,
  MainContentDesktop,
} from "../styles/Container/styles";
import { AuthContext } from "../context/authcontext";
import Modal from "../components/Modal";
import ModalExclude from "../components/Modal/ModalExclude";

const DesktopLayout = () => {
  const { modal, modalExclude } = useContext(AuthContext);
  return (
    <ContainerContentDesktop>
      {modalExclude && <ModalExclude />}
      {modal && <Modal />}
      <AsideBar />
      <MainContentDesktop>
        <HeaderDesktop />
        <NavBarDesktop />
        <MainContentDash>
          <section>
            <CardOneToOne />
            <CardOneToOne />
          </section>
          <section>
            <CardTalk />
            <CardNotion />
          </section>
        </MainContentDash>
      </MainContentDesktop>
    </ContainerContentDesktop>
  );
};

export default DesktopLayout;
