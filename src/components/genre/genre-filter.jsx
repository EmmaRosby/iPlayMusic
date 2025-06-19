import { useEffect, useState } from "react";
import genreData from '/json/genre.json';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import './genre-filter.scss';
import { HiDotsHorizontal } from "react-icons/hi";

function GenreFilter() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        setGenres(genreData);
    }, []);

    return (
        <>
            <div className="filter">
                {genres.length === 0 ? (
                    <p>Loading genres...</p>
                ) : (
                    <div className="filter__container">
                        {genres.map((genre) => (
                            <details key={genre.id} name="genre" className="filter__container__details">
                                <summary className="filter__container__details__genre">
                                    <span>{genre.name}</span>
                                    <HiDotsHorizontal />
                                </summary>
                                <ul className="filter__container__details__subgenres">
                                    {genre.subGenres.map((subGenre) => (
                                        <li key={subGenre.id} className="filter__container__details__subgenres__item">
                                            {/* Link to the subgenre page */}
                                            <Link to={`/genre/${subGenre.id}`}>
                                                {subGenre.name}
                                                <span><IoIosArrowForward /></span>
                                            </Link>

                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default GenreFilter;