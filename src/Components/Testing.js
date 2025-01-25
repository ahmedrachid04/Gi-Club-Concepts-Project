import React, {useState} from "react";
import testing from "./Logos/test.png"
import "./styles/test.css"
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";


const Testing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
        const handleOpenModal = () => setIsModalOpen(true);
        const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
        <motion.div
                onClick={handleOpenModal}
                className="container"
                layoutId="testing-modal" // Shared ID for the animation
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: isModalOpen ? "10px" : "20px" }}
            >
                <h3>Testing and Q&A</h3>
                <img className="logo" src={testing} alt="Test Logo" />
            </motion.div>
        <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Testing and Q&A"
                content={
                    <p>
                        This will contain the audio/video explanation for Quality Assurance. 
                        You can add recordings or videos here later.
                    </p>
                }
                layoutId="testing-modal"
            />
        </>
    );
};

export default Testing;
