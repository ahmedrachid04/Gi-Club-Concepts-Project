import React, {useState} from "react";
import testing from "./Logos/test.png"
import "./styles/test.css"
import Modal from "./Modal";

const Testing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
        const handleOpenModal = () => setIsModalOpen(true);
        const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
        <div className="container"
            onClick={handleOpenModal}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
            <h3>Testing and Q&A</h3>
            <img className="logo" src={testing} alt="Agility Logo"></img>

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

export default Testing;
