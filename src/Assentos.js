import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LiAssento from "./LiAssento";

export default function Assentos(props) {
  const { idSessao } = useParams();
  props.setH2("Selecione o horário");
  const [assentos, setassentos] = React.useState(undefined);
  const [reservaid, setreservaid] = React.useState([]);
  const [reservanome, setreservanome] = React.useState("");
  const [reservacpf, setreservacpf] = React.useState("");
  const [numcadeira, setnumcadeira] = React.useState([]);
  React.useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
    request.then((resposta) => {
      setassentos(resposta.data);
      console.log("chegou");
    });
  }, []);
  switch (assentos) {
    case undefined:
      return <p>carregando</p>;
    default:
      return (
        <>
          <UlAssentos>
            {assentos.seats.map((assento) => (
              <LiAssento
                key={assento.id}
                id={assento.id}
                disponivel={assento.isAvailable}
                numero={assento.name}
                reservaid={reservaid}
                setreservaid={setreservaid}
                numcadeira={numcadeira}
                setnumcadeira={setnumcadeira}
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
                id="nomecomprador"
                type="text"
                value={reservanome}
                onChange={(e) => setreservanome(e.target.value)}
                placeholder="Digite seu nome..."
                required
              />
            </div>
            <div>
              <label>CPF do comprador:</label>
              <input
                id="cpf"
                type="text"
                value={reservacpf}
                onChange={(e) => setreservacpf(e.target.value)}
                placeholder="Digite seu CPF..."
                required
              />
            </div>
            <button
              type="submit"
              onClick={() => {
                const request = axios.post(
                  "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
                  {
                    ids: reservaid,
                    name: reservanome,
                    cpf: reservacpf,
                  }
                );
                request.then(
                  props.setH2("Pedido feito com sucesso!"),
                  props.setcorH2("#247A6B"),
                  props.setpesoH2(700)
                );
              }}
            >
              Reservar assento(s)
            </button>
          </Identidade>
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
    :hover{
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
