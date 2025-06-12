import { FaAngleLeft} from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";
import './header-nav.scss';

function HeaderNav({ title, navigateReturn = true, search = false,  showSearch, setShowSearch }) {

    const navigate = useNavigate();


   
    return (  
        <>
            <header className="header-nav">
                {navigateReturn && <FaAngleLeft color='#000' onClick={() => navigate(-1)} className="header-nav__left" />}
                <h1 className="header-nav__title">{title}</h1>
                {search && <IoSearch
                    color="#000"
                    className="header-nav__right"
                    onClick={() => {
                        setShowSearch(!showSearch);
                    }}
                />}
                
            </header>
        </>
    );
}

export default HeaderNav;