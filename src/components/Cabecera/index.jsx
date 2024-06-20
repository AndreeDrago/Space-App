//*react
import styled from "styled-components";
import { useContext } from "react";

//*Context
import { GlobalContext } from "../../context/GlobalContext";

//*Componentes
import CampoTexto from "../CampoTexto";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
`;

const LogoStyle = styled.img`
  width: 212px;
`;

const Cabecera = () => {
  return (
    <HeaderStyle>
      <LogoStyle src="imagenes/logo.png" alt="Logo de app" />
      <CampoTexto />
    </HeaderStyle>
  );
};

export default Cabecera;
