import {
  Card,
  DivText,
  DivTitleCard,
  ListPersons,
  ProfilesLi,
  RadioButton,
  RadioInput,
} from "./styles";
import points from "../../images/svg/points.svg";
import profile from "../../images/png/profile.png";
import { useState } from "react";

const CardOneToOne = () => {
  const [selectedOption, setSelectedOption] = useState(false);

  const handleOptionChange = (event) => {
    const { value } = event.target;
    setSelectedOption((prevOption) => (prevOption === value ? false : value));
  };

  return (
    <Card>
      <DivTitleCard>
        <RadioButton>
          <RadioInput
            type="radio"
            name="check"
            id="check"
            value={"check"}
            checked={selectedOption}
            onChange={handleOptionChange}
          />
        </RadioButton>

        <DivText>
          <h3>1:1 alinhamento de expectativas</h3>
          <span>13/11/2023 - 09:00-12:30</span>
        </DivText>

        <img src={points} alt="" />
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
