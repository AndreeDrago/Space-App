//*React
import styled from "styled-components";
import { useContext } from "react";

//*Context
import { GlobalContext } from "../../context/GlobalContext";

//*Componentes
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tag from "./Tags";
import Imagen from "./Imagen";
import Cargando from "./../Cargando/index";

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

const Galeria = () => {
  //const { setTag, fotosGaleria, alSeleccionarFoto, alAlternarFavorito } = useContext(GlobalContext);
  const { state } = useContext(GlobalContext);

  return state.fotosGaleria.length === 0 ? (
    <>
      <Tag />
      <Cargando></Cargando>
    </>
  ) : (
    <>
      <Tag />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galería</Titulo>
          <ImagenesContainer>
            {state.fotosGaleria
              .filter((foto) => {
                return (
                  state.filtro == "" ||
                  foto.titulo
                    .toLocaleLowerCase()
                    .normalize("NFD")
                    .replace(/\p{Diacritic}/gu, "")
                    .includes(
                      state.filtro
                        .toLocaleLowerCase()
                        .normalize("NFD")
                        .replace(/\p{Diacritic}/gu, "")
                    )
                );
              })
              .map((foto) => (
                <Imagen key={foto.id} foto={foto} />
              ))}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
