import "../../../components/responsividade/styles.css";
import {
  LoginScreen,
  LoginBox,
  Header,
  InputLogin,
  Input,
  Submit,
  Button,
} from "./styles";

import { TiLockClosed, TiUser } from "react-icons/ti";

export default function Login() {
  return (
    <>
      <LoginScreen>
        <LoginBox>
          <Header>
            <h2>RENOVE COM A GENTE!</h2>
          </Header>
          <InputLogin>
            <TiUser />
            <Input type="name" placeholder="NOME DE USUÁRIO"></Input>
          </InputLogin>
          <InputLogin>
            <TiLockClosed />
            <Input type="password" placeholder="SENHA"></Input>
          </InputLogin>
          <Button>ENTRAR</Button>
          <Submit>
            <p>
              Não tem uma conta? <a href="/">CADASTRE-SE AQUI</a>
            </p>
          </Submit>
        </LoginBox>
      </LoginScreen>
    </>
  );
}
