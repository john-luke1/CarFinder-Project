import React from "react";
import { Modal, ModalBody } from "reactstrap";
import PropTypes from "prop-types";
import "../style/modal.css";

const ModalComponent = ({ isOpen, toggle, title, content, buttonText }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalBody className="text-center">
        <h5 className="modal__title">{title}</h5>
        <p className="modal__content">{content}</p>
        <button className="modal__btn" onClick={toggle}>
          {buttonText || "Close"}
        </button>
      </ModalBody>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  buttonText: PropTypes.string,
};

export default ModalComponent;
