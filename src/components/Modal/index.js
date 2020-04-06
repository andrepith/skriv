import React from "react";
import Modal from "react-modal";

const ModalComponent = ({ children, isOpen, onRequestClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
