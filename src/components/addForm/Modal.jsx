import React from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import "./modal.css";

const Modal = ({ modalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#71ccca",
    },
  };
  return (
    <ReactModal isOpen={modalOpen} style={{ customStyles }}>
      <div className="modal-inner">
        <label>Expense Added Successfully!</label>
        <img
          src={require("../../assets/images/added-image.png").default}
          alt="Expense Added"
          className="added-image"
        />
        <Link to="/">
          <div className="take-home-button">
            <AiOutlineHome />
            Home
          </div>
        </Link>
      </div>
    </ReactModal>
  );
};

export default Modal;
