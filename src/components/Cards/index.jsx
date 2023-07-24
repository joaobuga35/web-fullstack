import { Card, DivText, DivTitleCard, ListPersons, ProfilesLi } from "./styles";
import points from "../../images/svg/points.svg";
import profile from "../../images/png/profile.png";

import { RadioButton, RadioInput } from "../../styles/InputRadio/styles";
import { useContext } from "react";
import { AuthContext } from "../../context/authcontext";

const CardOneToOne = () => {
  const { setModal } = useContext(AuthContext);
  return (
    <Card>
      <DivTitleCard>
        <RadioButton>
          <RadioInput
            type="checkbox"
            name="check"
            id="check"
            defaultChecked={false}
          />
        </RadioButton>

        <DivText>
          <h3>1:1 alinhamento de expectativas</h3>
          <span>13/11/2023 - 09:00-12:30</span>
        </DivText>

        <img onClick={() => setModal(true)} src={points} alt="" />
      </DivTitleCard>

      <ListPersons>
        <ProfilesLi>
          <span>Organizador</span>
          <h4>
            <img src={profile} alt="imagem de perfil" />
            Mateus Barbosa
          </h4>
        </ProfilesLi>

        <ProfilesLi>
          <span>Convidado</span>
          <h4>
            <img src={profile} alt="imagem de perfil" />
            Mateus Barbosa
          </h4>
        </ProfilesLi>
      </ListPersons>
    </Card>
  );
};

export default CardOneToOne;
