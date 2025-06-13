import GenreFilter from "../components/genre/genre-filter";
import HeaderNav from "../components/header-nav/header-nav";
import Navigation from "../components/navigation/navigation";

function CategoriesPage() {
    return (  
        <>
        <HeaderNav 
            title="Categories"
            navigateReturn={false}
            search={true}
            color={"#341931"}
        />
        <main>
            <h2 className="title">Categories</h2>
            <GenreFilter />
        </main>
        <Navigation />
        </>
    );
}

export default CategoriesPage;