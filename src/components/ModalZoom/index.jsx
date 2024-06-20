//*React
import styled from "styled-components";
import { useContext } from "react";

//*Context
import { GlobalContext } from "./../../context/GlobalContext";

//*Componentes
import Imagen from "../Galeria/Imagen";
import BotonIcono from "../Galeria/BotonIcono";
import useFotoModal from "../../hooks/useFotoModal";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 75%;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;
const ModalZoom = () => {
  const { photoSelect, openStateModal, closeModal } = useFotoModal();

  return (
    <>
      {openStateModal && (
        <>
          <Overlay />
          <DialogEstilizado open={!!photoSelect} onClose={() => closeModal()}>
            <Imagen foto={photoSelect} expandida={true} />
            <form method="dialog">
              <BotonIcono formMethod="dialog">
                <img src="/iconos/cerrar.png" alt="Icono de cerrar" />
              </BotonIcono>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
