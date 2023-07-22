import {
  ContainerTextArea,
  DivCardNotion,
  DivInformation,
  DivProfile,
  ParagraphNotion,
  SpanInformation,
  TextAreaInput,
} from "./styles";
import profile from "../../../images/png/profile.png";

const CardNotion = () => {
  return (
    <DivCardNotion>
      <h2>Historico de anotações</h2>
      <ContainerTextArea>
        <TextAreaInput
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Faça suas anotações"
        ></TextAreaInput>
      </ContainerTextArea>

      <DivInformation>
        <DivProfile>
          <img src={profile} alt="perfil" />
          <p>Mateus Barbosa</p>
        </DivProfile>
        <SpanInformation>1:1 alinhamento de expectativas</SpanInformation>
        <SpanInformation>13/11/2023 - 09:00 - 12:30</SpanInformation>

        <ul>
          <ParagraphNotion>
            Conseguimos alinhar todos os pontos agora e só aguardar e marcar
            nosso próximo 1:1{" "}
          </ParagraphNotion>
        </ul>
      </DivInformation>
    </DivCardNotion>
  );
};

export default CardNotion;
