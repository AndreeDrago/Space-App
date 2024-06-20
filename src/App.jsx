//*React
import styled from "styled-components";

//*Context
import GlobalContextProvider from "./context/GlobalContext";

//*Assets
import banner from "./assets/banner.png";

//*Componentes
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraNav from "./components/BarraNav";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import Pie from "./components/Pie";
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
  return (
    <GlobalContextProvider>
      <BodyStyle>
        <GlobalStyles />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraNav />
            <ContenidoGaleria>
              <Banner
                texto="La galería más completa del espacio"
                backgroundImage={banner}
              />
              <Galeria />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom />
        <Pie />
      </BodyStyle>
    </GlobalContextProvider>
  );
};

export default App;
