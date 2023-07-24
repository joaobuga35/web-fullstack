import { styled } from "styled-components";
const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  @media (min-width: 375px) {
    justify-content: center;
  }

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const ModalContainer = styled.div`
  width: 320px;
  height: 250px;
  background-color: var(--color-white);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  z-index: 10;

  @media (min-width: 375px) {
    width: 375px;
  }
`;

const DivTitleModal = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  span {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const DivButtonsModal = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonModal = styled.button`
  width: 100%;
  height: 55px;
  text-align: center;
  background-color: var(--color-white);
  border: none;
  border-bottom: 1px solid var(--color-border);
  color: ${(props) => props.color};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export {
  ModalWrapper,
  ModalContainer,
  DivTitleModal,
  DivButtonsModal,
  ButtonModal,
};
