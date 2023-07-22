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

const DesktopLayout = () => {
  return (
    <ContainerContentDesktop>
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
