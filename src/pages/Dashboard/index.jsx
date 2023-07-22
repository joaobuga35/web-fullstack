import { useState } from "react";
import CardOneToOne from "../../components/Cards";
import CardNotion from "../../components/Cards/CardNotion";
import CardTalk from "../../components/Cards/CardTalk";
import Header from "../../components/Header";
import search from "../../images/svg/search.svg";
import { ButtonBlue, ButtonDefault } from "../../styles/Buttons/styles";
import {
  DivButtonsFilter,
  MainContentDash,
  SearchContainer,
  SearchInput,
  SectionTitle,
} from "./styles";
import { FiChevronLeft } from "react-icons/fi";

const Dashboard = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
      <Header />
      {isSearchOpen && (
        <SearchContainer>
          <button onClick={() => setIsSearchOpen(false)}>
            {" "}
            <FiChevronLeft />
          </button>
          <SearchInput type="text" placeholder="Pesquisar..." />
        </SearchContainer>
      )}
      <SectionTitle>
        <h2>Conversas 1:1</h2>
        <img
          onClick={() => setIsSearchOpen(true)}
          src={search}
          alt="pesquisa"
        />
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
        <CardNotion />
      </MainContentDash>
    </>
  );
};

export default Dashboard;
