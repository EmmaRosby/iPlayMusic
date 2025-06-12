import { FaAngleLeft} from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";
import './header-nav.scss';

function HeaderNav({ title, navigateReturn = true, search = false,  showSearch, setShowSearch, color }) {

    const navigate = useNavigate();


   
    return (  
        <>
            <header className="header-nav">
                {navigateReturn && <FaAngleLeft color={color} onClick={() => navigate(-1)} className="header-nav__left" />}
                <h1 className="header-nav__title" style={{ color: color }}>{title}</h1>
                {search && <IoSearch
                    color={color}
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