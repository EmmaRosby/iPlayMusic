import { useEffect, useState } from "react";
import albumsData from '/json/albums.json';
import { Link } from "react-router";
import './new-releases.scss';

function NewReleases() {
    const [newReleases, setNewReleases] = useState([]);

    useEffect(() => {
        // Simulating an API call to fetch album data
        setNewReleases(albumsData);
    }, []);

    return (
        <>
            <div className="slider-header">
                <h3 className="slider-header__headline">New releases</h3>
                <button className="slider-header__view-all">View all</button>
            </div>
            <div className="releases">
                <ul className="releases__albums">
                    {newReleases.length === 0 ? (
                        <p>Loading albums...</p>
                    ) : (
                        newReleases.map((newRelease) => (
                            <li key={newRelease.id} >
                                <Link to={`/album/${newRelease.id}`} className="releases__album">
                                    <div className="releases__album__card">
                                        <img src={newRelease.cover} alt={newRelease.title} className="releases__album__card__cover" />
                                        <div className="releases__album__card__details">
                                            <h4 className="releases__album__card__details__title">{newRelease.title}</h4>
                                            <p className="releases__album__card__details__artist">{newRelease.artist}</p>
                                        </div>
                                    </div>
                                    <p className="releases__album__card__amount">{newRelease.numberOfSongs} Songs</p>
                                </Link>

                            </li>

                        ))
                    )}

                </ul>
            </div>


        </>
    );
}

export default NewReleases;