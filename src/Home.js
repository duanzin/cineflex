import React from "react";
import styled from "styled-components";
import Filme from "./Filme";

export default function Home(props) {
  return (
    <>
      <UlFilmes>
        {props.filmes.map((filme) => (
          <Filme key={filme.id} poster={filme.posterURL} id={filme.id} nomefilme={filme.title} />
        ))}
      </UlFilmes>
    </>
  );
}

const UlFilmes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 30px;
  row-gap: 11px;
  justify-content: space-between;
`;
