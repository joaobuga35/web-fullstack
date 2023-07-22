import InputMain from "../../components/Input/";
import Logo from "../../components/Logo";
import { ButtonBlue } from "../../styles/Buttons/styles.js";
import { MainContent, FormColumn, CenteredButton } from "../Register/styles";
import apple from "../../images/png/apple.png";
import stevejobs from "../../images/png/stevejobs.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <MainContent>
        <figure className="figureApple">
          <img className="imgBackground" src={apple} alt="" />
          <img className="imgSteve" src={stevejobs} alt="" />
        </figure>
        <section>
          <Logo top={"32px"} />
          <h2>Cadastro</h2>

          <form>
            <FormColumn>
              <InputMain
                label={"Nome"}
                inputType={"text"}
                inputName={"name"}
                placeholder={"Insira seu nome"}
              />
            </FormColumn>
            <FormColumn>
              <InputMain
                label={"E-mail"}
                inputType={"email"}
                inputName={"email"}
                placeholder={"Insira seu e-mail"}
              />
            </FormColumn>
            <FormColumn>
              <InputMain
                label={"Senha"}
                inputType={"password"}
                inputName={"password"}
                placeholder={"Insira sua senha"}
              />
            </FormColumn>
            <FormColumn>
              <InputMain
                label={"Senha"}
                inputType={"password"}
                inputName={"confirmPassword"}
                placeholder={"Confirme sua senha"}
              />
            </FormColumn>

            <h3>Termos de uso e privacidade</h3>
            <div className="divInputRadio">
              <input
                name="privacy"
                id="privacy"
                type="checkbox"
                defaultChecked
              />
              <label>
                Ao clicar neste botão, eu concordo com os termos de uso e
                privacidade da nossa empresa.
                <span>Termos de uso e privacidade</span>
              </label>
            </div>
            <CenteredButton>
              <ButtonBlue width={"100%"} height={"45.313px"} top={"20px"}>
                Cadastrar
              </ButtonBlue>
            </CenteredButton>
          </form>

          <nav>
            <p>Já tem uma conta?</p>{" "}
            <span>
              <Link to={"/"}>Login</Link>
            </span>
          </nav>
        </section>
      </MainContent>
    </>
  );
};

export default Register;
