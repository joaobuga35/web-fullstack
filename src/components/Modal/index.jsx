import { useContext } from "react";
import {
  ButtonModal,
  DivButtonsModal,
  DivTitleModal,
  ModalContainer,
  ModalWrapper,
} from "./styles";
import { AuthContext } from "../../context/authcontext";

const Modal = () => {
  const { setModal, setModalExclude } = useContext(AuthContext);

  const handleModal = () => {
    setModal(false);
    setModalExclude(true);
  };
  return (
    <ModalWrapper>
      <ModalContainer>
        <DivTitleModal>
          <span>Ações</span>
          <span onClick={() => setModal(false)}>X</span>
        </DivTitleModal>
        <DivButtonsModal>
          <ButtonModal color="#030303">Editar conversa 1:1</ButtonModal>
          <ButtonModal onClick={handleModal} color="#EA0000">
            Excluir conversa 1:1
          </ButtonModal>
        </DivButtonsModal>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
