//*React
import styled from "styled-components";
import { useState, useEffect } from "react";

//*Assets
import banner from "./assets/banner.png";

//*Componentes
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraNav from "./components/BarraNav";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import Pie from "./components/Pie";

//*Json
import fotos from "./fotos.json";
import ModalZoom from "./components/ModalZoom/index";

const BodyStyle = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 95vw;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelect, setFotoSelect] = useState(null);

  const [filtro, setFiltro] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const fotosFiltradas = fotos.filter((foto) => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo =
        !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPorTag && filtroPorTitulo;
    });
    setFotosGaleria(fotosFiltradas);
  }, [filtro, tag]);

  const alAlternarFavorito = (foto) => {
    if (foto.id === fotoSelect?.id) {
      setFotoSelect({
        ...fotoSelect,
        favorita: !fotoSelect.favorita,
      });
    }

    setFotosGaleria(
      fotosGaleria.map((fotoGaleria) => {
        return {
          ...fotoGaleria,
          favorita:
            fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita,
        };
      })
    );
  };

  return (
    <>
      <BodyStyle>
        <GlobalStyles />
        <AppContainer>
          <Cabecera filtro={filtro} setFiltro={setFiltro} />
          <MainContainer>
            <BarraNav />
            <ContenidoGaleria>
              <Banner
                texto="La galería más completa del espacio"
                backgroundImage={banner}
              />
              <Galeria
                fotos={fotosGaleria}
                alAlternarFavorito={alAlternarFavorito}
                alSeleccionarFoto={(foto) => setFotoSelect(foto)}
                setTag={setTag}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={fotoSelect}
          alCerrar={() => setFotoSelect(null)}
          alAlternarFavorito={alAlternarFavorito}
        />
        <Pie />
      </BodyStyle>
    </>
  );
};

export default App;
