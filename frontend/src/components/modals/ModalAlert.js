import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalAlert = ({ title, text }) => {
  const [show, setShow] = useState(false);

  const handleOpenModal = () => setShow(true);
  const handleCloseModal = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleOpenModal}>
        Alert Button
      </Button>
      <Modal show={show} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAlert;
