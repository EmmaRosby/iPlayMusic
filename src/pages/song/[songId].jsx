import { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeaderNav from "../../components/header-nav/header-nav";
import songsData from '/json/songs.json';
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import '../../scss/pages/song.scss';

function PlayerPage() {
    const { songId } = useParams();
    const [song, setSong] = useState({});
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
        // Simulating an API call to fetch song data
        const selectedSong = songsData.find(song => song.id == songId);
        if (selectedSong) {
            setSong(selectedSong);
        }
    }, [songId]);

        const formatPlaytime = (playtime) => {
        const totalMinutes = playtime / 60;
        const minutes = Math.floor(totalMinutes);
        const seconds = Math.floor((totalMinutes - minutes) * 60);
        return `${minutes}:${seconds}`;
    };

    return (  
        <>
            <HeaderNav
                title="Playing"
                navigateReturn={true}
                search={false}
            />

            <main className="player">
                {song && (
                    <>
                        <img src={song.coverImg} alt={song.title} className="cover-img"/>

                        <div className="player__details">
                            <div className="song-details">
                                <h2 className="song-details__title">{song.title}</h2>
                                <p className="song-details__artist">{song.artist}</p>
                            </div>
                            <div className="duration">
                                <div className="duration__progress"></div>
                                <div className="duration__time">
                                    <p className="duration__time__digit">0:00</p>
                                    <p className="duration__time__digit">{formatPlaytime(song.playtime)}</p>
                                </div>
                            </div>
                            <div className="controls">
                                <MdSkipPrevious className="controls__small controls__gradiant"/>
                                <TbPlayerTrackPrevFilled className="controls__small"/>
                                { playing ? <FaCirclePlay 
                                    onClick={() => setPlaying(!playing)}
                                    className="controls__large controls__gradiant"/>
                                    :
                                    <FaCirclePause
                                    onClick={() => setPlaying(!playing)}
                                    className="controls__large controls__gradiant" />
                                }
                                <TbPlayerTrackNextFilled className="controls__small"/>
                                <MdSkipNext className="controls__small controls__gradiant"/>
                            </div>
                        </div>
                    </>
                )
                    }
            </main>
             <svg width="0" height="0">
                <linearGradient id="gradient" x1="0%" y1="50%" x2="50%" y2="0%">
                    <stop stopColor="#EE0979" offset="0%" />
                    <stop stopColor="#FF6A00" offset="100%" />
                </linearGradient>
            </svg>
        </>
    );
}

export default PlayerPage;