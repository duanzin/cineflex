import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LIHorario(props) {
  const navigate = useNavigate();
  return (
    <Li data-test="movie-day">
      <p>
        {props.dia} - {props.data}
      </p>
      <div>
        {props.horas.map((hora) => (
          <button
            key={hora.id}
            onClick={() => {
              navigate(`/assentos/${hora.id}`);
            }}
          >
            {hora.name}
          </button>
        ))}
      </div>
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.02em;
  p {
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #293845;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 8px;
  }
  button {
    width: 83px;
    height: 43px;
    background: #e8833a;
    border-width: 0;
    border-radius: 3px;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    :hover {
      cursor: pointer;
    }
  }
`;
