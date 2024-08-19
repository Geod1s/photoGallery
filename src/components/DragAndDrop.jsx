// src/components/DragAndDrop.js
import React from 'react';

const DragAndDrop = ({ onDrop }) => {
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="drop-zone" onDrop={onDrop} onDragOver={handleDragOver}>
            Drag and drop your photos here
        </div>
    );
};

export default DragAndDrop;
