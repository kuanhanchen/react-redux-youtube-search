import React, { useEffect } from 'react';
import Draggable from "react-draggable";
import { isMobile } from "./utilities/helper";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    let isMounted = true; // note this flag denote mount status
    const handleClick = (e) => {
      if (e.target && e.target.className === "modal" && isMounted) {
        return onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("click", handleClick);
    }
    return () => { isMounted = false };
  }, [isOpen, onClose]);

  return (
    <div className="modal" data-testid="modal">
      {isMobile() ? (
        <div className="modal-content-mobile">
          {children}
        </div>
      ) : (
        <Draggable>
          <div className="modal-content">
            {children}
          </div>
        </Draggable>
      )}
    </div>
  )}

export default Modal;
