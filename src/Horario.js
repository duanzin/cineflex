import React from "react";
import styled from "styled-components";
import LiHorario from "./LiHorario";

export default function Horario(props){
    console.log(props.horarios);

    return(
        <UlHorario>
        {props.horarios.map((horario) => (
          <LiHorario
            key={horario.id}
            id={horario.id}
            dia={horario.weekday}
            data={horario.date}
            horas={horario.showtimes}
          />
        ))}
      </UlHorario>
    );
}

const UlHorario = styled.ul`
display: flex;
flex-direction: column;
row-gap: 25px;
`;