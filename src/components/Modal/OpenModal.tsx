"use client";

import Modal from "react-modal";
import {ModalPC} from "./ModalPc";
import { useShop } from "@/hooks/useChomp";
import { ModalMobil } from "./ModalMovil";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    borderRadius: "10px",
    overflow: "visible",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("#root");

export const OpenModal = () => {
  const { modal} = useShop();

  return (
    <Modal
      isOpen={modal}
      style={customStyles}
      contentLabel="Modal Product"
      ariaHideApp={false}
    >
      <ModalPC />
      <ModalMobil />
    </Modal>
  );
}
