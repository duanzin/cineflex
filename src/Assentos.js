import React from "react";
import styled from "styled-components";

export default function Assentos(props) {
  return (
    <>
      <UlAssentos>
        {props.assentos.map((assento) => (
          <button key={assento.id} id={assento.id}>
            {assento.name}
          </button>
        ))}
        <div>
          <div>
            <button />
            <p>Selecionado</p>
          </div>
          <div>
            <button />
            <p>Disponível</p>
          </div>
          <div>
            <button />
            <p>Indisponível</p>
          </div>
        </div>
      </UlAssentos>
      <Identidade>
        <div>
          <label for="nomecomprador">Nome do comprador:</label>
          <input id="nomecomprador" placeholder="Digite seu nome..." />
        </div>
        <div>
          <label for="cpf">CPF do comprador:</label>
          <input id="cpf" placeholder="Digite seu CPF..." />
        </div>
      </Identidade>
      <Reservar>Reservar assento(s)</Reservar>
    </>
  );
}

const UlAssentos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: 7px;
  row-gap: 18px;
  margin: 0 24px;
  button {
    width: 26px;
    height: 26px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
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
  }
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

const Identidade = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 42px;
  margin-bottom: 57px;
  row-gap: 12px;
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

const Reservar = styled.button`
  width: 225px;
  height: 42px;
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
`;
