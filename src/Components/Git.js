import React, {useState} from "react";
import git from "./Logos/git.png"
import "./styles/git.css"
import Modal from "./Modal";

const Git = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
        const handleOpenModal = () => setIsModalOpen(true);
        const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
        <div className="container-git"
            onClick={handleOpenModal}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
            <h3>Version Control with Git</h3>
            <img className="logo-git" src={git} alt="Agility Logo"></img>
        </div>
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
            />
        </>
    );
};

export default Git;
