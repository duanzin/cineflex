import React from "react";
import GlobalStyle from "./globalStyle";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home";

function App() {
  const [filmes, setFilmes] = React.useState([]);
  const [filmeescolhido, setfilmeescolhido] = React.useState(undefined);
  const [sessaoescolhida, setsessaoescolhida] = React.useState(undefined);
  const [reservaid, setreservaid] = React.useState([]);
  const [reservanome, setreservanome] = React.useState("");
  const [reservacpf, setreservacpf] = React.useState("");
  const [numcadeira, setnumcadeira] =  React.useState([]);
  const [H2, setH2] = React.useState("Selecione o filme");
  const [corH2, setcorH2] = React.useState("#293845");
  const [pesoH2, setpesoH2] = React.useState(400);
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
      <Container corH2={corH2} pesoH2={pesoH2}>
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
          setreservaid={setreservaid}
          reservaid={reservaid}
          setreservanome={setreservanome}
          reservanome={reservanome}
          setreservacpf={setreservacpf}
          reservacpf={reservacpf}
          numcadeira={numcadeira}
          setnumcadeira={setnumcadeira}
          setH2={setH2}
          setcorH2={setcorH2}
          setpesoH2={setpesoH2}
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
  margin-top: 67px;
  padding: 0 23px;
  padding-bottom: 50px;
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: ${(props) => props.pesoH2};
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin: 43px 0;
    color: ${(props) => props.corH2};
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
  right: 0px;
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
