import React, {useState} from "react";
import ux from "./Logos/ux.png";
import "./styles/ux.css"
import Modal from "./Modal";

const Ux = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
        const handleOpenModal = () => setIsModalOpen(true);
        const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
        <div className="container-ux"
            onClick={handleOpenModal}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
            <h3>User eXperience(UX)</h3>
            <img className="logo-ux" src={ux} alt="Agility Logo"></img>

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

export default Ux;
