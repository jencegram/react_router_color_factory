import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import Color from './Color';
import NewColorForm from './NewColorForm';

function RoutesComponent({ colors, addColor }) {
    return (
        <Routes>
            <Route path="/colors" element={<ColorList colors={colors} />} />
            <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
            <Route path="/colors/:color" element={<Color colors={colors} />} />
            <Route path="*" element={<Navigate to="/colors" replace />} />
        </Routes>
    );
}

export default RoutesComponent;
