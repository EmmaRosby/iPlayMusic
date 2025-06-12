import { useState, useEffect } from 'react';
import './track-card.scss';
import albumsData from '/json/albums.json';

function TrackCard() {
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        // Simulating an API call to fetch albums data
        setAlbums(albumsData);
    }, []);

    return (
        <>
            <div className="track-cards-container">
                {albums.length === 0 ? (
                    <p>Loading albums...</p>
                ) : (
                    albums.map((album) => (
                        <div key={album.id} className="track-card">
                            <div className="track-card__info">
                                <h2 className="track-card__info__title">{album.title}</h2>
                                <p className="track-card__info__artist">{album.artist}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default TrackCard;