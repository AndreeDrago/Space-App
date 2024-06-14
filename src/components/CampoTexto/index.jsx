//*react
import styled from "styled-components";

const CampoContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoStyle = styled.input`
  height: 56px;
  padding: 12px 16px;
  border: 2px solid transparent;
  border-radius: 10px;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconoLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 38px;
  width: 38px;
`;

const CampoTexto = ({ setFiltro }) => {
  return (
    <CampoContainer>
      <CampoStyle
        onChange={(evento) => {
          setFiltro(evento.target.value);
        }}
        type="text"
        placeholder="¿Qué estás buscando?"
      />
      <IconoLupa src="iconos/search.png" alt="ícono de lupa" />
    </CampoContainer>
  );
};

export default CampoTexto;
