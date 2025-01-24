import React from "react";
import Agility from "./Components/Agility";
import Git from "./Components/Git";
import Testing from "./Components/Testing";
import Ux from "./Components/Ux";
import './App.css';

const App = () => {
    return (
        <div style={{backgroundColor: "#1d1d1d"}}>
            <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                padding: "40px",
                minHeight: "92vh",
            }}
        >
            <Git/>
            <Agility />
            <Testing />
            <Ux />
        </div>
        </div>
    );
};

export default App;
