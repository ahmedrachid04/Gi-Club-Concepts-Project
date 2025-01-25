import React, {useState} from "react";
import agile from "./Logos/agile.jpg";
import "./styles/agility.css";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";


const Agility = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
        <motion.div
                onClick={handleOpenModal}
                className="container-agility"
                layoutId="agility-modal" // Shared ID for the animation
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: isModalOpen ? "10px" : "20px" }}
            >
                <h3>Agility</h3>
                <img className="logo-agility" src={agile} alt="Agility Logo" />
            </motion.div>
        <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Agility"
                content={
                    <p>
                        This will contain the audio/video explanation for Agility. 
                        You can add recordings or videos here later.
                    </p>
                }
                layoutId="agility-modal"
            />
        </>
    );
};

export default Agility;
