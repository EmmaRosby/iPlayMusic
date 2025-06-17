import HeaderNav from "../components/header-nav/header-nav";
import Navigation from "../components/navigation/navigation";
import Carousel from "../components/playlist-carousel/carousel";

function PlaylistPage() {
    return (  
        <>
            <HeaderNav 
                title="Playlist"
                navigateReturn={false}
                search={true}
                color={"#fff"}
            />
                <div className="bg-img">
                    <img src='/public/sound-wave.png' alt="" />
                </div>
            <main className="playlist-page">
                <h2 className="title title-white">Playlists</h2>
                <Carousel />
            </main>
            
            <Navigation />
        </>
    );
}

export default PlaylistPage;