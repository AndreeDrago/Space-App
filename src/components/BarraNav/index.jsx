//*React
import styled from "styled-components";

//*componentes
import ItemNav from "./ItemNav";

const ListaStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 236px;
`;

const BarraNav = () => {
  return (
    <aside>
      <nav>
        <ListaStyle>
          <ItemNav
            activo
            iconoActivo="iconos/home-activo.png"
            iconoInactivo="iconos/home-inactivo.png"
          >
            Inicio
          </ItemNav>

          <ItemNav
            iconoActivo="iconos/mas-vistas-activo.png"
            iconoInactivo="iconos/mas-vistas-inactivo.png"
          >
            Más Vistas
          </ItemNav>

          <ItemNav
            iconoActivo="iconos/me-gusta-activo.png"
            iconoInactivo="iconos/me-gusta-inactivo.png"
          >
            Me gusta
          </ItemNav>

          <ItemNav
            iconoActivo="iconos/nuevas-activo.png"
            iconoInactivo="iconos/nuevas-inactivo.png"
          >
            Nuevas
          </ItemNav>

          <ItemNav
            iconoActivo="iconos/sorprendeme-activo.png"
            iconoInactivo="iconos/sorprendeme-inactivo.png"
          >
            Sorpréndeme
          </ItemNav>
        </ListaStyle>
      </nav>
    </aside>
  );
};

export default BarraNav;
