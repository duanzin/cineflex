import React from "react";
import styled from "styled-components";
import Filme from "./Filme";

export default function Home(props) {
      props.setH2("Selecione o filme");
      props.setcorH2("#293845");
      props.setpesoH2(400);
      props.setH2("Selecione o filme");
      return (
        <UlFilmes display={props.display}>
          {props.filmes.map((filme) => (
            <Filme
              key={filme.id}
              poster={filme.posterURL}
              id={filme.id}
              nomefilme={filme.title}
              setH2={props.setH2}
            />
          ))}
        </UlFilmes>
      );
  }
const UlFilmes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  row-gap: 11px;
  justify-content: space-between;
`;
