import React, { useState } from 'react';
import photosData from '../assets/photo.json';
import { extractName, formatDate } from '../utils/utils'; // Import extractName here
import PhotoGroup from './PhotoGroup';
import DragAndDrop from './DragAndDrop';
import SortDropdown from './SortDropdown';


// ... rest of your PhotoGallery code

import '../styles/photogallery.css';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState(photosData);

    const handleDelete = (id) => {
        setPhotos(photos.filter(photo => photo.id !== id));
    };

    const handleDrop = (event) => {
        event.preventDefault();

        const files = Array.from(event.dataTransfer.files);
        const newPhotos = files.map((file, index) => {
            return {
                id: photos.length + index + 1,
                src: URL.createObjectURL(file),
                alt: file.name,
                size: file.size,
                date: new Date().toISOString(),
                source: extractName(file.name),
            };
        });

        setPhotos([...photos, ...newPhotos]);
    };

    const handleSortChange = (event) => {
        const value = event.target.value;
        if (value === 'date') {
            sortByDate();
        } else if (value === 'size') {
            sortBySize();
        }
    };

    const sortByDate = () => {
        setPhotos([...photos].sort((a, b) => new Date(b.date) - new Date(a.date)));
    };

    const sortBySize = () => {
        setPhotos([...photos].sort((a, b) => b.size - a.size));
    };
    

    const groupPhotosByDateAndSource = () => {
        const grouped = {};
    
        photos.forEach(photo => {
            const formattedDate = formatDate(photo.date);
            const source = photo.source || 'Unknown'; // Default to 'Unknown' if no source
    
            if (!grouped[formattedDate]) {
                grouped[formattedDate] = {};
            }
    
            if (!grouped[formattedDate][source]) {
                grouped[formattedDate][source] = [];
            }
    
            grouped[formattedDate][source].push(photo);
        });
    
        return grouped;
    };
    

    const formattedPhotos = groupPhotosByDateAndSource();

    return (
        <div className="photo-gallery">
            <h2>Total Photos: {photos.length}</h2>
            <DragAndDrop onDrop={handleDrop} />
            <SortDropdown onSortChange={handleSortChange} />

            {Object.keys(formattedPhotos).map(date => (
                <PhotoGroup 
                    key={date} 
                    date={date} 
                    sources={formattedPhotos[date]}
                    onDelete={handleDelete} 
                />
            ))}
        </div>
    );
};

export default PhotoGallery;
