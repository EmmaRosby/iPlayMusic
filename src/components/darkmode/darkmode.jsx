import { FaCircleHalfStroke } from "react-icons/fa6";
import { useEffect } from "react";
import './darkmode.scss';

function Darkmode() {
    // Check localStorage on component mount
    useEffect(() => {
        // Get dark mode preference from localStorage
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        
        // Apply dark mode if it was enabled previously
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        }
    }, []);
    
    // Toggle the dark mode class on the body element
    const toggleDarkMode = () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        
        // Store the preference in localStorage
        localStorage.setItem("darkMode", isDarkMode);
    }
    
    return (  
        <>
         <FaCircleHalfStroke 
         className="navigation__icon darkmode-icon" 
            onClick={toggleDarkMode}
         />
        </>
    );
}

export default Darkmode;