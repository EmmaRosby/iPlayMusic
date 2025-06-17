import { useParams } from "react-router";
import HeaderNav from "../../components/header-nav/header-nav";
import { useEffect, useState } from "react";
import albumsData from '/json/albums.json';
import { FaCirclePlay } from "react-icons/fa6";
import Navigation from "../../components/navigation/navigation";
import '../../components/playlist-carousel/carousel.scss';
import '../../scss/pages/album.scss';

function AlbumPage() {
    const { albumId } = useParams();
    const [album, setAlbum] = useState({});



    useEffect(() => {
        const selectedAlbum = albumsData.find(album => album.id == albumId);
        if (selectedAlbum) {
            setAlbum(selectedAlbum);
        }
    }, [albumId]);

    const formatPlaytime = (playtime) => {
        const totalMinutes = playtime / 60;
        const minutes = Math.floor(totalMinutes);
        const seconds = Math.floor((totalMinutes - minutes) * 60);
        return `${minutes}:${seconds}`;
    };

    return (
        <>
            <HeaderNav
                title="Album"
                navigateReturn={true}
                search={true}
                color={'#fff'}
            />

            <main className="album">
                {album && (
                    <>
                        <img src={album.cover} alt={album.title} className="album__cover"/>
                        <div className="album__details">
                            <h2 className="album__details__title">{album.title}</h2>
                            <p className="album__details__amount">{album.numberOfSongs} songs</p>
                            <p>genres hastags</p>
                            <ul className="album__details__genres">
                                {album.genres?.map((genre, index) => (
                                    <li key={index} className="album__details__genre">#{genre}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="active-card">
                            <p>All songs</p>
                            <ul className="active-card__songs">
                                {album.songs?.map((song) => (
                                    <li key={song.id} className="active-card__song">
                                        <div className="active-card__song-main">
                                            <FaCirclePlay className="active-card__play" />
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
                    </>
                )}
            </main>
            <Navigation />


        </>
    );
}

export default AlbumPage;