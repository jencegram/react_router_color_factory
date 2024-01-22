import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';

function Color({ colors }) {
  const { color } = useParams();
  const colorHex = colors[color] || "#FFFFFF"; // Fallback to white if color is not found

  if (!colors[color]) {
      return <Navigate to="/colors" replace />;
  }

  const colorStyle = {
      backgroundColor: colorHex
  };

  return (
      <div className="container" style={colorStyle}> 
          <div> 
              <h1>This is {color}.</h1>
              <h1>Isn't it beautiful?</h1>
              <Link to="/colors">Go Back</Link>
          </div>
      </div>
  );
}

export default Color;