import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './styles.css';


function App() {
    // Preset colors
    const [colors, setColors] = useState({
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    });

    // Function to add a new color
    const addColor = (newColor) => {
        setColors(oldColors => ({ ...oldColors, [newColor.name]: newColor.value }));
    };

    return (
        <Router>
            <Routes colors={colors} addColor={addColor} />
        </Router>
    );
}

export default App;

