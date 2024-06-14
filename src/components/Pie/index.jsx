import { styled } from "styled-components";

const PieEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 22px;
  box-sizing: border-box;
`;

const IconoContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  li {
    display: inline-block;
    margin-right: 32px;
  }
`;

const PieTexto = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
`;

function Pie() {
  return (
    <PieEstilizado>
      <IconoContainer>
        <li>
          <a href="https://www.facebook.com/Andree.Dragonelle/">
            <img src="/imagenes/redes/facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="https://github.com/AndreeDrago">
            <img src="/imagenes/redes/github.png" alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/andree_drago/">
            <img src="/imagenes/redes/instagram.svg" alt="" />
          </a>
        </li>
      </IconoContainer>
      <PieTexto>Desarrollado Andree Barrios Cisneros Castillo</PieTexto>
    </PieEstilizado>
  );
}

export default Pie;
