import InputMain from "../../components/Input/";
import Logo from "../../components/Logo";
import ButtonBlue from "../../styles/Buttons/styles.js";
import MainContent from "../Register/styles";

const Register = () => {
  return (
    <>
      <MainContent>
        <Logo top={"32px"} />
        <h2>Cadastro</h2>

        <form>
          <InputMain
            label={"Nome"}
            inputType={"text"}
            inputName={"name"}
            placeholder={"Insira seu nome"}
          />
          <InputMain
            label={"E-mail"}
            inputType={"email"}
            inputName={"email"}
            placeholder={"Insira seu e-mail"}
          />
          <InputMain
            label={"Senha"}
            inputType={"password"}
            inputName={"password"}
            placeholder={"Insira sua senha"}
          />
          <InputMain
            label={"Senha"}
            inputType={"password"}
            inputName={"confirmPassword"}
            placeholder={"Confirme sua senha"}
          />

          <h3>Termos de uso e privacidade</h3>
          <div className="divInputRadio">
            <input name="privacy" id="privacy" type="checkbox" defaultChecked />
            <label>
              Ao clicar neste botão, eu concordo com os termos de uso e
              privacidade da nossa empresa.
              <span>Termos de uso e privacidade</span>
            </label>
          </div>
          <ButtonBlue width={"100%"} height={"45.313px"} top={"20px"}>
            Cadastrar
          </ButtonBlue>
        </form>
      </MainContent>
    </>
  );
};

export default Register;
