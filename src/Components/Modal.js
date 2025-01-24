import React from "react";
import "./styles/modal.css"; // Style your modal

const Modal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // Prevent closing on content click
            >
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <h3>{title}</h3>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Modal;
