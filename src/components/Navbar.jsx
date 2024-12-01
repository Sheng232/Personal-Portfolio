import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun , faMoon } from "@fortawesome/free-solid-svg-icons"
import {useState, useEffect} from "react"

export default function Navbar(){
    const [isDark, setIsDark ] = useState(true);

    useEffect(()=>{
        !isDark ? setLightMode() : setDarkMode();
    },[isDark])

    function changeMode(){
        setIsDark(prevState => !prevState);
    }
    function setLightMode(){
        const globalVar = document.querySelector(":root");
        globalVar.style.setProperty('--background-color', '#ffffff');
        globalVar.style.setProperty('--primary-color', '#272727');
        globalVar.style.setProperty('--tertiary-color', '#c0c1d4');
    }
    function setDarkMode(){
        const globalVar = document.querySelector(":root");
        globalVar.style.setProperty('--background-color', '#2e2e2e');
        globalVar.style.setProperty('--primary-color', '#c0c1d4');
        globalVar.style.setProperty('--tertiary-color', '#272727');
    }
    return(
        <>
            <nav>
                <a className="logo flex-center" href="#empty-nav">Sheng.Jian()</a>
                <div>
                    <a className="about" href="#skills">About</a>
                    <a className="my-work" href="#projects">My work</a>
                    <a className="contact" href="#contact">Contact</a>
                    <FontAwesomeIcon icon = {isDark ? faMoon : faSun} 
                        className="darkmode-button" 
                        onClick = {changeMode}
                        />
                </div>
                
            </nav>
            <div className="empty-nav" id="empty-nav"></div>
        </>
    )
}