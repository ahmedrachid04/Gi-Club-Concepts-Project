import React, {useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/modal.css";

const Modal = ({ isOpen, onClose, title, content, layoutId }) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        layoutId={layoutId} // Match this ID with the one in the square
                        initial={{ borderRadius: "20px" }}
                        animate={{ borderRadius: "10px" }}
                        exit={{ borderRadius: "20px" }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing on modal content click
                    >
                        <button className="modal-close" onClick={onClose} aria-label="Close Modal">
                            &times;
                        </button>
                        <h3>{title}</h3>
                        <div>{content}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
