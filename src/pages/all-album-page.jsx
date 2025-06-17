import AlbumSlider from "../components/album-carousel/album-carousel";
import HeaderNav from "../components/header-nav/header-nav";
import Navigation from "../components/navigation/navigation";
import NewReleases from "../components/new-releases/new-releases";

function AllAlbumPage() {
    return (  
        <>
        <HeaderNav 
            title="Music"
            navigateReturn={false}
            search={true}
        />
        <main>
            <h2 className="title">All albums</h2>
            <AlbumSlider />
            <NewReleases />
        </main> 
        <Navigation />
        </>
    );
}

export default AllAlbumPage;