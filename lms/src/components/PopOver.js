import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactWhatsapp from 'react-whatsapp';

function PopOver(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
         Talk to us on <strong>WhatsApp!!</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Click the below button to chat with us: <br/><br/>
          <ReactWhatsapp class="btn btn-outline-success" number="+91 7030 20 0057" message="I am interested in joining a course!">WhatsApp Us</ReactWhatsapp>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button class="btn btn-outline-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopOver;