import React from "react";
import styled from "styled-components";
import axios from "axios";

export default function Filme(props) {
  return (
    <Li
      onClick={() => {
        const request = axios.get(
          `https://mock-api.driven.com.br/api/v8/cineflex/movies/${props.id}/showtimes`
        );
        request.then((resposta) => {
          props.setfilmeescolhido(resposta.data);
          props.setpagina("horario");
          props.setH2("Selecione o horário");
        });
      }}
    >
      <img src={props.poster} alt={props.nomefilme}></img>
    </Li>
  );
}

const Li = styled.li`
  width: 145px;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  img {
    width: 129px;
    height: 193px;
  }
`;
