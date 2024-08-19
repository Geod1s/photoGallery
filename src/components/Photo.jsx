// import React from 'react';

// const Photo = ({ id, src, alt, date, source, onDelete }) => {
//     const formattedDate = formatDate(date);

//     return (
//         <div className="photo-container">
//             <div className="photo-info">
//                 <span>{formattedDate} | {source}</span>
//             </div>
//             <img src={src} alt={alt} className="photo" />
//             <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
//         </div>
//     );
// };

// const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const today = new Date();
    
//     const isToday = date.toDateString() === today.toDateString();
//     const isYesterday = date.toDateString() === new Date(today.setDate(today.getDate() - 1)).toDateString();

//     if (isToday) {
//         return 'Today';
//     } else if (isYesterday) {
//         return 'Yesterday';
//     } else {
//         return date.toLocaleDateString(); // Default to full date
//     }
// };

// export default Photo;
// src/components/Photo.js
import React from 'react';
import { extractName } from '../utils/utils';

const Photo = ({ photo, onDelete }) => {
    return (
        <div className="photo-container">
            <p className="photo-source">{extractName(photo.alt)}</p> {/* Display the extracted name */}
            <img src={photo.src} alt={photo.alt} className="photo" />
            <button className="delete-button" onClick={() => onDelete(photo.id)}>X</button>
        </div>
    );
};

export default Photo;
