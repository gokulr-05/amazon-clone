import React from "react";
import { Button, Modal } from "react-bootstrap";
import { customerPics } from "../ProductDetails";

const ImgModal = ({
  customerImgIndex,
  customerModal,
  openCustomerModal,
  closeCustomerModal,
}) => {
  return (
    <Modal size="lg" show={customerModal} onHide={closeCustomerModal} centered>
      <Modal.Body>
        <img
          className="h-100 w-100"
          src={customerPics[customerImgIndex]}
          alt="customer"
        />
      </Modal.Body>
    </Modal>
  );
};

export default ImgModal;
