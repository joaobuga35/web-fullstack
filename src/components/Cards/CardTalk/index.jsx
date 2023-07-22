import { RadioButton, RadioInput } from "../../../styles/InputRadio/styles";
import {
  ButtonAddPoint,
  DivCardTalk,
  LiCardTalk,
  ListCardTalk,
} from "./styles";

const CardTalk = () => {
  return (
    <DivCardTalk>
      <h2>Talking Points do 1:1</h2>

      <ListCardTalk>
        <LiCardTalk>
          <RadioButton sizeInput={"talk"}>
            <RadioInput
              sizeInput={"talk"}
              type="checkbox"
              name="check"
              id="check"
              defaultChecked={false}
            />
          </RadioButton>
          <p>Discutir sobre como podemos evoluir nossos produtos</p>
        </LiCardTalk>

        <LiCardTalk>
          <RadioButton sizeInput={"talk"}>
            <RadioInput
              sizeInput={"talk"}
              type="checkbox"
              name="check"
              id="check"
              defaultChecked={false}
            />
          </RadioButton>
          <p>Discutir sobre como podemos evoluir nossos produtos</p>
        </LiCardTalk>

        <ButtonAddPoint>
          <span>+</span>Adicionar novo ponto
        </ButtonAddPoint>
      </ListCardTalk>
    </DivCardTalk>
  );
};

export default CardTalk;
