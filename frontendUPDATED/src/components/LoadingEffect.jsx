import React from 'react';
import { Modal, ModalBody, Spinner } from 'reactstrap';

const LoadingEffect = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen} centered>
      <ModalBody className="text-center">
        <Spinner type="grow" color="primary" />
        <div>Loading...</div>
      </ModalBody>
    </Modal>
  );
};

export default LoadingEffect;
