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
      );
  }
}

const UlHorario = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;
