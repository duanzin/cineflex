import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LiAssento from "./LiAssento";

export default function Assentos(props) {
  const { idSessao } = useParams();
  const navigate = useNavigate();
  props.setH2("Selecione o(s) assento(s)");
  props.setcorH2("#293845");
  props.setpesoH2(400);

  const [reservaid, setreservaid] = React.useState([]);
  React.useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
    request.then((resposta) => {
      props.setsessao(resposta.data);
    });
  }, []);
  switch (props.sessao) {
    case undefined:
      return <p>carregando</p>;
    default:
      return (
        <>
          <UlAssentos>
            {props.sessao.seats.map((assento) => (
              <LiAssento
                key={assento.id}
                id={assento.id}
                disponivel={assento.isAvailable}
                numero={assento.name}
                reservaid={reservaid}
                setreservaid={setreservaid}
                numcadeira={props.numcadeira}
                setnumcadeira={props.setnumcadeira}
              />
            ))}
            <div>
              <div>
                <Exemplo cor={"#1AAE9E"} borda={"#0E7D71"}></Exemplo>
                <p>Selecionado</p>
              </div>
              <div>
                <Exemplo cor={"#C3CFD9"} borda={"#808F9D"}></Exemplo>
                <p>Disponível</p>
              </div>
              <div>
                <Exemplo cor={"#fbe192"} borda={"#F7C52B"}></Exemplo>
                <p>Indisponível</p>
              </div>
            </div>
          </UlAssentos>
          <Identidade>
            <div>
              <label>Nome do comprador:</label>
              <input
                data-test="client-name"
                id="nomecomprador"
                type="text"
                value={props.reservanome}
                onChange={(e) => props.setreservanome(e.target.value)}
                placeholder="Digite seu nome..."
                required
              />
            </div>
            <div>
              <label>CPF do comprador:</label>
              <input
                data-test="client-cpf"
                id="cpf"
                type="text"
                value={props.reservacpf}
                onChange={(e) => props.setreservacpf(e.target.value)}
                placeholder="Digite seu CPF..."
                required
              />
            </div>
            <button
              data-test="book-seat-btn"
              type="submit"
              onClick={() => {
                const request = axios.post(
                  "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
                  {
                    ids: reservaid,
                    name: props.reservanome,
                    cpf: props.reservacpf,
                  }
                );
                request.then(navigate(`/sucesso`));
              }}
            >
              Reservar assento(s)
            </button>
          </Identidade>
          <Footer data-test="footer">
            <li>
              <img src={props.sessao.movie.posterURL} alt="poster"></img>
            </li>
            <div>
              <p>{props.sessao.movie.title}</p>
              <p>{props.sessao.day.weekday} - {props.sessao.name}</p>
            </div>
          </Footer>
        </>
      );
  }
}

const UlAssentos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: 7px;
  row-gap: 18px;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4e5a65;
      }
    }
  }
`;

const Exemplo = styled.button`
  width: 26px;
  height: 26px;
  background: ${(props) => props.cor};
  border: 1px solid ${(props) => props.borda};
  border-radius: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: #000000;
`;

const Identidade = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  row-gap: 12px;
  button {
    width: 225px;
    height: 42px;
    margin-top: 57px;
    background: #e8833a;
    border-radius: 3px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    border: none;
    color: #ffffff;
    :hover {
      cursor: pointer;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #293845;
    }
    input {
      width: 327px;
      height: 51px;
      padding-left: 18px;
      background: #ffffff;
      border: 1px solid #d5d5d5;
      border-radius: 3px;
      ::placeholder {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #afafaf;
      }
    }
  }
`;
const Footer = styled.footer`
  position: fixed;
  width: 100vw;
  height: 117px;
  bottom: 0;
  left: 0;
  background: #dfe6ed;
  border-top: 1px solid #9eadba;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  column-gap: 14px;
  div{
    display: flex;
    flex-direction: column;
  }
  p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 30px;
      color: #293845;
    }
  li {
    width: 64px;
    height: 89px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 48px;
      height: 72px;
    }
  }
`;