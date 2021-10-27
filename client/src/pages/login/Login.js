import React, { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";
import "./Login.css";
import {
  BannerContainer,
  BannerDesc,
  BannerImg,
  BannerLogo,
  FieldContainer,
  FieldWrap,
  FormBtn,
  FormContainer,
  FormDesc,
  FormTitle,
  FormWrap,
  LoginContainer,
  RegisterDesc,
  RegisterLink,
} from "./LoginElements";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    axios.post("http://localhost:5000/user/login", values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem("auth-token", data);
        history.push("/home");
      }
    });
  };
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
  return (
    <>
      <LoginContainer>
        <BannerContainer>
          <BannerLogo>
            <Logo />
          </BannerLogo>
          <BannerDesc>
            Faça login para acessar seu catálogo de habilidades.
          </BannerDesc>
          <BannerImg
            src={require("../../assets/login-2.png").default}
          ></BannerImg>
        </BannerContainer>

        <FormContainer>
          <FormWrap>
            <FormTitle>Login</FormTitle>
            <p>Preencha os campos para continuar</p>
            <FieldContainer>
              <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
              >
                <Form className="Login">
                  <FieldWrap>
                    <FormDesc>E-mail*</FormDesc>
                    <Field
                      name="email"
                      placeholder="E-mail"
                      className="Login-Field"
                    />
                    <ErrorMessage
                      component="span"
                      name="email"
                      className="Login-Error"
                    />
                  </FieldWrap>
                  <FieldWrap>
                    <FormDesc>Senha*</FormDesc>
                    <Field
                      name="password"
                      placeholder="Senha"
                      type="password"
                      className="Login-Field"
                    />
                    <ErrorMessage
                      component="span"
                      name="password"
                      className="Login-Error"
                    />
                  </FieldWrap>
                  <FormBtn
                    onClick={() =>
                      setTimeout(() => {
                        setIsVisible(true);
                      }, 1000)
                    }
                    type="submit"
                  >
                    Login
                  </FormBtn>
                  <br />
                  <span className={isVisible ? "error-show" : "error-hidden"}>
                    E-mail ou senha inválido
                  </span>
                  <RegisterDesc>
                    Ainda não possui uma conta?
                    <br />
                    <RegisterLink href="/register">
                      Registre-se aqui.
                    </RegisterLink>
                  </RegisterDesc>
                </Form>
              </Formik>
            </FieldContainer>
          </FormWrap>
        </FormContainer>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default Login;
