// src/components/SortDropdown.js
import React from 'react';

const SortDropdown = ({ onSortChange }) => {
    return (
        <div className="sort-dropdown">
            <select onChange={onSortChange}>
                <option value="">Sort by...</option>
                <option value="date">Date</option>
                <option value="size">Size</option>
            </select>
        </div>
    );
};

export default SortDropdown;
