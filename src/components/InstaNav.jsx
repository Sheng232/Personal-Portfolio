import Home from "../assets/Home.png"
import Search from "../assets/Search.png"
import Reels from "../assets/Reels.png"
import Messages from "../assets/Messages.png"
import HeroImg from "../assets/Hero-image.png"
import { Link } from "react-router-dom"
export default function InstaNav(){
    return(
        <nav className="insta-nav">
            <Link className="link" to="Personal-Portfolio/"><img src={Home} alt="home-page" className="insta-buttons" /></Link>
            <Link className="link" to="Personal-Portfolio/Search"><img src={Search} alt="Search-button" className="insta-buttons"/></Link>
            <Link className="link" to="Personal-Portfolio/Reels"><img src={Reels} alt="Reels-button" className="insta-buttons"/></Link>
            <Link className="link" to="Personal-Portfolio/Messages"><img src={Messages} alt="Messages-button" className="insta-buttons"/></Link>
            <Link className="link" to="Personal-Portfolio/Profile"><img src={HeroImg} alt="profile-pic" className="profile-pic"/></Link>
        </nav>
    )
}