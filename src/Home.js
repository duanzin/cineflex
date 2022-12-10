import React from "react";
import styled from "styled-components";
import Filme from "./Filme";
import Horario from "./Horario";

export default function Home(props) {
    const [pagina,setpagina] = React.useState("");

  switch (pagina) {
    case "horario":

        return(
        <Horario horarios={props.filmeescolhido.days}/>
        )
  
    default:
        return (
              <UlFilmes display={props.display}>
                {props.filmes.map((filme) => (
                  <Filme
                    key={filme.id}
                    poster={filme.posterURL}
                    id={filme.id}
                    nomefilme={filme.title}
                    filmeescolhido={props.filmeescolhido}
                    setfilmeescolhido={props.setfilmeescolhido}
                    setpagina={setpagina}
                    setH2={props.setH2}
                  />
                ))}
              </UlFilmes>)
  }
}

const UlFilmes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 30px;
  row-gap: 11px;
  justify-content: space-between;
`;
