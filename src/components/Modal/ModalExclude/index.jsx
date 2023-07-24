import { useContext } from "react";
import { ModalContainer, ModalWrapper } from "../styles";
import {
  ButtonModalExclude,
  DivTitleModalExclude,
  TextModalExclude,
} from "./styles";
import { AuthContext } from "../../../context/authcontext";

const ModalExclude = () => {
  const { setModalExclude } = useContext(AuthContext);
  return (
    <ModalWrapper>
      <ModalContainer>
        <DivTitleModalExclude>
          <span onClick={() => setModalExclude(false)}>X</span>
          <span>Excluir conversa 1:1</span>
          <ButtonModalExclude>Excluir</ButtonModalExclude>
        </DivTitleModalExclude>
        <TextModalExclude>
          Tem certeza que deseja excluir o 1:1 alinhamento de expectativas ?
        </TextModalExclude>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default ModalExclude;
