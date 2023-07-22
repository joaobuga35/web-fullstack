import CardOneToOne from "../../components/Cards";
import CardTalk from "../../components/Cards/CardTalk";
import Header from "../../components/Header";
import search from "../../images/svg/search.svg";
import { ButtonBlue, ButtonDefault } from "../../styles/Buttons/styles";
import { DivButtonsFilter, MainContentDash, SectionTitle } from "./styles";

const Dashboard = () => {
  return (
    <>
      <Header />
      <SectionTitle>
        <h2>Conversas 1:1</h2>
        <img src={search} alt="pesquisa" />
      </SectionTitle>

      <DivButtonsFilter>
        <ButtonBlue width={"130px"} height={"24px"}>
          1:1 Agendadas
        </ButtonBlue>
        <ButtonDefault width={"130px"} height={"24px"}>
          1:1 Realizadas
        </ButtonDefault>
      </DivButtonsFilter>

      <MainContentDash>
        <CardOneToOne />
        <CardOneToOne />
        <CardTalk />
      </MainContentDash>
    </>
  );
};

export default Dashboard;
