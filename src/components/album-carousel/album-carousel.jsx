import { useEffect, useState } from "react";
import albumsData from '/json/albums.json';
import { Link } from "react-router";
import './album-carousel.scss';

function AlbumSlider() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // Simulating an API call to fetch album data
        setAlbums(albumsData);
    }, []);

    return (
        <>
            <div className="slider-header">
                <h3 className="slider-header__headline">Featured albums</h3>
                <button className="slider-header__view-all">View all</button>
            </div>
            <div className="album-slider">
                {albums.length === 0 ? (
                    <p>Loading albums...</p>
                ) : (
                    albums.map((album) => (
                        <Link to={`/album/${album.id}`} key={album.id} className="album-card">
                            <img src={album.cover} alt={album.title} />
                        </Link>
                    ))
                )}
            </div>


        </>
    );
}

export default AlbumSlider;