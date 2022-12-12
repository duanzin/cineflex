import React from "react";
import styled from "styled-components";
import Filme from "./Filme";
import Comprovante from "./Comprovante";

export default function Home(props) {
  const [pagina, setpagina] = React.useState("");

  switch (pagina) {
    case "final":
      return (
        <Comprovante
          dia={props.sessaoescolhida.day.date}
          sessao={props.sessaoescolhida.name}
          filme={props.sessaoescolhida.movie.title}
          reservanome={props.reservanome}
          reservacpf={props.reservacpf}
          numcadeira={props.numcadeira}
          setH2={props.setH2}
          setcorH2={props.setcorH2}
          setpesoH2={props.setpesoH2}
          setnumcadeira={props.setnumcadeira}
          setreservaid={props.setreservaid}
        />
      );
    default:
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
}

const UlFilmes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  row-gap: 11px;
  justify-content: space-between;
`;
