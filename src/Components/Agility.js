import React, {useState} from "react";
import agile from "./Logos/agile.jpg";
import "./styles/agility.css";
import Modal from "./Modal";

const Agility = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
        <div
            onClick={handleOpenModal}
            className="container-agility"
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
            <h3>Agility</h3>
            <img className="logo-agility" src={agile} alt="Agility Logo"></img>
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

export default Agility;
