import React, {useState} from "react";
import ux from "./Logos/ux.png";
import "./styles/ux.css"
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";


const Ux = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
        const handleOpenModal = () => setIsModalOpen(true);
        const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
        <motion.div
                onClick={handleOpenModal}
                className="container-ux"
                layoutId="ux-modal" // Shared ID for the animation
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: isModalOpen ? "10px" : "20px" }}
            >
                <h3>User eXperience</h3>
                <img className="logo-ux" src={ux} alt="UX Logo" />
            </motion.div>
        <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="User eXperience"
                content={
                    <p>
                        This will contain the audio/video explanation for UX. 
                        You can add recordings or videos here later.
                    </p>
                }
                layoutId="ux-modal"
            />
        </>
    );
};

export default Ux;
