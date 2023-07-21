import { Card, DivTitleCard, RadioInput, RadioLabel } from "./styles";
import points from "../../images/svg/points.svg";
import profile from "../../images/png/profile.png";

const CardOneToOne = () => {
  return (
    <Card>
      <DivTitleCard>
        <RadioLabel>
          <RadioInput type="radio" name="check" id="check" />
        </RadioLabel>

        <div>
          <h3>1:1 alinhamento de expectativas</h3>
          <span>13/11/2023 - 09:00-12:30</span>
        </div>

        <img src={points} alt="" />
      </DivTitleCard>

      <ul>
        <li>
          <span>Organizador</span>
          <h4>
            <img src={profile} alt="imagem de perfil" />
          </h4>
        </li>

        <li>
          <span>Convidado</span>
          <h4>
            <img src={profile} alt="imagem de perfil" />
          </h4>
        </li>
      </ul>
    </Card>
  );
};

export default CardOneToOne;
