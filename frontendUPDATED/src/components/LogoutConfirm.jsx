import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const LogoutConfirm = ({ isOpen, toggle, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirm Logout</ModalHeader>
      <ModalBody>
        Are you sure you want to logout?
      </ModalBody>
      <ModalFooter>
      <Button color="danger" onClick={onConfirm}>Logout</Button>
      <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default LogoutConfirm;
