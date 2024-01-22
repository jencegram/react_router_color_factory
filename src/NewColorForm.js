import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function NewColorForm({ addColor }) {
    const [formData, setFormData] = useState({ name: "", value: "#ffffff" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        navigate("/colors");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '300px' }}>
                <div>
                    <label htmlFor="name">Color Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="value">Color Value:</label>
                    <input
                        type="color"
                        id="value"
                        name="value"
                        value={formData.value}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add color to the list</button>
            </form>
        </div>
    );
}

export default NewColorForm;
