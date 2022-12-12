import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import LiHorario from "./LiHorario";

export default function Horario(props) {
  const { idFilme } = useParams();
  props.setH2("Selecione o horário");
  const [horarios, sethorarios] = React.useState(undefined);
  React.useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );
    request.then((resposta) => {
      sethorarios(resposta.data);
      console.log("chegou");
    });
  }, []);

  switch (horarios) {
    case undefined:
      return <p>carregando</p>;
    default:
      return (
        <>
          <UlHorario>
            {horarios.days.map((horario) => (
              <LiHorario
                key={horario.id}
                id={horario.id}
                dia={horario.weekday}
                data={horario.date}
                horas={horario.showtimes}
                setH2={props.setH2}
              />
            ))}
          </UlHorario>
          <Footer data-test="footer">
            <div>
              <img src={horarios.posterURL} alt="poster"></img>
            </div>
            <p>{horarios.title}</p>
          </Footer>
        </>
      );
  }
}

const UlHorario = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
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
  p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 30px;
      color: #293845;
    }
  div {
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
