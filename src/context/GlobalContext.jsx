import { createContext, useEffect, useReducer, useState } from "react";

//*Json
import fotos from "../fotos.json";

export const GlobalContext = createContext();

const initialState = {
  filtro: "",
  fotoSelect: null,
  fotosGaleria: fotos,
  tag: 0,
  modalOpen: false,
  //const alSeleccionarFoto = (foto) => setFotoSelect(foto);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTRO":
      return { ...state, filtro: action.payload };
    case "SET_FOTO_SELECT":
      return {
        ...state,
        fotoSelect: action.payload,
        modalOpen: action.payload != null ? true : false,
      };
    case "SET_FOTOS_GALERIA":
      return { ...state, fotosGaleria: action.payload };
    case "SET_TAG":
      return { ...state, tag: action.payload };
    case "ALTERNAR_FAVORITO":
      const fotosGaleria = state.fotosGaleria.map((fotoGaleria) => {
        return {
          ...fotoGaleria,
          favorita:
            fotoGaleria.id === action.payload.id
              ? !action.payload.favorita
              : fotoGaleria.favorita,
        };
      });

      if (action.payload.id === state.fotoSelect?.id) {
        return {
          ...state,
          fotosGaleria: fotosGaleria,
          fotoSelect: {
            ...state.fotoSelect,
            favorita: !state.fotoSelect.favorita,
          },
        };
      } else {
        return {
          ...state,
          fotosGaleria: fotosGaleria,
        };
      }
    default:
      return state;
  }
};

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  /* //*Consumir por API
  const [fotosGaleria, setFotosGaleria] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/api/fotos")
        .then((response) => response.json())
        .then((data) => {
          setFotosDeGaleria(data);
          setCargando(false);
        });
    }, 5000);
  }, []);
  */
  useEffect(
    () => {
      //? useEfect, primera sección
      const fotosFiltradas = fotos.filter((foto) => {
        const filtroPorTag = !state.tag || foto.tagId === tag;

        //? useEfect, segunda sección
        return filtroPorTag;
      });

      //setFotosGaleria(fotosFiltradas);
      dispatch({ type: "SET_FOTOS_GALERIA", payload: fotosFiltradas });
    }, //? useEfect, tercera sección
    [state.tag]
  );

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
