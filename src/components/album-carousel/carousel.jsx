import { useEffect, useState } from "react";
import palylistData from '/json/playlist.json';
import './carousel.scss';

function Carousel() {
    const [palylist, setPalylist] = useState([]);

    useEffect(() => {
        // Simulating an API call to fetch palylist data
        setPalylist(palylistData);
    }, []);

    return (
        <>
            <div className="playlist-carousel">
                {palylist.length === 0 ? (
                    <p>Loading palylist...</p>
                ) : (
                    palylist.map((playlist) => (
                        <div key={playlist.id} className="playlist-carousel__card">
                            <img src={playlist.coverImage} alt={playlist.title} className="playlist-carousel__card__cover" />
                            <h3 className="playlist-carousel__card__title">{playlist.title}</h3>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Carousel;