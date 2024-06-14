//*React
import styled from "styled-components";

//*Estilos
const ItemNavStyle = styled.li`
  font-size: 24px;
  margin-bottom: 30px;
  line-height: 28px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${(props) => (props.$activo ? "#7878e5" : "#d9d9d9")};
  font-family: ${(props) =>
    props.$activo ? "GandhiSansBold" : "GandhiSansRegular"};
`;

const ItemNav = (props) => {
  //*Props
  const { children, iconoActivo, iconoInactivo, activo = false } = props;

  return (
    <ItemNavStyle $activo={activo}>
      <img src={activo ? iconoActivo : iconoInactivo} alt="ícono" />
      {children}
    </ItemNavStyle>
  );
};

export default ItemNav;
