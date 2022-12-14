import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Comprovante(props) {
  const navigate = useNavigate();
  props.setH2("Pedido feito com sucesso!");
  props.setcorH2("#247A6B");
  props.setpesoH2(700);
  return (
    <Informacoes>
      <div data-test="movie-info">
        <h3>Filme e sessão</h3>
        <p>{props.sessao.movie.title}</p>
        <p>
          {props.sessao.day.date} {props.sessao.name}
        </p>
      </div>
      <div data-test="seats-info">
        <h3>Ingressos</h3>
        {props.numcadeira.map((cadeira) => (
          <p>Assento {cadeira}</p>
        ))}
      </div>
      <div data-test="client-info">
        <h3>Comprador</h3>
        <p>Nome: {props.reservanome}</p>
        <p>CPF: {props.reservacpf}</p>
      </div>
      <button
        data-test="go-home-btn"
        onClick={() => {
          props.setnumcadeira([]);
          props.setcorH2("#293845");
          props.setpesoH2(400);
          props.setH2("Selecione o filme");
          navigate("/");
        }}
      >
        Voltar pra Home
      </button>
    </Informacoes>
  );
}

const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 29px;
  row-gap: 25px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: #293845;
  button {
    width: 225px;
    height: 42px;
    margin: 0 auto;
    margin-top: 70px;
    background: #e8833a;
    border-width: 0;
    border-radius: 3px;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    :hover {
      cursor: pointer;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
    }
    p {
      font-size: 22px;
      line-height: 26px;
    }
  }
`;
