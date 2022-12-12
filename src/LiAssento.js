import React from "react";
import styled from "styled-components";

export default function LiAssento(props) {
  const [clicado, setclicado] = React.useState("false");
  const [cor, setcor] = React.useState(
    props.disponivel ? "#C3CFD9" : "#FBE192"
  );
  const [borda, setborda] = React.useState(
    props.disponivel ? "#808F9D" : "#F7C52B"
  );
  return (
    <Botao
      cor={cor}
      borda={borda}
      onClick={() => {
        if (props.disponivel === true) {
          if (clicado === "false") {
            setclicado("true");
            setcor("#1AAE9E");
            setborda("#0E7D71");
            props.setreservaid((arr) => [...arr, props.id]);
            props.setnumcadeira((arr) => [...arr, props.numero]);
            console.log(props.reservaid);
            console.log(props.numcadeira);
          } else {
            setclicado("false");
            setcor("#C3CFD9");
            setborda("#808F9D");
            let remover = props.id;
            props.setreservaid((prev) =>
              prev.filter((id) => id !== remover)
            );
            let tirar = props.numero;
            props.setnumcadeira((prev) =>
              prev.filter((num) => num !== tirar)
            );
            console.log(props.reservaid);
          }
        } else {
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
  border: 1px solid ${(props) => props.borda};
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
  :hover{
    cursor: pointer;
  }
`;
