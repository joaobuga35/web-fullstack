import AsideBar from "../components/Aside";
import HeaderDesktop from "../components/Header/HeaderDesktop";
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
      </MainContentDesktop>
    </ContainerContentDesktop>
  );
};

export default DesktopLayout;
