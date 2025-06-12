import AlbumCarousel from "../components/album-carousel/album-carousel";
import HeaderNav from "../components/header-nav/header-nav";
import Navigation from "../components/navigation/navigation";

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
                <AlbumCarousel />
            </main>
            
            <Navigation />
        </>
    );
}

export default PlaylistPage;