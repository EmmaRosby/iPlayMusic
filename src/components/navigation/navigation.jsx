import { BiSolidAlbum, BiSolidCategory } from "react-icons/bi";
import { GiSoundWaves } from "react-icons/gi";
import { MdLibraryMusic } from "react-icons/md";
import { NavLink } from "react-router";
import './navigation.scss';
import Darkmode from "../darkmode/darkmode";

function Navigation() {
    return (
        <>
            <footer>
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li>
                            <NavLink 
                                to='/all-album-page' className={({ isActive, isPending}) => 
                                    isPending ? "pending" : isActive ? "active" : "" }> 
                                <BiSolidAlbum className="navigation__icon" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/playlist-page'className={({ isActive, isPending}) => 
                                    isPending ? "pending" : isActive ? "active" : "" }>
                                <MdLibraryMusic className="navigation__icon" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/'className={({ isActive, isPending}) => 
                                    isPending ? "pending" : isActive ? "active" : "" }>
                                <GiSoundWaves className="navigation__icon-center" />
                            </NavLink>
                        </li>
                        <li>
                           <Darkmode />
                        </li>
                        <li>
                            <NavLink 
                                to='/categories-page'className={({ isActive, isPending}) => 
                                    isPending ? "pending" : isActive ? "active" : "" }>
                                <BiSolidCategory className="navigation__icon" />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </footer>
            <svg width="0" height="0">
                <linearGradient id="gradient" x1="0%" y1="50%" x2="50%" y2="0%">
                    <stop stopColor="#EE0979" offset="0%" />
                    <stop stopColor="#FF6A00" offset="100%" />
                </linearGradient>
            </svg>
        </>
    );
}

export default Navigation;