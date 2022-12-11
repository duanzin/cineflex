import React from "react";
import GlobalStyle from "./globalStyle";
import styled from "styled-components";
import axios from "axios";
import Home from "./Home";
import Comprovante from "./Comprovante";

function App() {
  const [filmes, setFilmes] = React.useState([]);
  const [filmeescolhido, setfilmeescolhido] = React.useState(undefined);
  const [sessaoescolhida, setsessaoescolhida] = React.useState(undefined);
  const [H2, setH2] = React.useState("Selecione o filme");

  React.useEffect(() => {
    const requisicao = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );

    requisicao.then((resposta) => {
      setFilmes(resposta.data);
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>CINEFLEX</h1>
        </Header>
        <h2>{H2}</h2>
        <Home
          filmes={filmes}
          setfilmeescolhido={setfilmeescolhido}
          filmeescolhido={filmeescolhido}
          setsessaoescolhida={setsessaoescolhida}
          sessaoescolhida={sessaoescolhida}
          setH2={setH2}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 67px;
  padding: 0px;
  padding-bottom: 50px;
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin: 43px 0;
    color: #293845;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: #c3cfd9;
  width: 100vw;
  height: 67px;
  top: 0px;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #e8833a;
  }
`;

const Footer = styled.footer`
  position: fixed;
  width: 100vw;
  height: 117px;
  bottom: 0px;
  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  display: flex;
`;

export default App;
