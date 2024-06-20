import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function useFotoModal() {
  const { state, dispatch } = useContext(GlobalContext);

  const openModal = (foto) => {
    dispatch({ type: "SET_FOTO_SELECT", payload: foto });
  };
  const closeModal = () => {
    dispatch({ type: "SET_FOTO_SELECT", payload: null });
  };
  const photoSelect = state.fotoSelect;
  const openStateModal = state.modalOpen;

  return { photoSelect, openStateModal, openModal, closeModal };
}

export default useFotoModal;
