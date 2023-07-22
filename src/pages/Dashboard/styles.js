import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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
  img {
    cursor: pointer;
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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--color-white);
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  height: 80px;
  position: absolute;
  top: 143px;
  right: 1px;
  z-index: 1;
  animation: ${fadeInAnimation} 0.3s ease-in-out;

  button {
    width: 27px;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 1px solid var(--color-primary);
    background-color: var(--color-white);
    color: var(--color-primary);
    font-size: 16px;
  }
`;

const SearchInput = styled.input`
  border-radius: 60px;
  border: 1px solid #e8e8e8;
  background: #fff;
  width: 90%;
  height: 45px;
  padding: 13px 23px 12px 12px;
`;

export {
  SectionTitle,
  DivButtonsFilter,
  MainContentDash,
  SearchContainer,
  SearchInput,
};
