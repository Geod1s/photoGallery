import React from 'react';
import Photo from './Photo';

const PhotoGroup = ({ date, sources, photos, onDelete }) => {
    return (
        <div className="photo-group">
            <h3>{date}</h3>
            {Object.keys(sources).map(source => (
                <div key={source} className="source-group">
                    <h4>{source}</h4>
                    <div className="photo-row">
                        {sources[source].map(photo => (
                            <Photo key={photo.id} photo={photo} onDelete={onDelete} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PhotoGroup;
