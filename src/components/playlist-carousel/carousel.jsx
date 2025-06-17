import { useEffect, useState, useRef } from "react";
import playlistData from '/json/playlist.json';
import './carousel.scss';
import { FaCirclePlay } from "react-icons/fa6";

function Carousel() {
    const [playlist, setPlaylist] = useState([]);
    const [activeCardId, setActiveCardId] = useState(null);
    const carouselRef = useRef(null);

    useEffect(() => {
        // Simulating an API call to fetch playlist data
        setPlaylist(playlistData);
    }, []);

    useEffect(() => {
        if (playlist.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
                        // Extract card ID from the element's dataset
                        const cardId = entry.target.dataset.id;
                        setActiveCardId(Number(cardId));
                    }
                });
            },
            {
                root: carouselRef.current,
                rootMargin: '0px',
                threshold: 0.75, // Card is considered centered when 75% visible
            }
        );

        // Get all card elements and observe them
        const cards = document.querySelectorAll('.playlist-carousel__card');
        cards.forEach(card => observer.observe(card));

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, [playlist]);

    // converting song.playtime to minutes and seconds format
    const formatPlaytime = (playtime) => {
        const totalMinutes = playtime / 60;
        const minutes = Math.floor(totalMinutes);
        const seconds = Math.floor((totalMinutes - minutes) * 60);
        return `${minutes}:${seconds}`;
    };

    return (
        <>
            <div className="playlist-carousel" ref={carouselRef}>
                {playlist.length === 0 ? (
                    <p>Loading playlist...</p>
                ) : (
                    playlist.map((playlist) => (
                        <div
                            key={playlist.id}
                            data-id={playlist.id}
                            className={`playlist-carousel__card ${activeCardId === playlist.id ? 'active' : ''}`}
                        >
                            <img src={playlist.coverImage} alt={playlist.title} className="playlist-carousel__card__cover" />
                            <h3 className="playlist-carousel__card__title">{playlist.title}</h3>
                        </div>
                    ))
                )}
            </div>
            {activeCardId && (
                <div className="active-card">
                    <ul className="active-card__songs">
                        {playlist.find(p => p.id === activeCardId)?.songs.map((song) => (
                            <li key={song.id} className="active-card__song">
                                <div className="active-card__song-main">
                                    <FaCirclePlay className="active-card__play"/>

                                    <div className="active-card__details">
                                        <p className="active-card__details__title">{song.songTitle}</p>
                                        <p className="active-card__details__artist">{song.artist}</p>
                                    </div>
                                </div>
                                <p className="active-card__song-time">{formatPlaytime(song.playtime)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Carousel;