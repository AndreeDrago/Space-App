//*react
import { useContext, useRef } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";

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
  cursor: pointer;
`;

const CampoTexto = () => {
  const cajaConsulta = useRef(null);
  const { dispatch } = useContext(GlobalContext);

  return (
    <CampoContainer>
      <CampoStyle
        ref={cajaConsulta}
        type="text"
        placeholder="¿Qué estás buscando?"
      />
      <IconoLupa
        src="iconos/search.png"
        alt="ícono de lupa"
        onClick={() => {
          dispatch({ type: "SET_FILTRO", payload: cajaConsulta.current.value });
        }}
      />
    </CampoContainer>
  );
};

export default CampoTexto;
