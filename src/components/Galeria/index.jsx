//*React
import styled from "styled-components";

//*Componentes
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tag from "./Tags";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
`;

const ImagenesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = (props) => {
  const { fotos = [], alSeleccionarFoto, alAlternarFavorito, setTag } = props;
  return (
    <>
      <Tag setTag={setTag} />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galería</Titulo>
          <ImagenesContainer>
            {fotos.map((foto) => (
              <Imagen
                alAlternarFavorito={alAlternarFavorito}
                alSolicitarZoom={alSeleccionarFoto}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;