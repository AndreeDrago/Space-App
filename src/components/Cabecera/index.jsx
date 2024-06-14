//*react
import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
`;

const LogoStyle = styled.img`
  width: 212px;
`;

const Cabecera = (props) => {
  const { filtro, setFiltro } = props;

  return (
    <HeaderStyle>
      <LogoStyle src="imagenes/logo.png" alt="Logo de app" />
      <CampoTexto setFiltro={setFiltro} />
    </HeaderStyle>
  );
};

export default Cabecera;
