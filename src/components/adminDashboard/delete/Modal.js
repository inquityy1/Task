import React, { useRef } from "react";

import "./modal.css";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <div
          className="ui dimmer active background"
          ref={modalRef}
          onClick={closeModal}
        >
          <div className="modal-wrapper">
            <div
              className="close-modal-button"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              <h2>X</h2>
            </div>
            <div className="header-content">
              <h1>Are You Sure You Want To Delete This Item ?</h1>
            </div>
            <div className="buttons">
              <div>
                <button className="ui button red">Yes</button>
              </div>
              <div>
                <button
                  className="ui button"
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
