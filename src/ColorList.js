import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function ColorList({ colors }) {
    const colorEntries = Object.entries(colors).reverse();

    return (
        <div className="container">
            <h1>Welcome to the color factory.</h1>
            <Link to="/colors/new" className="addButton">Add a color</Link>
            <ul className="color-list">
                {colorEntries.map(([colorName, colorValue]) => (
                    <li key={colorName} style={{ textAlign: 'center' }}>
                        <Link to={`/colors/${colorName}`} style={{ color: colorValue }}>
                            {colorName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ColorList;
