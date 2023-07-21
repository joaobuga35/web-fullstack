import { styled } from "styled-components";

const SectionTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 34px;
  margin-bottom: 39px;
  padding-left: 16px;
  padding-right: 16px;

  h2 {
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.286px;
    letter-spacing: 0.101px;
  }
`;

const DivButtonsFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 25px;
`;

const MainContentDash = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

export { SectionTitle, DivButtonsFilter, MainContentDash };
