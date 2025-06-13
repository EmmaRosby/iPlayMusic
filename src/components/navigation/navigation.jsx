import { BiSolidAlbum, BiSolidCategory } from "react-icons/bi";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import { MdLibraryMusic } from "react-icons/md";
import { Link } from "react-router";
import './navigation.scss';

function Navigation() {
    return (
        <>
            <footer>
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li><Link to='/'><BiSolidAlbum className="navigation__icon" /></Link></li>
                        <li><Link to='/playlist-page'><MdLibraryMusic className="navigation__icon" /></Link></li>
                        <li><Link to='/'><GiSoundWaves className="navigation__icon-center" /></Link></li>
                        <li><Link to='/'><FaCircleHalfStroke className="navigation__icon" /></Link></li>
                        <li><Link to='/categories-page'><BiSolidCategory className="navigation__icon" /></Link></li>
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