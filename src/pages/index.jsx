import HeaderNav from "../components/header-nav/header-nav";
import Navigation from "../components/navigation/navigation";
import TrackCard from "../components/track-card/track-card";

function Index() {
    return (  
        <>
            <HeaderNav 
                title="Featured"
                navigateReturn={false}
                search={true}
            />
            <main className="index">
                <h1 className="index__title">Featured</h1>
                <TrackCard />
                
            </main>
            <Navigation />
        </>
    );
}

export default Index;