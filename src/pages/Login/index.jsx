import InputMain from "../../components/Input";
import Logo from "../../components/Logo";
import ButtonBlue from "../../styles/Buttons/styles";
import MainLogin from "./styles";
import apple from "../../images/png/apple.png";
import stevejobs from "../../images/png/stevejobs.png";

const Login = () => {
  return (
    <>
      <MainLogin>
        <figure className="figureApple">
          <img className="imgBackground" src={apple} alt="" />
          <img className="imgSteve" src={stevejobs} alt="" />
        </figure>

        <section>
          <Logo top={"110px"} bottom={"58px"} logoposition={"login"} />
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
            <div>
              <span>Esqueceu a senha?</span>
              <ButtonBlue width={"100%"} height={"40px"} top={"45px"}>
                Entrar
              </ButtonBlue>
            </div>
          </form>
        </section>
      </MainLogin>
    </>
  );
};

export default Login;
