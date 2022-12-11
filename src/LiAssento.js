import React from "react";
import styled from "styled-components";

export default function LiAssento(props) {
  const [clicado, setclicado] = React.useState("false");
  const [cor,setcor] = React.useState(props.disponivel ? "#C3CFD9" : "#FBE192");
  return (
    <Botao cor={cor}
      onClick={() => {
        if (props.disponivel === true) {
            clicado === "false" ? setclicado("true") : setclicado("false");
            cor === "#C3CFD9" ? setcor("#1AAE9E") : setcor("#C3CFD9");
        }
        else{
            alert("Esse assento não está disponível");
        }
      }}
    >
      {props.numero}
    </Botao>
  );
}

const Botao = styled.button`
  width: 26px;
  height: 26px;
  background: ${(props) => props.cor};
  border: 1px solid #808f9d;
  border-radius: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: #000000;
`;
