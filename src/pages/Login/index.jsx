import InputMain from "../../components/Input";
import Logo from "../../components/Logo";
import ButtonBlue from "../../styles/Buttons/styles";
import MainLogin from "./styles";

const Login = () => {
  return (
    <>
      <MainLogin>
        <Logo top={"110px"} bottom={"58px"} logoPosition={"login"} />
        <h2>Dados de acesso</h2>

        <form>
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
          <span>Esqueceu a senha?</span>

          <ButtonBlue width={"100%"} height={"40px"} top={"45px"}>
            Entrar
          </ButtonBlue>
        </form>
      </MainLogin>
    </>
  );
};

export default Login;
