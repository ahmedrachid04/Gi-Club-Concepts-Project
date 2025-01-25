import React, {useState} from "react";
import git from "./Logos/git.png"
import "./styles/git.css"
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";


const Git = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
        const handleOpenModal = () => setIsModalOpen(true);
        const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
        <motion.div
                onClick={handleOpenModal}
                className="container-git"
                layoutId="git-modal" // Shared ID for the animation
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: isModalOpen ? "10px" : "20px" }}
            >
                <h3>Version Control with Git</h3>
                <img className="logo-git" src={git} alt="git Logo" />
            </motion.div>
        <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title="Git"
                content={
                    <p>
                        This will contain the audio/video explanation for Version Control. 
                        You can add recordings or videos here later.
                    </p>
                }
                layoutId="git-modal"
            />
        </>
    );
};

export default Git;
