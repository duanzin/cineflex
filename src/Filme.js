import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Filme(props) {
  const navigate = useNavigate();
  return (
    <Li
      onClick={() => {
        navigate(`/sessoes/${props.id}`);
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
