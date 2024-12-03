import HomeClick from "../assets/Home-onClick.png"
import Search from "../assets/Search.png"
import Reels from "../assets/Reels.png"
import Messages from "../assets/Messages.png"
import Home from "../assets/Home.png"
import SearchClick from "../assets/Search-onClick.png"
import ReelsClick from "../assets/Reels-onClick.png"
import MessagesClick from "../assets/Messages-onClick.png" 
import HeroImg from "../assets/Hero-image.png"
import { NavLink, Link } from "react-router-dom"


export default function InstaNav(){
    console.log(Home);
    return(
        <nav className="insta-nav">
        <NavLink
        className="link"
        to="Personal-Portfolio/"
        // Use isActive function to determine if the link is active
        style={({ isActive }) => ({
          backgroundImage: isActive ? `url(${HomeClick})` : `url(${Home})`,
        })}
        end
        />
        <NavLink
        className="link"
        to="Personal-Portfolio/Search"
        style={({ isActive }) => ({
          backgroundImage: isActive ? `url(${SearchClick})` : `url(${Search})`,
        })}
        />
        <NavLink
        className="link"
        to="Personal-Portfolio/Reels"
        style={({ isActive }) => ({
          backgroundImage: isActive ? `url(${ReelsClick})` : `url(${Reels})`,
        })}
        />
        <NavLink
        className="link"
        to="Personal-Portfolio/Messages"
        style={({ isActive }) => ({
          backgroundImage: isActive ? `url(${MessagesClick})` : `url(${Messages})`,
        })}
        />
        <NavLink
        className="link pfp"
        to="Personal-Portfolio/Profile"
        style={{
          backgroundImage: `url(${HeroImg})`
        }}
        />
        </nav>
    )
}